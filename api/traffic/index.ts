/**
 * Created by wlh on 2017/6/9.
 */

'use strict';
import API from '@jingli/dnode-api';
import {TASK_NAME} from '../types';
import {AbstractDataSupport, DataStorage} from "../data-support";
import {ITicket} from "@jingli/common-type";
import config = require("@jingli/config");
import Bluebird = require("bluebird");
import {DB} from '@jingli/database';
var redis = require("redis");
redis = Bluebird.promisifyAll(redis);
let redis_client = null;

let Train_IS_USE_CACHE = true;
let Flight_IS_USE_CACHE = true;
let Cache_Duration = 10*60;

function get_redis(){
    if(!redis_client){
        redis_client = redis.createClient(config.redis);
        redis_client.on('error', function(err){
        });
    }
    return redis_client;
}

export interface ISearchTicketParams {
    leaveDate: string;
    originPlace: string;
    destination: string;
}

export class TicketStorage implements DataStorage<ITicket> {
    async setData(name: string, input: any, result) {
        if (typeof input == 'string') {
            input = JSON.parse(input);
        }
        await DB.models['CacheTicket'].create({
            channel: name,
            from: input.originPlace,
            to: input.destination,
            date: input.leaveDate,
            data: result,
            originData: null
        })
        console.log("name:", name, "input:", input, "result:", result);
        return true;
    }

    async getData(name: string, input: any) {
        // console.log(name, input)
        return []
    }
}

export class TrafficSupport extends AbstractDataSupport<ITicket> {

    constructor(storage: TicketStorage) {
        super(storage);
    }

    async search_tickets(params: ISearchTicketParams) {
        let self = this;
        let flightTickets = await self.search_flight_tickets(params);
        if (!flightTickets) {
            flightTickets = [];
        }
        let trainTickets = await self.search_train_tickets(params);
        if (!trainTickets) {
            trainTickets = [];
        }
        return [...trainTickets, ...flightTickets];
    }

    private async search_train_tickets(params) {
        let {originPlace, destination, leaveDate} = params;
        let originPlaceObj = await API['place'].getCityInfo({cityCode: originPlace});
        let destinationObj = await API['place'].getCityInfo({cityCode: destination});

        let result:  ITicket[] =[];
        let client = get_redis();
        // console.log("client in traffic: ", client);
        // let key = `train:${originPlace}-${destination}:${leaveDate}`;
        // if(Train_IS_USE_CACHE){
        //     try{
        //         result = JSON.parse(await client.getAsync(key));
        //
        //     } catch(err){}
        //     if(result && result.length) {
        //         return result;
        //     }
        // }


        if (!originPlaceObj.isAbroad && !destinationObj.isAbroad) {
            result = await this.getData(TASK_NAME.TRAIN, params);
        }
        // if(result && result.length) {
        //     if(Train_IS_USE_CACHE){
        //         await client.setAsync(key, JSON.stringify(result), 'ex', Cache_Duration);
        //     }
        // }
        //欧铁先注释掉了
        //this.getData(TASK_NAME.TRAIN_EUR, params);
        return result;
    }

    private async search_flight_tickets(params) {
        let {originPlace, destination,leaveDate} = params;
        let originPlaceObj = await API['place'].getCityInfo({cityCode: originPlace});
        let destinationObj = await API['place'].getCityInfo({cityCode: destination});

        let result:  ITicket[] =[];
        let client = get_redis();
        // let key = `flight:${originPlace}:${destination}:${leaveDate}`;
        // if(Flight_IS_USE_CACHE){
        //     try{
        //         result = JSON.parse(await client.getAsync(key))
        //     } catch (err) {
        //         console.error(err.stack ? err.stack : err);
        //     }
        //     if(result && result.length) {
        //         return result;
        //     }
        // }

        if (!originPlaceObj.isAbroad && !destinationObj.isAbroad) {
            result = await this.getData(TASK_NAME.FLIGHT, params);
        }
        if(originPlaceObj.isAbroad || destinationObj.isAbroad){
            result = await this.getData(TASK_NAME.FLIGHT_ABROAD, params);
        }

        // if(result && result.length) {
        //     if(Train_IS_USE_CACHE){
        //         await client.setAsync(key, JSON.stringify(result), 'ex', Cache_Duration);
        //     }
        // }
        return result;
    }
}

var trafficSupport = new TrafficSupport(new TicketStorage());
export default trafficSupport;