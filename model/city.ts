/*
 * @Author: Mr.He 
 * @Date: 2018-01-08 15:41:16 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-01-08 16:54:02
 * @content 提供地点信息获取服务. */


import request = require("request-promise");
import Common from "model/util";
import config from "@jingli/config";
import LRU = require("lru-cache");
var cache = LRU(350);

export interface ICity {
    name: string;
    id: string;
    isAbroad: boolean;
    letter: string;
    timezone: string;
    parentId: string;
    longitude: number;
    latitude: number;
    countryCode: string;
    location: { lat: number, lng: number };
    alias: any[];
    jlcityid: string;       //老版id
    geonameid: string;      //新版id
    // code?: string;  //三字码
}

export class CityService {

    static async getCity(id): Promise<ICity> {
        let city = <ICity>cache.get(id)
        if (city) {
            return city;
        }

        let uri = config.placeAPI + "/city/" + id;
        let result = await Common.proxyHttp({
            uri,
            method: "get"
        });

        if (result.code != 0) {
            console.error("place服务地点不存在 : " + uri);
            return null;
        }
        city = result.data;
        city.isAbroad = !(city.countryCode == "CN");

        /* 获取别名部分 */
        let alias = await Common.proxyHttp({
            uri: uri + "/alternate",
            method: "get"
        });
        city.alias = alias.data;

        for (let item of city.alias) {
            if (item.lang == "jlcityid") {
                city.jlcityid = item.value;
            }
            if (item.lang == "geonameid") {
                city.geonameid = item.value;
            }
        }

        if (city) {
            cache.set(id, city);
        }
        return city;
    }

    /* 转换新版placeId 为老版本 */
    static async getTransferCity(id: string): Promise<string> {
        let CT_reg = /CT/ig;
        let D_reg = /^\d+$/ig;

        if (CT_reg.test(id)) {
            return id;
        } else if (D_reg.test(id)) {
            //进入处理逻辑
        } else {
            return id;
        }

        let result = cache.get(id);
        if (result) {
            return result as string;
        }

        try {
            let getRequest = await request({
                uri: config.placeAPI + "/city/" + id + "/alternate/jlcityid",
                method: "get",
                json: true
            });
            if (getRequest.code == 0) {
                cache.set(id, getRequest.data.value);
                return getRequest.data.value;
            } else {
                return id;
            }
        } catch (e) {
            return id;
        }
    }
}