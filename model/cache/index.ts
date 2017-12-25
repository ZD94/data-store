/*
 * @Author: Mr.He 
 * @Date: 2017-12-23 12:05:15 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2017-12-24 17:44:41
 * @content 优先获取cache数据，没有cache数据时 获取全价数据 */

import { ISearchHotelParams, ISearchTicketParams, BudgetType, DataOrder, HOTLE_CACHE_TIME, TRAFFIC_CACHE_TIME, STEP } from 'model/interface';
import { hotelStorage, hotelRealTimeData } from "../../api/hotels";
import { trafficStorage, trafficRealTimeData } from "../../api/traffic";
import API from "@jingli/dnode-api";
import common from 'model/util';
import moment = require("moment");
import { fullPriceService } from "model/fullPrice";



export class CacheData {
    async getCacheData(params: DataOrder) {
        console.log("getCacheData");
        if (params.type == BudgetType.HOTEL) {
            return await this.hotelCache(params);
        } else {
            return await this.trafficCache(params);
        }
    }

    async hotelCache(params: DataOrder): Promise<DataOrder> {
        console.log("hotelCache", params);
        let input = params.input as ISearchHotelParams;
        let FIN = true;
        let result = [];
        let ps = params.channels.map(async (name) => {
            let cacheData = await hotelStorage.getData(input, name);
            if (!cacheData || !cacheData.data.length) {
                FIN = false;
                // 拉取及时数据，创建promise

                console.log("缓存中没有数据，走全价逻辑");
                // 缓存中没有数据，走全价逻辑
                let full = await fullPriceService.getHotelFullPrice(params, true);
                return full.data;
            }

            let created = moment(cacheData.created_at);
            let diffTime = moment().diff(created, "minutes");
            if (diffTime > HOTLE_CACHE_TIME) {
                // 拉取及时数据，创建promise

                FIN = false;
            }
            return cacheData.data;
        });

        let datas = await Promise.all(ps);

        for (let item of datas) {
            result.push(...item);
        }
        console.log("hotelCache 222", params);
        params.data = common.hotelMergeData(result);
        if (FIN) {
            params.step = STEP.FINAL;
        }
        return params;
    }

    async trafficCache(params: DataOrder) {

        let input = params.input as ISearchTicketParams;
        let FIN = true;
        let result = [];
        let ps = params.channels.map(async (name) => {
            let cacheData = await trafficStorage.getData(input, name);
            if (!cacheData || !cacheData.data.length) {
                // 拉取及时数据，创建promise


                // 缓存中没有数据，走全价逻辑
                let full = await fullPriceService.getTrafficFullPrice(params, true);
                return full.data;
            }

            let created = moment(cacheData.created_at);
            let diffTime = moment().diff(created, "minutes");
            if (diffTime > HOTLE_CACHE_TIME) {
                // 拉取及时数据，创建promise

                FIN = false;
            }
            return cacheData.data;
        });

        let datas = await Promise.all(ps);

        for (let item of datas) {
            result.push(...item);
        }

        params.data = common.trafficMergeData(result);
        if (FIN) {
            params.step = STEP.FINAL;
        }
        return params;
    }
}

let cacheData = new CacheData();
export default cacheData;