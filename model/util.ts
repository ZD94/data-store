/*
 * @Author: Mr.He 
 * @Date: 2017-12-23 12:23:38 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2017-12-26 16:13:34
 * @content 公共方法 */

import { BudgetType, DataOrder, ISearchHotelParams, ISearchTicketParams } from "model/interface";
import { TASK_NAME } from '../api/types';
let _ = require("lodash");
import API from "@jingli/dnode-api";


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
                return matchChannel(channels, [...TASK_NAME.FLIGHT, ...TASK_NAME.TRAIN], [...TASK_NAME.FLIGHT_DEFAULT, ...TASK_NAME.TRAIN]);
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
        return result;
        // console.log("trafficMergeData : ", result.length);
        // let compareFactor = 'No';
        // let mergedResults = [];
        // let excludeds: Array<number> = [];
        // for (let i = 0; i < result.length && excludeds.indexOf(i) < 0; i++) {
        //     let obj = result[i];
        //     for (let j = i + 1; j < result.length; j++) {
        //         if (excludeds.indexOf(j) < 0) {
        //             if (obj[compareFactor].trim() == result[j][compareFactor].trim()) {
        //                 excludeds.push(j);
        //                 obj['agents'] = _.concat(obj["agents"], result[j]["agents"]);
        //             }
        //         }
        //     }
        //     mergedResults.push(obj);
        // }
        // if (!mergedResults || typeof mergedResults == undefined) {
        //     mergedResults = result;
        // }

        // console.log("mergedResults  : ", JSON.stringify(mergedResults));
        // return mergedResults;
    }

    async checkParams(params: DataOrder) {
        if (params.type == BudgetType.HOTEL) {
            let input = params.input as ISearchHotelParams;
            let city = await API['place'].getCityInfo({ cityCode: input.city });
            if (!input.latitude || !input.longitude) {
                input.latitude = city.latitude;
                input.longitude = city.longitude;
            }

            params.isAbroad = city.isAbroad;
        }

        if (params.type == BudgetType.TRAFFICT) {
            let input = params.input as ISearchTicketParams;
            let originPlace = API['place'].getCityInfo({ cityCode: input.originPlace });
            let destination = API['place'].getCityInfo({ cityCode: input.destination });
            let ps = await Promise.all([await originPlace, await destination]);
            let isAbroad = false;
            for (let city of ps) {
                if (city.isAbroad) {
                    isAbroad = true;
                    break;
                }
            }

            params.isAbroad = isAbroad;
        }

        params.channels = common.switchChannel(params.type, params.channels, params.isAbroad);

        return params;
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