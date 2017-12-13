/**
 * Created by wlh on 2017/6/9.
 */

import { DB } from '@jingli/database';
import API from "@jingli/dnode-api";
import { AbstractDataSupport, DataStorage } from "../data-support";
import { SearchParams, TASK_NAME } from "../types";
import { IHotel, ITicket } from "@jingli/common-type";
import sequelize = require("sequelize");
import Logger from '@jingli/logger';
var logger = new Logger("data-store");
import { Param } from "../../model/event";


//缓存失效时间
const CACHE_DURATION = 2 * 60 * 60 * 1000;
import { RequestTypes } from "../data-support"

export interface ISearchHotelParams {
    checkInDate: string;
    checkOutDate: string;
    city: string;
    latitude?: number;
    longitude?: number;
}

export interface Data<T extends (ITicket | IHotel)> extends Array<T> {
    [idx: number]: T;
}

export class HotelStorage {
    constructor(private model) {
    }

    async setData(input: ISearchHotelParams, name: string, result) {
        let longitude = input.longitude;
        let latitude = input.latitude;

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
        console.log(3333);
        let where2 = {
            channel: name,
            checkInDate: input.checkInDate,
            checkOutDate: input.checkOutDate,
            city: input.city,
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
    async getData(input: ISearchHotelParams, name: string) {
        if (typeof input == 'string') {
            input = JSON.parse(input);
        }
        let ret;
        try {
            ret = await API["dtask_mgr"].runTask({ name, input });
            console.log("HotelRealTimeData, go to the dtask_mgr");
        } catch (err) {
            logger.error(`DataStore ${name}, params: ${JSON.stringify(input)} Error:`, err);
            return [];
        }

        if (ret) {
            await hotelStorage.setData(input, name, ret);
        }
        return ret;
    }
}

export let hotelRealTimeData = new HotelRealTimeData();







/* 暂时保留，兼容之前的方法 */
export class HotelSupport extends AbstractDataSupport<IHotel> {

    constructor(storage) {
        super(storage);
    }

    async search_hotels(params: ISearchHotelParams) {
        let { city, latitude, longitude, checkInDate, checkOutDate } = params;
        let cityObj = await API['place'].getCityInfo({ cityCode: city });
        if (!latitude || !longitude) {
            params.latitude = cityObj.latitude;
            params.longitude = cityObj.longitude;
        }
        console.log(1111, cityObj);
        // params.latitude = 30.26;
        // params.longitude = 120.19;


        let result: IHotel[] = [];
        if (!cityObj.isAbroad) {
            result = await this.getData(TASK_NAME.HOTEL, params, RequestTypes.hotel);
        }
        if (cityObj.isAbroad) {
            result = await this.getData(TASK_NAME.HOTEL_ABROAD, params, RequestTypes.hotel);
        }
        return result;
    }
}

export var hotelSupport = new HotelSupport(hotelStorage);





// setTimeout(async () => {
//     let result = await hotelSupport.search_hotels({
//         checkInDate: "2017-12-22",
//         checkOutDate: "2017-12-24",
//         city: "CT_179"
//     });

//     console.log("result====>", result.length);
// }, 5000);