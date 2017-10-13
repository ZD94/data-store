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

export interface DataStorage<T extends (ITicket|IHotel)> {
    setData: (name: string, input: any, data: Data<T>) => Promise<boolean>;
    getData: (name: string, input: any) => Promise<Data<T>>;
}

export abstract class AbstractDataSupport<T extends (ITicket|IHotel)> {
    constructor(protected storage: DataStorage<T> ) {
        this.storage = storage;
    }

    async getData(name: string| string[], params: Object) :Promise<T[]>{
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
        mergeTicketsOrHotelsWithSameNo(allRet);
        allRet.forEach( (ret) => {
            result = [...result, ...ret] as Data<T>;
        })

        // for(let name of names) {
        //     try {
        //         result = await this.storage.getData(name, params);
        //         if (!result) {
        //             result = await API['dtask_mgr'].runTask({name: name, input: params}) as T[];
        //             await this.storage.setData(name, params, result);
        //         }
        //     } catch(err) {
        //         logger.error(`${name},${params}`, err);
        //     }
        //     if (result && result.length) {
        //         break;
        //     }
        // }
        // if (!result) {
        //     result = [];
        // }
        return result;
    }
}


function mergeTicketsOrHotelsWithSameNo(result: ITicket[]|IHotel[]){
    if(result && !result.length){
        return result;
    }
    let compareFactor = 'No';
    if(result && result[0]["name"]) return result;   //酒店的数据暂时不执行合并
    //注释酒店的数据合并代码，当需要合并酒店数据时，返回
    // if(result[0] && result[0]["No"]) {
    //     compareFactor = 'No';
    // }
    // if(result[0] && result[0]["name"]){
    //     compareFactor = 'name';
    // }
    let mergedResults: ITicket[] = [];

    let excludeds: Array<number> = [];
    for(let i = 0; i < result.length && excludeds.indexOf(i) < 0; i++){
        let obj = result[i];
        for(let j = i+1; j < result.length && excludeds.indexOf(j) < 0;j++){
            if(obj[compareFactor].trim() == result[j][compareFactor].trim()) {
                excludeds.push(j);
                obj['agents'] = _.concat(obj["agents"], result[j]["agents"]);
            }
        }
        if(excludeds.indexOf(i) < 0) {
            mergedResults.push(obj);
        }
    }
    if(!mergedResults || typeof mergedResults == undefined) {
        mergedResults = result;
    }
    return mergedResults;
}
