/*
 * @Author: Mr.He 
 * @Date: 2017-12-09 21:21:19 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2017-12-15 11:07:02
 * @content what is the content of this file. */

import cache from "@jingli/cache";
import { hotelStorage, hotelRealTimeData, ISearchHotelParams } from "../../api/hotels";
import { trafficStorage, trafficRealTimeData, ISearchTicketParams } from "../../api/traffic";
import * as moment from "moment";
import uuid from "uuid";
import { TASK_NAME } from '../../api/types';
import API from "@jingli/dnode-api";
let request = require("request-promise");
let _ = require("lodash");

export enum BudgetType {
    TRAFFICT = 1,
    HOTEL = 2
}

export interface Param {
    type: BudgetType;
    channels: string[];
    input: ISearchHotelParams | ISearchTicketParams;
    callbackUrl: string;
    orderId: string;
    id: string;
}

export enum STEP {
    ONE = "FULL",
    TWO = "CACHE",
    FINAL = "FIN"
}

export interface Channel {
    name: string,  //频道名称
    step: STEP,
    data: any
}

export interface DataOrder {
    id: string;
    orderId: string;
    channels: Channel[],
    param: Param,
    step: STEP,
    data: any[]
}


const HOTLE_CACHE_TIME = 2 * 60;
const TRAFFIC_CACHE_TIME = 20;

export class DataEvent {

    async addEvent(param: Param) {
        let dataOrder: DataOrder = {
            id: param.id,
            orderId: param.orderId,
            channels: [],    //记录 经过匹配后有哪几个频道可用
            param,
            step: STEP.TWO,
            data: []
        } as DataOrder;

        let channelResult = await this.switchChannel(param);
        for (let channel of channelResult) {
            dataOrder.channels.push({
                name: channel,
                step: STEP.TWO,
                data: []
            });
        }
        //存储数据订单
        await cache.write(dataOrder.id, dataOrder);
        console.log("addEvent channelResult ====>");
        for (let name of channelResult) {
            if (param.type == BudgetType.HOTEL) {
                this.beginHotelCache(dataOrder.id, param.input as ISearchHotelParams, name);
            } else {
                this.beginTrafficCache(dataOrder.id, param.input as ISearchTicketParams, name);
            }
        }
    }

    async dealEvent(id: string, data: any, step: STEP, name: string) {
        let cacheResult = await cache.read(id) as DataOrder;
        if (!cacheResult) {
            console.error("dealEvent not found the cache id.");
            return;
        }
        console.log("dealEvent====>", step, name);
        if (!cacheResult.param.callbackUrl) {
            console.warn("the params not has the callback url. Don't need deal more.===>", cacheResult.param);
            return;
        }

        let theChannelData: Channel;
        for (let channel of cacheResult.channels) {
            if (channel.name == name) {
                theChannelData = channel;
            }
        }

        //update the channel data.
        theChannelData.step = step;
        theChannelData.data = data;

        //combine all channel data.
        let result = [];
        for (let channel of cacheResult.channels) {
            result.push(...channel.data);
        }
        cacheResult.data = result;


        console.log("result =================> ", result.length);
        //update dataOrder's data.
        await cache.write(id, cacheResult);
        await this.sendData(cacheResult);
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

    //发送数据
    async sendData(orderData: DataOrder) {
        let fin = true;
        for (let channel of orderData.channels) {
            if (channel.step != STEP.FINAL) {
                fin = false;
                break;
            }
        }

        if (fin) {
            orderData.step = STEP.FINAL;
            //delete the redis orderData.
            await cache.remove(orderData.id);
        }

        if (orderData.param.type == BudgetType.HOTEL) {
            orderData.data = this.hotelMergeData(orderData.data);
        } else {
            orderData.data = this.trafficMergeData(orderData.data);
        }

        try {
            await request({
                uri: orderData.param.callbackUrl,
                method: "post",
                body: orderData,
                json: true
            });
        } catch (e) {
            console.error(e);
        }
    }

    async switchChannel(param: Param): Promise<string[]> {
        let result = [];
        //现阶段给出一个默认值
        // console.log("switchChannel===>", param)
        if (param.type == BudgetType.HOTEL) {
            let input = param.input as ISearchHotelParams;
            let { city, latitude, longitude } = input;
            // console.log("hotel ===>", input);
            let cityObj = await API['place'].getCityInfo({ cityCode: city });
            if (!latitude || !longitude) {
                input.latitude = cityObj.latitude;
                input.longitude = cityObj.longitude;
            }

            if (cityObj.isAbroad) {
                return matchChannel(param.channels, TASK_NAME.HOTEL_ABROAD, TASK_NAME.HOTEL_ABROAD_DEFAULT);
            } else {
                return matchChannel(param.channels, TASK_NAME.HOTEL, TASK_NAME.HOTEL_DEFAULT);
            }
        } else {
            let input = param.input as ISearchTicketParams;
            let { originPlace, destination } = input;
            let originPlaceObj = await API['place'].getCityInfo({ cityCode: originPlace });
            let destinationObj = await API['place'].getCityInfo({ cityCode: destination });

            if (originPlaceObj.isAbroad || destinationObj.isAbroad) {
                return matchChannel(param.channels, TASK_NAME.FLIGHT_ABROAD, TASK_NAME.FLIGHT_ABROAD_DEFAULT);
            } else {
                return matchChannel(param.channels, TASK_NAME.FLIGHT, TASK_NAME.FLIGHT_DEFAULT);
            }
        }
    }

    async beginHotelCache(id: string, input: ISearchHotelParams, name: string) {

        let cacheData = await hotelStorage.getData(input, name);
        if (!cacheData) {
            this.getHotelRealTimeData(id, input, name);
            return;
        }

        let created = moment(cacheData.created_at);
        let diffTime = moment().diff(created, 'minutes');
        if (diffTime <= HOTLE_CACHE_TIME) {
            //this is finally data.
            await this.dealEvent(id, cacheData.data, STEP.FINAL, name);
        } else {
            await this.dealEvent(id, cacheData.data, STEP.TWO, name);
            //go to realtime data.
            this.getHotelRealTimeData(id, input, name);
        }
    }

    async getHotelRealTimeData(id: string, input: ISearchHotelParams, name: string, num?: number) {
        let result;
        num = num ? num : 0;

        if (num && num >= 3) {
            //已经拉取了三次，不再拉取数据
            console.error("getHotelRealTimeData 3 times");
            return null;
        }

        try {
            result = await hotelRealTimeData.getData(input, name);
            await this.dealEvent(id, result, STEP.FINAL, name);
        } catch (e) {
            console.error(e);
            num++;
            await this.getHotelRealTimeData(id, input, name, num);
        }
    }

    async beginTrafficCache(id: string, input: ISearchTicketParams, name: string) {

        let cacheData = await trafficStorage.getData(input, name);
        if (!cacheData) {
            this.getTrafficRealTimeData(id, input, name);
            return;
        }


        let created = moment(cacheData.created_at);
        let diffTime = moment().diff(created, 'minutes');

        // console.log(567, cacheData.created_at, diffTime);
        if (diffTime <= TRAFFIC_CACHE_TIME) {
            //this is finally data.
            await this.dealEvent(id, cacheData.data, STEP.FINAL, name);
        } else {
            await this.dealEvent(id, cacheData.data, STEP.TWO, name);
            //go to realtime data.
            this.getTrafficRealTimeData(id, input, name);
        }
    }

    async getTrafficRealTimeData(id: string, input: ISearchTicketParams, name: string, num?: number) {
        let result;
        num = num ? num : 0;

        if (num && num >= 3) {
            //已经拉取了三次，不再拉取数据
            console.error("getTrafficRealTimeData 3 times");
            return null;
        }

        try {
            result = await trafficRealTimeData.getData(input, name);
            await this.dealEvent(id, result, STEP.FINAL, name);
        } catch (e) {
            console.error(e);
            num++;
            await this.getTrafficRealTimeData(id, input, name, num);
        }
    }
}


export default new DataEvent();



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