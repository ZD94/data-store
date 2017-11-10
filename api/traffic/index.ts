/**
 * Created by wlh on 2017/6/9.
 */


'use strict';
import API from '@jingli/dnode-api';
import {SearchParams, TASK_NAME} from '../types';
import {AbstractDataSupport, DataStorage} from "../data-support";
import {ITicket} from "@jingli/common-type";
import config = require("@jingli/config");
import {DB} from '@jingli/database';
import {RequestTypes} from "../data-support"

export interface ISearchTicketParams extends SearchParams {
    leaveDate: string;
    originPlace: string;
    destination: string;
}

export class TicketStorage implements DataStorage<ITicket> {
    constructor(private model) {
    }

    async setData(name: string, input: any, result) {
        if (typeof input == 'string') {
            input = JSON.parse(input);
        }
        input = <ISearchTicketParams>input;
        return this.model.create({
            channel: name,
            from: input.originPlace,
            to: input.destination,
            date: input.leaveDate,
            data: result,
            originData: null
        })
    }

    async getData(name: string, input: any) :Promise<ITicket[]> {
        if (typeof input == 'string') {
            input = JSON.parse(input);
        }
        input = <ISearchTicketParams>input;
        let where = {
            channel: name,
            date: input.leaveDate,
            from: input.originPlace,
            to: input.destination,
            created_at: {
                '$gte': new Date(Date.now() - 10 * 60 * 1000)
            }
        }
        let result = await this.model.findOne({where: where, order: [["created_at", "desc"]]});
        if (result)
            return result.data as ITicket[];
        return [];
    }
}

export class TrafficSupport extends AbstractDataSupport<ITicket> {

    constructor(storage: TicketStorage) {
        super(storage);
    }

    async search_tickets(params: ISearchTicketParams) {
        let self = this;
        let flightTickets = await self.search_flight_tickets(params);
        if (!flightTickets) {
            flightTickets = [];
        }
        let trainTickets = await self.search_train_tickets(params);
        if (!trainTickets) {
            trainTickets = [];
        }
        return [...trainTickets, ...flightTickets];
    }

    private async search_train_tickets(params: ISearchTicketParams) {
        let {originPlace, destination, leaveDate} = params;
        let originPlaceObj = await API['place'].getCityInfo({cityCode: originPlace});
        let destinationObj = await API['place'].getCityInfo({cityCode: destination});

        let result:  ITicket[] =[];

        if (!originPlaceObj.isAbroad && !destinationObj.isAbroad) {
            result = await this.getData(TASK_NAME.TRAIN, params, RequestTypes.traffic);
        }
        //欧铁先注释掉了
        //this.getData(TASK_NAME.TRAIN_EUR, params);
        return result;
    }

    private async search_flight_tickets(params: ISearchTicketParams) {
        let {originPlace, destination,leaveDate} = params;
        let originPlaceObj = await API['place'].getCityInfo({cityCode: originPlace});
        let destinationObj = await API['place'].getCityInfo({cityCode: destination});

        let result:  ITicket[] =[];

        if (!originPlaceObj.isAbroad && !destinationObj.isAbroad) {
            if (params.isCacheData) {
                result = await this.getData(TASK_NAME.FAST_FLIGHT, params, RequestTypes.traffic);
            } else { 
                result = await this.getData(TASK_NAME.FLIGHT, params, RequestTypes.traffic);
            }
        }
        if (originPlaceObj.isAbroad || destinationObj.isAbroad) {
            if (params.isCacheData) {
                result = await this.getData(TASK_NAME.FAST_FLIGHT_ABROAD, params, RequestTypes.traffic);
            } else { 
                result = await this.getData(TASK_NAME.FLIGHT_ABROAD, params, RequestTypes.traffic);
            }
        }
        return result;
    }
}

var trafficSupport = new TrafficSupport(new TicketStorage(DB.models['CacheTicket']));
export default trafficSupport;