/*
 * @Author: Mr.He 
 * @Date: 2017-12-24 16:49:08 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2017-12-26 11:54:29
 * @content what is the content of this file. */

import { ISearchHotelParams, ISearchTicketParams, BudgetType, DataOrder, HOTLE_CACHE_TIME, TRAFFIC_CACHE_TIME, STEP } from 'model/interface';
import { hotelStorage, hotelRealTimeData } from "../../api/hotels";
import { trafficStorage, trafficRealTimeData } from "../../api/traffic";
import md5 = require("md5");
import RealData from "./getRealData";
import cacheData from "model/cache";
import common from 'model/util';

export class FinalData extends RealData {
    promiseIds: any;
    constructor() {
        super();
        this.promiseIds = {};
    }

    async getFinalData(params: DataOrder) {
        let ps: Promise<{ data: any[], step: STEP }>[] = params.channels.map(async (name) => {
            let promiseId = this.getPromiseId(params, name);

            console.log("1a  getFinalData , promiseId : ", promiseId);
            let hasPromise = this.findThePromise(promiseId);           //可能会修改获取promise逻辑
            if (hasPromise) {
                //有promiseId，等待结束
                let data = await this.promiseIds[promiseId];
                return {
                    step: STEP.FINAL,
                    data
                }
            } else {
                //没有promiseId
                console.log("3a 没有promiseId");
                let data = await this.notFindPromiseId(params, name);
                return {
                    step: STEP.FINAL,
                    data
                }
            }
        });

        let datas = await Promise.all(ps);
        let FIN = true, result = [];
        for (let item of datas) {
            if (item.step != STEP.FINAL) {
                FIN = false;
            }
            result.push(...item.data);
        }

        if (params.type == BudgetType.HOTEL) {
            params.data = common.hotelMergeData(result);
        } else {
            params.data = common.trafficMergeData(result);
        }
        return params;
    }

    findThePromise(id: string) {
        return !!this.promiseIds[id];
    }

    getPromiseId(params: DataOrder, name: string): string {
        if (params.type == BudgetType.HOTEL) {
            let input = params.input as ISearchHotelParams;
            let str = [input.checkInDate, input.checkOutDate, input.city, name].join("|");
            return md5(str);
        } else {
            let input = params.input as ISearchTicketParams;
            let str = [input.destination, input.originPlace, input.leaveDate, name].join("|");
            return md5(str);
        }
    }

    //error cannot throw out. Can't use this.
    /* waitPromise(ID: string) {
        console.log("enter in the waitPromise : ", ID);
        //timeout 3min.
        return new Promise(async (resolve, reject) => {
            let timer = setTimeout(() => {
                reject("waitPromise time out");
            }, 1000 * 60 * 3);
            let findResult = await this.promiseIds[ID];
            clearTimeout(timer);
            resolve(findResult);
        });
    } */

    createRealTimeData(params: DataOrder, name) {
        let promiseId = this.getPromiseId(params, name);
        let _self = this;
        _self.promiseIds[promiseId] = (() => {
            return new Promise(async (resolve, reject) => {
                try {
                    let result;
                    if (params.type == BudgetType.TRAFFICT) {
                        result = await FinalData.getTrafficRealTimeData(params.input as ISearchTicketParams, name);
                    } else {
                        result = await FinalData.getHotelRealTimeData(params.input as ISearchHotelParams, name);
                    }

                    delete _self.promiseIds[promiseId];
                    resolve(result);
                } catch (e) {
                    console.error(e);
                    delete _self.promiseIds[promiseId];
                    reject("failed");
                }
            })
        })();
    }

    /* 没有找到promiseId，数据库中查找 */
    async notFindPromiseId(params: DataOrder, name: string) {
        if (params.type == BudgetType.TRAFFICT) {
            let input = params.input as ISearchTicketParams;
            let result = await cacheData.trafficCache(input, name, true);
            if (result.step != STEP.FINAL) {
                //数据已过期或者无效
                console.log("traffic 数据已过期或者无效");
                return await FinalData.getTrafficRealTimeData(input, name);
            } else {
                //ok
                console.log("traffic ok");
                return result.data;
            }
        } else {
            let input = params.input as ISearchHotelParams;
            let result = await cacheData.hotelCache(input, name, true);
            if (result.step != STEP.FINAL) {
                //数据已过期或者无效
                console.log("hotel 数据已过期或者无效");
                return await FinalData.getHotelRealTimeData(input, name);
            } else {
                //ok
                console.log("hotel ok");
                return result.data;
            }
        }
    }
}

let finalData = new FinalData();
export default finalData;