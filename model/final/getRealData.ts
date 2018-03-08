/*
 * @Author: Mr.He 
 * @Date: 2017-12-25 15:32:09 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2017-12-26 11:07:51
 * @content what is the content of this file. */

import { hotelRealTimeData } from "../../api/hotels";
import { trafficRealTimeData } from "../../api/traffic";
import { ISearchHotelParams, ISearchTicketParams } from 'model/interface';
import {getCityInfo, nearby, CityWithDistanceInterface} from '@jingli/city';

export default class RealData {
    static async getHotelRealTimeData(input: ISearchHotelParams, name: string, num?: number): Promise<any[]> {
        num = num ? num : 0;

        // if (num && num >= 3) {
        //     //已经拉取了三次，不再拉取数据
        //     throw new Error("getHotelRealTimeData 3 times");
        // }

        try {

            return await hotelRealTimeData.getData(input, name);
        } catch (e) {
            console.error(e);
            num++;
            // await this.getHotelRealTimeData(input, name, num);
            return [];
        }
    }

    /**
     *  获取实时预算
     * @param input 参数
     * @param name 渠道名称
     * @param num 拉取次数
     */
    static async getTrafficRealTimeData(input: ISearchTicketParams, name: string, num?: number): Promise<any[]> {
        num = num ? num : 0;

        // if (num && num >= 3) {
        //     //已经拉取了三次，不再拉取数据
        //     throw new Error("getTrafficRealTimeData 3 times");
        // }
        let originPlace = await getCityInfo(input.originPlace);
        if (!originPlace.isCity) {
            originPlace = (await RealData.nearbyCity(originPlace, 100)) || originPlace;
        }
        let destination = await getCityInfo(input.destination);
        if (!destination.isCity) {
            destination = (await RealData.nearbyCity(destination, 100) || destination);
        }
        input.originPlace = originPlace.id;
        input.destination = destination.id;
        try {
            return await trafficRealTimeData.getData(input, name);
        } catch (e) {
            console.error(e);
            num++;
            // await this.getTrafficRealTimeData(input, name, num);
            return [];
        }
    }

    static async nearbyCity(place: CityInterface, distance: number) :Promise<CityWithDistanceInterface>{
        let cities = await nearby({ latitude: place.latitude, longitude: place.longitude }, distance, true);
        if (cities && cities.length) {
            place = cities[0];
            return place as CityWithDistanceInterface;
        }
        return null;
    }
}