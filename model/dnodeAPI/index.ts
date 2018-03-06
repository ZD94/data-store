/*
 * @Author: Mr.He 
 * @Date: 2018-01-27 19:03:50 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-01-28 14:54:39
 * @content what is the content of this file. */

import API from "@jingli/dnode-api";
import Logger from '@jingli/logger';
import * as moment from "moment";
import Common from "model/util"
import { EOperationStatus } from 'api/hotels';
var logger = new Logger("dtaskMgr");
import * as config from "@jingli/config";

export class DtaskMgr {
    async runDtask(name, input) {
        await Common.setWebTrackEndPoint({
            "__topic__": config.serverType,
            "project": "data-store",
            "eventName": name,
            "searchCondition": JSON.stringify(input),
            "operationStatus": EOperationStatus.BEFORE_PROCESS
        })
        let timer = input.leaveDate || input.checkInDate;
        if (moment(timer).format("x") <= moment().format("x")) {
            return [];
        }

        try {
            let data =  await API["dtask_mgr"].runTask({ name, input });
            await Common.setWebTrackEndPoint({
                "__topic__": config.serverType,
                "project": "data-store",
                "eventName": name,
                "searchCondition": JSON.stringify(input),
                "dataLength": data ? data.length: 0,
                "operationStatus": data && data.length? EOperationStatus.SUCCESS: EOperationStatus.FAIL
            })
            return data;
        } catch (e) {
            await Common.setWebTrackEndPoint({
                "__topic__": config.serverType,
                "project": "data-store",
                "eventName": name,
                "searchCondition": JSON.stringify(input),
                "dataLength": 0,
                "errors": JSON.stringify(e),
                "operationStatus": EOperationStatus.FAIL
            })
            logger.error(moment().format(), "API.dtask_mgr error===>", name, input, e);
            return [];
        }
    }

    async freeNodes() {
        return await API["dtask_mgr"].statNumber();
    }
}

export let dtaskMgr = new DtaskMgr();