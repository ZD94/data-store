/*
 * @Author: Mr.He 
 * @Date: 2018-01-27 19:03:50 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-03-06 23:14:01
 * @content what is the content of this file. */

import API from "@jingli/dnode-api";
import Logger from '@jingli/logger';
import * as moment from "moment";
import Common from "model/util"
import { EOperationStatus } from 'api/hotels';
var logger = new Logger("dtaskMgr");
import * as config from "@jingli/config";
import { WebTrackUrlLimit } from 'http/index';
import { STEP } from 'model/interface';

export class DtaskMgr {
    async runDtask(name, input) {
        // await Common.setWebTrackEndPoint({
        //     "__topic__": config.serverType,
        //     "project": "data-store",
        //     "eventName": name,
        //     "searchCondition": JSON.stringify(input),
        //     "operationStatus": EOperationStatus.BEFORE_PROCESS
        // })

        let timer = input.leaveDate || input.checkInDate;
        if (moment(timer).format("x") <= moment().format("x")) {
            return [];
        }
        let timing = Date.now();
        try {
            let data = await API["dtask_mgr"].runTask({ name, input });
            await Common.setWebTrackEndPoint({
                "__topic__": config.serverType,
                "project": "data-store",
                "eventName": name,
                "searchCondition": JSON.stringify(input),
                "expectDataType": STEP.FINAL,
                "returnDataType": STEP.FINAL,            
                "dataLength": data ? data.length : 0,
                "operationStatus": data && data.length ? EOperationStatus.SUCCESS : EOperationStatus.EMPTY,
                "duration": Date.now() - timing,
                "hit": false
            })
            return data;
        } catch (e) {
            let errorInfo = e && e.message? JSON.stringify(e.message): (e? JSON.stringify(e): '');
            e = e.substring(0, WebTrackUrlLimit - 6000);
            await Common.setWebTrackEndPoint({
                "__topic__": config.serverType,
                "project": "data-store",
                "eventName": name,
                "searchCondition": JSON.stringify(input),
                "expectDataType": STEP.FINAL,
                "returnDataType": STEP.FINAL, 
                "dataLength": 0,
                "errors": JSON.stringify(e),
                "operationStatus": EOperationStatus.FAIL,
                "duration": Date.now() - timing
            });
            logger.error(moment().format(), "API.dtask_mgr error===>", name, input, e.message || e);
            return [];
        }
    }

    async freeNodes() {
        return await API["dtask_mgr"].statNumber();
        // return {
        //     freeNodes: 10
        // }
    }
}

export let dtaskMgr = new DtaskMgr();