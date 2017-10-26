/**
 * Created by wlh on 2017/6/9.
 */

'use strict';
import API from '@jingli/dnode-api';
import Logger from '@jingli/logger';
import {IHotel, ITicket} from "@jingli/common-type";
var logger = new Logger("data-store");
var _ = require("lodash");

export interface Data<T extends (ITicket|IHotel)> extends Array<T>{
    [idx: number]: T;
}

export var RequestTypes = {
    traffic: 'traffic',
    hotel: 'hotel'
}

export interface DataStorage<T extends (ITicket|IHotel)> {
    setData: (name: string, input: any, data: Data<T>) => Promise<boolean>;
    getData: (name: string, input: any) => Promise<Data<T>>;
}

export abstract class AbstractDataSupport<T extends (ITicket|IHotel)> {
    constructor(protected storage: DataStorage<T> ) {
        this.storage = storage;
    }

    async getData(name: string| string[], params: Object, type: string ) :Promise<T[]>{
        let names: string[] = []
        if (typeof name == 'string') {
            names.push(name);
        } else {
            names = name;
        }
        let result: Data<T> = [];

        let ps = names.map( async (name) => {
            let ret = await this.storage.getData(name, params);
            if (!ret || !ret.length) {
                try {
                    ret = await API['dtask_mgr'].runTask({name: name, input: params}) as Data<T>;
                } catch(err) {
                    logger.error(`DataStore ${name}, params: ${JSON.stringify(params)} Error:`, err);
                }
                if (ret) {
                    await this.storage.setData(name, params, ret);
                }
            }
            return ret;
        });
        let allRet: Data<T>[] = await Promise.all(ps);


        allRet.forEach( (ret) => {
            result = [...result, ...ret] as Data<T>;
        });

        if(allRet && allRet.length >= 2 && type == RequestTypes.traffic ) {
            result = mergeSameTickets(result);
        }

        return result;
    }
}

function mergeSameTickets(result: any): any{
    if(!result || !result.length){
        return result;
    }
    let compareFactor = 'No';
    let mergedResults = [];
    let excludeds: Array<number> = [];
    for(let i = 0; i < result.length; i++){
        if(excludeds.indexOf(i) < 0) {
            let obj = result[i];
            for(let j = i+1; j < result.length ;j++){
                if(excludeds.indexOf(j) < 0) {
                    if(obj[compareFactor].trim() == result[j][compareFactor].trim()) {
                        excludeds.push(j);
                        obj['agents'] = _.concat(obj["agents"], result[j]["agents"]);
                    }
                }
            }
            mergedResults.push(obj);
        }

    }
    if(!mergedResults || typeof mergedResults == undefined) {
        mergedResults = result;
    }
    return mergedResults;
}



