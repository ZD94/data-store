/*
 * @Author: Mr.He 
 * @Date: 2018-01-24 18:31:00 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-01-28 14:36:30
 * @content what is the content of this file. */

import Common from "model/util";
import { DB } from "@jingli/database";
import config from "@jingli/config";
import getData from "api/getData";
import { DataOrder, BudgetType, STEP } from 'model/interface';
import { dtaskMgr } from "model/dnodeAPI";
import * as moment from 'moment';

export class AutoMatic {
    async getFreeNodes() {
        let result;
        try {
            result = await dtaskMgr.freeNodes();
            return Math.floor(result.freeNodes * 0.2);
        } catch (e) {
            console.error(e);
            return 0;
        }
    }

    async tasks() {
        let num = await this.getFreeNodes();
        console.log("tasks running =====> ", num);
        if (!num) {
            return setTimeout(() => {
                this.tasks();
            }, 30 * 1000);
        }

        let datas = await this.getLineDatas(num);
        let completeParams = datas.map(this.completeParams);
        let ps = completeParams.map(async (completeParam) => {
            try {
                await getData.search_data(completeParam.params);
            } catch (e) {
                console.error(e);
            }
            await DB.models["AutoLines"].update(
                {
                    number: ++completeParam.hotData.number
                }, {
                    where: {
                        id: completeParam.hotData.id
                    }
                }
            );
        });

        await Promise.all(ps);
        this.tasks();
    }

    completeParams(hotData) {
        let params = {
            type: BudgetType.TRAFFICT,
            channels: [],
            input: {
                leaveDate: moment().add(10, "days").format("YYYY-MM-DD"),
                originPlace: hotData.from,
                destination: hotData.to
            },
            step: STEP.FINAL,
            data: []
        } as DataOrder;

        return { params, hotData };
    }

    async getLineDatas(num: number) {
        return await DB.models["AutoLines"].findAll({
            where: {
                number: {
                    lt: 2
                }
            },
            order: [["number", "asc"], ["weight", "desc"]],
            limit: num
        })
    }
}

let autoMatic = new AutoMatic();

setTimeout(() => {
    console.log("自动拉取线路任务启动");
    autoMatic.tasks();
}, 5000);