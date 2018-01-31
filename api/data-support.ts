/**
 * Created by wlh on 2017/6/9.
 */

'use strict';
import API from '@jingli/dnode-api';
import { IHotel, ITicket } from "@jingli/common-type";
import { ICity, CityService } from 'model/city';
var _ = require("lodash");

export interface Data<T extends (ITicket | IHotel)> extends Array<T> {
    [idx: number]: T;
}

export interface DataStorage<T extends (ITicket | IHotel)> {
    setData: (name: string, input: any, data: Data<T>) => Promise<boolean>;
    getData: (name: string, input: any) => Promise<Data<T>>;
}

export class SelectDataHelp {
    async getCity(cityId: string | ICity): Promise<ICity> {
        let city: ICity;
        if (typeof cityId == "string") {
            city = await CityService.getCity(cityId);
        } else {
            city = cityId;
        }
        return city;
    }

    async getSelectCitis(cityId: string | ICity): Promise<string[]> {
        let cities = [];
        let city = await this.getCity(cityId);
        for (let item of city.alias) {
            if (item.lang == "jlcityid") {
                cities.push(item.value);
            }
            if (item.lang == "geonameid") {
                cities.push(item.value);
            }
        }

        /* place 服务问题，预防预算出错 */
        if (cityId == '2038349') {
            cities.push("CT_131");
        }
        return cities;
    }
}

function mergeSameTickets(result: any): any {
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
            mergedResults.push(obj);
        }

    }
    if (!mergedResults || typeof mergedResults == undefined) {
        mergedResults = result;
    }
    return mergedResults;
}