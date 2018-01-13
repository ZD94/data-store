/**
 * Created by wlh on 2017/6/9.
 */

import { DB } from '@jingli/database';
import API from "@jingli/dnode-api";
import { AbstractDataSupport, DataStorage, RequestTypes } from "../data-support";
import { SearchParams, TASK_NAME } from "../types";
import { IHotel, ITicket } from "@jingli/common-type";
import sequelize = require("sequelize");
import { ISearchHotelParams } from "model/interface";
import Logger from '@jingli/logger';
var logger = new Logger("data-store");


//缓存失效时间
const CACHE_DURATION = 2 * 60 * 60 * 1000;


export interface Data<T extends (ITicket | IHotel)> extends Array<T> {
    [idx: number]: T;
}

export class HotelStorage {
    constructor(private model) {
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

    async getData(input: ISearchHotelParams, name: string): Promise<{ created_at: string, data: IHotel[] }> {
        if (typeof input == 'string') {
            input = JSON.parse(input);
        }
        //最远距离1km
        const MAX_DISTANCE = 1000;
        input = <ISearchHotelParams>input;
        let where = sequelize.where(
            sequelize.fn('ST_Distance',
                sequelize.fn('ST_GeometryFromText', `POINT(${input.longitude} ${input.latitude})`), sequelize.col('location')
            ), {
                '$lte': MAX_DISTANCE,
            });
        let where2 = {
            channel: name,
            checkInDate: input.checkInDate,
            checkOutDate: input.checkOutDate,
            city: input.city,
            data: {
                ne: '[]'
            }
            // created_at: {
            //     '$gte': new Date( Date.now() - CACHE_DURATION)
            // }
        }
        let result = await this.model.findOne({ where: [where, where2], order: [["created_at", "desc"]] });

        return result;
    }
}

export let hotelStorage = new HotelStorage(DB.models['CacheHotel']);

export class HotelRealTimeData {
    async getData(input: ISearchHotelParams, name: string): Promise<any[]> {
        if (typeof input == 'string') {
            input = JSON.parse(input);
        }
        let ret;
        ret = await API["dtask_mgr"].runTask({ name, input });
        // console.log("****************", name, input);
        if (ret && ret.length) {
            await hotelStorage.setData(input, name, ret);
        }

        return ret;
    }
}

export let hotelRealTimeData = new HotelRealTimeData();