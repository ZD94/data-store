/**
 * Created by wlh on 2017/6/9.
 */

import { DB } from '@jingli/database';
import { SearchParams, TASK_NAME } from "../types";
import { IHotel, ITicket } from "@jingli/common-type";
import sequelize = require("sequelize");
import { ISearchHotelParams } from "model/interface";
import { CityService, ICity } from "model/city";
import { SelectDataHelp } from "api/data-support";
import Logger from '@jingli/logger';
import { DtaskMgr } from "model/dnodeAPI";
import * as moment from "moment";

import Common from "model/util";
import * as config from "@jingli/config";

var logger = new Logger("data-store");

//缓存失效时间
const CACHE_DURATION = 2 * 60 * 60 * 1000;

export enum EOperationStatus {
    BEFORE_PROCESS = 'BEFORE_PROCESS',
    PROCESSING = 'PROCESSING',
    CRAWL_SUCCESS = 'CRAWL-SUCCESS',
    CRAWL_FAIL = 'CRAWL-FAIL',
    CACHE = 'CACHE-SUCCESS',
    FULL = 'FULL-SUCCESS',
    FINAL = 'FINAL-SUCCESS',
    EMPTY = 'EMPTY',
    REQUEST_SUCCESS = 'REQUEST-SUCCESS'

}
export interface Data<T extends (ITicket | IHotel)> extends Array<T> {
    [idx: number]: T;
}

export class HotelStorage extends SelectDataHelp {
    constructor(private model) {
        super();
    }

    async setData(input: ISearchHotelParams, name: string, result) {
        let longitude = input.longitude;
        let latitude = input.latitude;
        if (!result.length) {
            return;
        }

        return this.model.create({
            channel: name,
            location: `POINT(${longitude} ${latitude})`,
            checkInDate: input.checkInDate,
            checkOutDate: input.checkOutDate,
            data: result,
            city: input.city,
        })
    }

    async getData(input: ISearchHotelParams, name: string): Promise<{ created_at: string, data: IHotel[], [index: string]: any }> {
        if (typeof input == 'string') {
            input = JSON.parse(input);
        }
        let checkInDate = moment(input.checkInDate).format("YYYY-MM-DD");
        let checkOutDate = moment(input.checkOutDate).format("YYYY-MM-DD");
        //最远距离1km
        const MAX_DISTANCE = 1000;
        /** 
         * 按照坐标查找, 缓存筛选更加严格
         **/
        let where2 = sequelize.where(
            sequelize.fn('ST_Distance',
                sequelize.fn('ST_GeometryFromText', `POINT(${input.longitude} ${input.latitude})`), sequelize.col('location')
            ), {
                '$lte': MAX_DISTANCE,
            });
        let where = {
            channel: name,
            checkInDate,
            checkOutDate,
            city: {
                in: await this.getSelectCitis(input.city)
            },
            data: {
                ne: '[]'
            }
        }

        let result = await this.model.findOne({ where: [where, where2], order: [["created_at", "desc"]] });
        if (result) {
            result.catchHit = true;
            return result;
        }

        /* 按照入住日期没有找到缓存数据，扩大搜索范围 */
        delete where.checkInDate;
        delete where.checkOutDate;
        let resultLarger = await this.model.findOne({ where: [where], order: [["created_at", "desc"]] });
        if (!resultLarger) {
            return null;
        }

        let days = moment(checkOutDate).diff(checkInDate, 'days');
        let originDays = moment(resultLarger.checkOutDate).startOf('day').diff(moment(resultLarger.checkInDate).startOf('day'), 'days');
        for (let item of resultLarger.data) {
            /* 处理住宿时间 */
            item.checkInDate = input.checkInDate;
            item.checkOutDate = input.checkOutDate;

            /* 处理住宿价格，价格为几天内总价 */
            if (item.agents) {
                item.agents.map((agent) => {
                    agent.price = agent.price / originDays * days;
                    return agent;
                });
            }
        }

        return resultLarger;
    }
}

export let hotelStorage = new HotelStorage(DB.models['CacheHotel']);

export class HotelRealTimeData extends DtaskMgr {
    constructor() {
        super();
    }
    async getData(input: ISearchHotelParams, name: string): Promise<any[]> {
        if (typeof input == 'string') {
            input = JSON.parse(input);
        }
        let ret;
        ret = await this.runDtask(name, input);
        if (ret && ret.length) {
            await hotelStorage.setData(input, name, ret);
        }
        return ret;
    }
}

export let hotelRealTimeData = new HotelRealTimeData();