/*
 * @Author: Mr.He 
 * @Date: 2018-01-27 19:03:50 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-01-28 14:54:39
 * @content what is the content of this file. */

import API from "@jingli/dnode-api";
import Logger from '@jingli/logger';
import * as moment from "moment";
var logger = new Logger("dtaskMgr");

export class DtaskMgr {
    async runDtask(name, input) {
        try {
            return await API["dtask_mgr"].runTask({ name, input });
        } catch (e) {
            logger.error(moment().format(), "API.dtask_mgr error===>", name, input, e);
            return [];
        }

    }
}