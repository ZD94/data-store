/*
 * @Author: Mr.He 
 * @Date: 2018-01-27 19:03:50 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-03-15 18:58:22
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
        let timer = input.leaveDate || input.checkInDate;
        if (moment(timer).format("x") <= moment().format("x")) {
            console.log("数据拉取时间小于当前时间: ", moment(timer).format());
            return [];
        }
        let timing = Date.now();
        try {
            let data = await API["dtask_mgr"].runTask({ name, input });
            if (!data.length) {
                console.error("dnodeAPI 数据没有拉取到: ", name, input);
            }
            Common.setWebTrackEndPoint({
                "__topic__": config.serverType,
                "project": "data-store",
                "eventName": name,
                "searchCondition": JSON.stringify(input),
                "expectDataType": STEP.FINAL,
                "returnDataType": STEP.FINAL,
                "dataLength": data ? data.length : 0,
                "operationStatus": data && data.length ? EOperationStatus.CRAWL_SUCCESS : EOperationStatus.EMPTY,
                "duration": Date.now() - timing,
                "hit": false
            })
            return data;
        } catch (e) {
            let errorInfo = e && e.message ? JSON.stringify(e.message) : (e ? JSON.stringify(e) : '');
            e = e.substring(0, WebTrackUrlLimit - 6000);
            Common.setWebTrackEndPoint({
                "__topic__": config.serverType,
                "project": "data-store",
                "eventName": name,
                "searchCondition": JSON.stringify(input),
                "expectDataType": STEP.FINAL,
                "returnDataType": STEP.FINAL,
                "dataLength": 0,
                "errors": JSON.stringify(e),
                "operationStatus": EOperationStatus.CRAWL_FAIL,
                "duration": Date.now() - timing,
                "hit": false
            });
            logger.error(moment().format(), "API.dtask_mgr error===>", name, input, e.message || e);
            return [];
        }
    }

    async freeNodes() {
        return await API["dtask_mgr"].statNumber();
    }
}

export let dtaskMgr = new DtaskMgr();