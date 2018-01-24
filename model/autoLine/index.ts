/*
 * @Author: Mr.He 
 * @Date: 2018-01-23 14:11:42 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-01-23 20:07:50
 * @content 增加线路 */

import { CityService } from "model/city";
import { DB } from '@jingli/database';
import "./other";

export class AutoLine {
    model: any;
    constructor(model: any) {
        this.model = model;
    }

    async addOneLine(fromName: string, toName: string, weight?: number) {
        if (!fromName || !toName) {
            throw new Error("addOneLine 参数错误");
        }
        weight = weight || 0;

        let result = await Promise.all([CityService.getCityByName(fromName), CityService.getCityByName(toName)]);
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
                to: toCity.geonameid
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
            from: fromCity.geonameid,
            to: toCity.geonameid,
            fromName: fromCity.name,
            toName: toCity.name,
            weight,
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