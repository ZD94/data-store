/*
 * @Author: Mr.He 
 * @Date: 2017-12-17 11:48:17 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2017-12-17 13:58:01
 * @content what is the content of this file. */


export * from "./modelData";
import { TrafficPrice } from "./traffic-price";
import { Param, BudgetType } from "model/event";
import { ISearchHotelParams } from "../../api/hotels";
import { ISearchTicketParams } from "../../api/traffic";
import { flightModel, trainModel, testHotel } from "./modelData.newone";
import _ = require("lodash");


export class FullPriceService extends TrafficPrice {
    constructor() {
        super();
    }

    async getFullPriceBudget(params: Param) {
        if (params.type == BudgetType.HOTEL) {
            return await this.getHotelFullPrice(params.input as ISearchHotelParams);
        } else {
            return await this.getTrafficFullPrice(params.input as ISearchTicketParams);
        }
    }

    async getTrafficFullPrice(input: ISearchTicketParams) {
        let result = [];
        let flightData = await this.getFlightFullPrice({
            from: input.originPlace,
            to: input.destination
        });

        for (let item of flightData) {
            let data = _.clone(flightModel);
            data.originPlace = input.originPlace;
            data.destination = input.destination;
            data.agents[0].cabins = [{
                name: item.degree,
                price: item.price * 0.8   //给全价的8折
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
        return result;
    }

    async getHotelFullPrice(input: ISearchHotelParams) {
        return testHotel;
    }
}

export let fullPriceService = new FullPriceService();
