/**
 * Created by wlh on 2017/6/9.
 */

import API from '@jingli/dnode-api';
import { SearchParams, TASK_NAME } from '../types';
import { SelectDataHelp } from "../data-support";
import { ITicket } from "@jingli/common-type";
import config from "@jingli/config";
import { DB } from '@jingli/database';
import { RequestTypes } from "../data-support";
import { ISearchTicketParams } from "model/interface";
import { setInterval, clearInterval } from 'timers';
import Logger from '@jingli/logger';
import * as moment from "moment";

let logger = new Logger("data-store");


export class TicketStorage extends SelectDataHelp {
    constructor(private model) {
        super();
    }

    async setData(input: ISearchTicketParams, name: string, result) {
        if (typeof input == 'string') {
            input = JSON.parse(input);
        }
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
        let where = {
            channel: name,
            date: input.leaveDate,
            from: {
                in: await this.getSelectCitis(input.originPlace)
            },
            to: {
                in: await this.getSelectCitis(input.destination)
            },
            data: {
                ne: '[]'
            }
        }
        let result = await this.model.findOne({ where: where, order: [["created_at", "desc"]] });
        if (result) {
            return result;
        }

        /* 按照日期没有找到缓存数据，扩大搜索范围 */
        delete where.date;
        let resultLarger = await this.model.findOne({ where: where, order: [["created_at", "desc"]] });
        if (!resultLarger) {
            return null;
        }
        for (let item of resultLarger.data) {
            let targetDepartDate = moment(input.leaveDate);
            let dataDepartTime = moment(item.departDateTime);
            let days = targetDepartDate.diff(dataDepartTime, "days");
            item.departDateTime = dataDepartTime.add(days, "days").format();

            let targetArriveDate = moment(input.leaveDate);
            let dataArriveTime = moment(item.departDateTime);
            let days2 = targetArriveDate.diff(dataArriveTime, "days");
            item.arrivalDateTime = dataArriveTime.add(days2, "days").format();
        }

        return resultLarger;
    }
}

export let trafficStorage = new TicketStorage(DB.models['CacheTicket']);

export class TrafficRealTimeData {
    async getData(input: ISearchTicketParams, name: string) {
        if (typeof input == 'string') {
            input = JSON.parse(input);
        }
        let ret;
        ret = await API["dtask_mgr"].runTask({ name, input });
        // console.log("****************", name, input);
        if (ret && ret.length) {
            await trafficStorage.setData(input, name, ret);
        }
        return ret;
    }
}

export let trafficRealTimeData = new TrafficRealTimeData();


/* setTimeout(async () => {
    let name = "ctrip-train-domestic";
    let input = {
        leaveDate: '2018-01-27T10:00:00.000Z',
        originPlace: '1816670',
        destination: '1815285',
        earliestGoBackDateTime: '2018-01-28T01:00:00.000Z',
        latestArrivalDateTime: '2018-01-27T10:00:00.000Z'
    };
    let num = 0;
    let timer = setInterval(() => {
        console.log("ok + ", num++);
    }, 1000);

    // let result = await API["dtask_mgr"].runTask({ name, input });

    let result = await trafficStorage.getData(input, name);
    console.log("result ====> ", JSON.stringify(result.data[0]));
    clearInterval(timer);
}, 4000); */