/**
 * Created by wlh on 2017/6/9.
 */

import API from '@jingli/dnode-api';
import { SearchParams, TASK_NAME } from '../types';
import { AbstractDataSupport, DataStorage } from "../data-support";
import { ITicket } from "@jingli/common-type";
import config from "@jingli/config";
import { DB } from '@jingli/database';
import { RequestTypes } from "../data-support";
import { Param } from "../../model/event";
import Logger from '@jingli/logger';
let logger = new Logger("data-store");

export interface ISearchTicketParams {
    leaveDate: string;
    originPlace: string;
    destination: string;
}

export class TicketStorage {
    constructor(private model) {
    }

    async setData(input: ISearchTicketParams, name: string, result) {
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

    async getData(input: ISearchTicketParams, name: string): Promise<{ data: ITicket[], created_at: string }> {
        if (typeof input == 'string') {
            input = JSON.parse(input);
        }
        input = <ISearchTicketParams>input;
        let where = {
            channel: name,
            date: input.leaveDate,
            from: input.originPlace,
            to: input.destination,
            // created_at: {
            //     '$gte': new Date(Date.now() - 10 * 60 * 1000)
            // }
        }
        let result = await this.model.findOne({ where: where, order: [["created_at", "desc"]] });
        return result;
    }
}

export let trafficStorage = new TicketStorage(DB.models['CacheTicket']);

export class TrafficRealTimeData {
    async getData(input: ISearchTicketParams, name: string) {
        if (typeof input == 'string') {
            input = JSON.parse(input);
        }
        let ret;
        try {
            console.log("TrafficRealTimeData, go to the dtask_mgr     ", name, input);
            ret = await API["dtask_mgr"].runTask({ name, input });
        } catch (err) {
            logger.error(`DataStore ${name}, params: ${JSON.stringify(input)} Error:`, err);
            return [];
        }

        if (ret) {
            await trafficStorage.setData(input, name, ret);
        }
        return ret;
    }
}

export let trafficRealTimeData = new TrafficRealTimeData();










/* 暂时保留，兼容之前的方法 */
export class TrafficSupport extends AbstractDataSupport<ITicket> {

    constructor(storage) {
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
        let { originPlace, destination, leaveDate } = params;
        let originPlaceObj = await API['place'].getCityInfo({ cityCode: originPlace });
        let destinationObj = await API['place'].getCityInfo({ cityCode: destination });

        let result: ITicket[] = [];

        if (!originPlaceObj.isAbroad && !destinationObj.isAbroad) {
            result = await this.getData(TASK_NAME.TRAIN, params, RequestTypes.traffic);
        }
        //欧铁先注释掉了
        //this.getData(TASK_NAME.TRAIN_EUR, params);
        return result;
    }

    private async search_flight_tickets(params: ISearchTicketParams) {
        let { originPlace, destination, leaveDate } = params;
        let originPlaceObj = await API['place'].getCityInfo({ cityCode: originPlace });
        let destinationObj = await API['place'].getCityInfo({ cityCode: destination });

        let result: ITicket[] = [];

        if (!originPlaceObj.isAbroad && !destinationObj.isAbroad) {
            // if (params.isCacheData) {
            //     result = await this.getData(TASK_NAME.FAST_FLIGHT, params, RequestTypes.traffic);
            // } else {
            result = await this.getData(TASK_NAME.FLIGHT, params, RequestTypes.traffic);
            // }
        }
        if (originPlaceObj.isAbroad || destinationObj.isAbroad) {
            // if (params.isCacheData) {
            //     result = await this.getData(TASK_NAME.FAST_FLIGHT_ABROAD, params, RequestTypes.traffic);
            // } else {
            result = await this.getData(TASK_NAME.FLIGHT_ABROAD, params, RequestTypes.traffic);
            // }
        }
        return result;
    }
}

var trafficSupport = new TrafficSupport(new TicketStorage(DB.models['CacheTicket']));
export default trafficSupport;