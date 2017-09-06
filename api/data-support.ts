/**
 * Created by wlh on 2017/6/9.
 */

'use strict';
import API from '@jingli/dnode-api';
import Logger from '@jingli/logger';
import {IHotel, ITicket} from "@jingli/common-type";
var logger = new Logger("data-store");

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