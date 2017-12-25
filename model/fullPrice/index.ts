/*
 * @Author: Mr.He 
 * @Date: 2017-12-17 11:48:17 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2017-12-24 16:46:31
 * @content what is the content of this file. */


export * from "./modelData";
import { TrafficPrice } from "./traffic-price";
import { ISearchHotelParams, ISearchTicketParams, BudgetType, DataOrder, STEP } from "model/interface";
import { flightModel, trainModel, testHotel } from "./modelData.newone";
import _ = require("lodash");


export class FullPriceService extends TrafficPrice {
    constructor() {
        super();
    }

    async getFullPriceData(params: DataOrder) {
        console.log(" getFullPriceData ")
        if (params.type == BudgetType.HOTEL) {
            return await this.getHotelFullPrice(params);
        } else {
            return await this.getTrafficFullPrice(params);
        }
    }

    async getTrafficFullPrice(params: DataOrder, isNotOrigin?: Boolean) {
        let result = [];
        let input = params.input as ISearchTicketParams;
        let flightData = await this.getFlightFullPrice({
            from: input.originPlace,
            to: input.destination
        });

        for (let item of flightData) {
            let data = _.clone(flightModel);
            data.originPlace = input.originPlace;
            data.destination = input.destination;
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
            data.agents[0].cabins = [{
                name: item.degree,
                price: item.price,
                remainNumber: 100
            }]
            result.push(data);
        }

        params.data = result;
        return params;
    }

    async getHotelFullPrice(params: DataOrder, isNotOrigin?: Boolean) {
        params.data = testHotel;
        return params;
    }
}

export let fullPriceService = new FullPriceService();
