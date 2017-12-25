/*
 * @Author: Mr.He 
 * @Date: 2017-12-23 12:23:38 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2017-12-24 12:36:27
 * @content 公共方法 */

import { BudgetType, ISearchHotelParams, ISearchTicketParams } from "model/interface";
import { TASK_NAME } from '../api/types';
let _ = require("lodash");

export class Common {

    /* 筛选数据源 */
    switchChannel(type: BudgetType, channels: string[], isAbroad: Boolean): string[] {
        //现阶段给出一个默认值

        if (type == BudgetType.HOTEL) {
            if (isAbroad) {
                return matchChannel(channels, TASK_NAME.HOTEL_ABROAD, TASK_NAME.HOTEL_ABROAD_DEFAULT);
            } else {
                return matchChannel(channels, TASK_NAME.HOTEL, TASK_NAME.HOTEL_DEFAULT);
            }
        } else {
            if (isAbroad) {
                return matchChannel(channels, TASK_NAME.FLIGHT_ABROAD, TASK_NAME.FLIGHT_ABROAD_DEFAULT);
            } else {
                return matchChannel(channels, TASK_NAME.FLIGHT, TASK_NAME.FLIGHT_DEFAULT);
            }
        }
    }


    hotelMergeData(arr) {
        return arr;
    }

    trafficMergeData(result) {
        if (!result || !result.length) {
            return result;
        }
        let compareFactor = 'No';
        let mergedResults = [];
        let excludeds: Array<number> = [];
        for (let i = 0; i < result.length && excludeds.indexOf(i) < 0; i++) {
            let obj = result[i];
            for (let j = i + 1; j < result.length; j++) {
                if (excludeds.indexOf(j) < 0) {
                    if (obj[compareFactor].trim() == result[j][compareFactor].trim()) {
                        excludeds.push(j);
                        obj['agents'] = _.concat(obj["agents"], result[j]["agents"]);
                    }
                }
            }
            mergedResults.push(obj);
        }
        if (!mergedResults || typeof mergedResults == undefined) {
            mergedResults = result;
        }
        return mergedResults;
    }
}

let common = new Common();
export default common;

function matchChannel(target, origin, defaultArr) {
    let result = [];
    for (let name of target) {
        if (origin.indexOf(name) > -1) {
            result.push(name);
        }
    }

    if (!result.length) {
        //没有可用匹配，给默认值
        return defaultArr;
    } else {
        return result;
    }
}