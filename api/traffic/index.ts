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
import { ISearchTicketParams } from "model/interface";
import Logger from '@jingli/logger';
let logger = new Logger("data-store");


export class TicketStorage {
    constructor(private model) {
    }

    async setData(input: ISearchTicketParams, name: string, result) {
        if (typeof input == 'string') {
            input = JSON.parse(input);
        }
        input = <ISearchTicketParams>input;
        if (!result.length) {
            return;
        }

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
            data: {
                ne: '[]'
            }
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