/*
 * @Author: Mr.He 
 * @Date: 2018-01-23 14:11:42 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-03-06 20:48:47
 * @content 增加线路 */

import { CityService } from "model/city";
import { DB } from '@jingli/database';
import { BudgetType } from "model/interface";
import * as uuid from "uuid";

export class AutoLine {
    model: any;
    constructor(model: any) {
        this.model = model;
    }

    async addOneLine(fromName: string, toName: string, weight?: number) {
        if (!fromName || !toName) {
            throw new Error("addOneLine 参数错误");
        }

        let result = await Promise.all([CityService.searchCity(fromName), CityService.searchCity(toName)]);
        let fromCity = result[0], toCity = result[1];
        if (!fromCity || !toCity) {
            return {
                code: 0,
                msg: "输入地点信息有误"
            }
        }

        let autoLines = await this.model.findAll({
            where: {
                from: fromCity.geonameid,
                to: toCity.geonameid,
                type: BudgetType.TRAFFICT
            }
        });
        if (autoLines.length) {
            return {
                code: 1,
                msg: "线路已经存在",
                data: autoLines
            }
        }
        let autoLine = await this.model.create({
            id: uuid.v1(),
            type: BudgetType.TRAFFICT,
            from: fromCity.geonameid || fromCity.id,
            to: toCity.geonameid || toCity.id,
            fromName: fromCity.name,
            toName: toCity.name,
            number: 0
        });

        return {
            code: 0,
            msg: "线路增加成功",
            data: [autoLine]
        }
    }

    async addHotel(placeName: string, weight?: number) {
        let city;
        try {
            city = await CityService.searchCity(placeName);
        } catch (e) {
            console.log(e.message || e);
            return {
                code: 0,
                msg: "输入地点信息有误"
            }
        }

        let autoLines = await this.model.findAll({
            where: {
                to: city.geonameid,
                type: BudgetType.HOTEL
            }
        });
        if (autoLines.length) {
            return {
                code: 1,
                msg: "线路已经存在",
                data: autoLines
            }
        }

        let autoLine = await this.model.create({
            id: uuid.v1(),
            type: BudgetType.HOTEL,
            to: city.geonameid || city.id,
            toName: city.name,
            number: 0
        });

        return {
            code: 0,
            msg: "线路增加成功",
            data: [autoLine]
        }
    }
}

let autoLine = new AutoLine(DB.models["AutoLines"]);
export default autoLine;