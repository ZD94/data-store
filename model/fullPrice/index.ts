/*
 * @Author: Mr.He 
 * @Date: 2017-12-17 11:48:17 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-03-06 21:11:50
 * @content what is the content of this file. */


import { TrafficPrice } from "./traffic-price";
import { ISearchHotelParams, ISearchTicketParams, BudgetType, DataOrder, STEP } from "model/interface";
import { flightModel, trainModel, testHotel } from "./modelData.newone";
import _ = require("lodash");
import moment = require("moment");
import { getCityInfo, CityInterface, CityWithDistanceInterface, nearby } from '@jingli/city';


export class FullPriceService extends TrafficPrice {
    constructor() {
        super();
    }

    async getFullPriceData(params: DataOrder) {
        let input;
        if (params.type == BudgetType.HOTEL) {
            input = params.input as ISearchHotelParams;
            return await this.getHotelFullPrice(input);
        } else {
            input = params.input as ISearchTicketParams;
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
            return await this.getTrafficFullPrice(input);
        }
    } model/cache/index.ts

    async nearbyCity(place: CityInterface, distance: number): Promise<CityWithDistanceInterface> {
        let cities = await nearby({ latitude: place.latitude, longitude: place.longitude }, distance, true);
        if (cities && cities.length) {
            place = cities[0];
            return place as CityWithDistanceInterface;
        }
        return null;
    }

    async getTrafficFullPrice(input: ISearchTicketParams, isNotOrigin?: Boolean): Promise<{ step: STEP, data: any[] }> {
        let result = [];
        let flightData = await this.getFlightFullPrice({
            from: input.originPlace,
            to: input.destination
        });

        for (let item of flightData) {
            let data = _.clone(flightModel);
            data.originPlace = input.originPlace;
            data.destination = input.destination;
            data.departDateTime = moment(input.leaveDate).format();
            data.arrivalDateTime = moment(data.departDateTime).add(2, "hours").format();
            if (isNotOrigin) {
                item.price = item.price * 0.8;
            }

            data.agents[0].cabins = [{
                name: item.degree,
                price: item.price
            }];
            result.push(data);
        }

        let trainData = await this.getTrainFullPrice({
            from: input.originPlace,
            to: input.destination
        });

        for (let item of trainData) {
            let data = _.clone(trainModel);
            data.originPlace = input.originPlace;
            data.destination = input.destination;
            data.departDateTime = moment(input.leaveDate).format();
            data.arrivalDateTime = moment(data.departDateTime).add(2, "hours").format();
            data.agents[0].cabins = [{
                name: item.degree,
                price: item.price,
                remainNumber: 100
            }]
            result.push(data);
        }

        return {
            data: result,
            step: STEP.FULL
        }
    }

    async getHotelFullPrice(input: ISearchHotelParams, isNotOrigin?: Boolean) {
        return {
            data: testHotel,
            step: STEP.FULL
        }
    }
}

export let fullPriceService = new FullPriceService();



