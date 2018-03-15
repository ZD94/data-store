/*
 * @Author: Mr.He 
 * @Date: 2017-12-23 12:05:15 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-03-15 18:57:49
 * @content 优先获取cache数据，没有cache数据时 获取全价数据 */

import { ISearchHotelParams, ISearchTicketParams, BudgetType, DataOrder, HOTLE_CACHE_TIME, TRAFFIC_CACHE_TIME, STEP } from 'model/interface';
import { hotelStorage, hotelRealTimeData } from "../../api/hotels";
import { trafficStorage, trafficRealTimeData } from "../../api/traffic";
import API from "@jingli/dnode-api";
import common from 'model/util';
import moment = require("moment");
import { fullPriceService } from "model/fullPrice";
import { getCityInfo, CityInterface, CityWithDistanceInterface, nearby } from '@jingli/city';
import config from "@jingli/config";

export class CacheData {
    async getCacheData(params: DataOrder) {
        let ps: Promise<{ step: STEP, data: any[] }>[];
        if (params.type == BudgetType.HOTEL) {
            let input = params.input as ISearchHotelParams;
            ps = params.channels.map(async (name) => {
                return await this.hotelCache(input, name);
            });
        } else {
            let input = params.input as ISearchTicketParams;
            let originPlace = await getCityInfo(input.originPlace);
            if (!originPlace.isCity) {
                originPlace = (await this.nearbyCity(originPlace, 100)) || originPlace;
            }
            let destination = await getCityInfo(input.destination);
            if (!destination.isCity) {
                destination = (await this.nearbyCity(destination, 100) || destination);
            }
            input.originPlace = originPlace.id;
            input.destination = destination.id;
            ps = params.channels.map(async (name) => {
                return await this.trafficCache(input, name);
            });
        }

        let datas = await Promise.all(ps);

        /* 
         * 当存在多个 channel 数据时，有FINAL数据时舍弃其它STEP数据；没有时全部输出；
         * 应对场景，如 上海到杭州，飞机的始终没有，只有火车频道的有； 
         **/
        let result = [];
        for (let item of datas) {
            if (item.step == STEP.FINAL) {
                result.push(...item.data);
            }
        }

        let FIN = true;
        if (!result.length) {
            FIN = false;
            for (let item of datas) {
                result.push(...item.data);
            }
        }

        if (params.type == BudgetType.HOTEL) {
            params.data = common.hotelMergeData(result);
        } else {
            params.data = common.trafficMergeData(result);
        }

        params.step = FIN ? STEP.FINAL : STEP.CACHE;
        return params;
    }

    async nearbyCity(place: CityInterface, distance: number): Promise<CityWithDistanceInterface> {
        let cities = await nearby({ latitude: place.latitude, longitude: place.longitude }, distance, true);
        if (cities && cities.length) {
            place = cities[0];
            return place as CityWithDistanceInterface;
        }
        return null;
    }

    /* @params isOrigin 是否只是查看数据库中数据, 避免走全价逻辑 */
    async hotelCache(input: ISearchHotelParams, name: string, isOrigin?: Boolean): Promise<{ step: STEP, data: any[] }> {
        let FIN = true;
        let cacheData = await hotelStorage.getData(input, name);
        if (!cacheData || !cacheData.data.length) {
            if (isOrigin) {
                return {
                    data: [],
                    step: STEP.CACHE
                }
            }
            FIN = false;

            common.setWebTrackEndPoint({
                "__topic__": config.serverType,
                "project": "data-store",
                "eventName": "CACHE",
                "searchCondition": JSON.stringify(input),
                "hit": 'false'
            });

            // 缓存中没有数据，走全价逻辑
            return await fullPriceService.getHotelFullPrice(input, true);
        }

        common.setWebTrackEndPoint({
            "__topic__": config.serverType,
            "project": "data-store",
            "eventName": "CACHE",
            "searchCondition": JSON.stringify(input),
            "hit": 'true'
        });

        let created = moment(cacheData.created_at);
        let diffTime = moment().diff(created, "minutes");

        if (cacheData.catchHit && diffTime <= HOTLE_CACHE_TIME) {
            return {
                data: cacheData.data,
                step: STEP.FINAL
            }
        } else {
            /* 从外部获取的住宿价格为几天的总价，需要按传入的时间处理价格 */
            return {
                data: this.dealHotelPrice(input, cacheData),
                step: STEP.CACHE
            }
        }
    }

    /* 缓存数据按照请求时间，处理价格 */
    dealHotelPrice(input: ISearchHotelParams, data: any) {
        let targetDays = moment(moment(input.checkOutDate).format("YYYY-MM-DD")).diff(moment(moment(input.checkInDate).format("YYYY-MM-DD")), 'days');
        let dataDays = moment(moment(data.checkOutDate).format("YYYY-MM-DD")).diff(moment(moment(data.checkInDate).format("YYYY-MM-DD")), 'days');

        return data.data.map((item) => {
            if (!item.agents || !Array.isArray(item.agents)) {
                return item;
            }
            for (let agent of item.agents) {
                agent.price = (agent.price / dataDays * targetDays).toFixed(1);
            }
            return item;
        });
    }

    /* @params isOrigin 是否只是查看数据库中数据，避免走全价逻辑 */
    async trafficCache(input: ISearchTicketParams, name: string, isOrigin?: Boolean): Promise<{ step: STEP, data: any[] }> {
        let FIN = true;
        let result = [];
        let cacheData = await trafficStorage.getData(input, name);
        if (!cacheData || !cacheData.data.length) {
            if (isOrigin) {
                return {
                    data: [],
                    step: STEP.CACHE
                }
            }

            FIN = false;

            common.setWebTrackEndPoint({
                "__topic__": config.serverType,
                "project": "data-store",
                "eventName": "CACHE",
                "searchCondition": JSON.stringify(input),
                "hit": 'false'
            });

            // 缓存中没有数据，走全价逻辑
            return await fullPriceService.getTrafficFullPrice(input, true);
        }

        common.setWebTrackEndPoint({
            "__topic__": config.serverType,
            "project": "data-store",
            "eventName": "CACHE",
            "searchCondition": JSON.stringify(input),
            "hit": 'true'
        });

        let created = moment(cacheData.created_at);
        let diffTime = moment().diff(created, "minutes");

        if (cacheData.catchHit && diffTime <= TRAFFIC_CACHE_TIME) {
            return {
                data: cacheData.data,
                step: STEP.FINAL
            }
        } else {
            return {
                data: cacheData.data,
                step: STEP.CACHE
            }
        }
    }
}

let cacheData = new CacheData();
export default cacheData;