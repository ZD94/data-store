/**
 * Created by wlh on 2017/6/9.
 */

'use strict';
import {DB} from '@jingli/database';
import API from "@jingli/dnode-api";
import {AbstractDataSupport, DataStorage} from "../data-support";
import {TASK_NAME} from "../types";
import {IHotel} from "@jingli/common-type";
import Config = require("@jingli/config")
import sequelize = require("sequelize");

//缓存失效时间
const CACHE_DURATION = 2 * 60 * 60 * 1000;

export interface ISearchHotelParams {
    checkInDate: string;
    checkOutDate: string;
    city: string;
    latitude?: number;
    longitude?: number;
}

export class HotelStorage implements DataStorage<IHotel> {
    constructor(private model) {
    }

    async setData(name: string, input: any, result) {
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

    async getData(name: string, input: any) :Promise<IHotel[]>{
        if (typeof input == 'string') {
            input = JSON.parse(input);
        }
        //最远距离1km
        const MAX_DISTANCE = 1000;
        input = <ISearchHotelParams>input;
        let where = sequelize.where(
            sequelize.fn('ST_Distance',
                sequelize.fn('ST_GeometryFromText', `POINT(${input.longitude} ${input.latitude})`), sequelize.col('location')
            ),{
                '$lte': MAX_DISTANCE,
            });

        let where2 = {
                channel: name,
                checkInDate: input.checkInDate,
                checkOutDate: input.checkOutDate,
                city: input.city,
                created_at: {
                    '$gte': new Date( Date.now() - CACHE_DURATION)
                }
        }

        let result = await this.model.findOne({where: [where, where2], order: [["created_at", "desc"], ]});
        if (result) {
            return result.data as IHotel[];
        }
        return [];
    }
}

export class HotelSupport extends AbstractDataSupport<IHotel> {

    constructor(storage: HotelStorage) {
        super(storage);
    }

    async search_hotels(params: ISearchHotelParams) {
        let {city, latitude, longitude, checkInDate, checkOutDate} = params;
        let cityObj = await API['place'].getCityInfo({cityCode: city});
        if (!latitude || !longitude) {
            params.latitude = cityObj.latitude;
            params.longitude = cityObj.longitude;
        }

        let result: IHotel[] = [];
        if (!cityObj.isAbroad) {
            result = await this.getData(TASK_NAME.HOTEL, params);
        }
        if(cityObj.isAbroad) {
            result = await this.getData(TASK_NAME.HOTEL_ABROAD, params);
        }
        return result;
    }
}

var hotelSupport = new HotelSupport(new HotelStorage(DB.models['CacheHotel']));
export default hotelSupport;