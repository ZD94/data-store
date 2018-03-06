/*
 * @Author: Mr.He 
 * @Date: 2018-01-24 18:31:00 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-03-06 23:13:44
 * @content what is the content of this file. */

import Common from "model/util";
import { DB } from "@jingli/database";
import config from "@jingli/config";
import getData from "api/getData";
import { DataOrder, BudgetType, STEP } from 'model/interface';
import { dtaskMgr } from "model/dnodeAPI";
import * as moment from 'moment';
import { initLines } from "./init";
import * as cluster from "cluster";

export class AutoMatic {
    constructor() {

        let self = this;
        // console.log(111222, cluster.isMaster);
        // if (!cluster.isMaster) {
        //     return;
        // }
        if (config.lineTest.isNeedInit && config.lineTest.open) {
            initLines().then((result) => {
                console.log("ok ok ok ok", result);
                self.tasks();
            });
        }

        setTimeout(async () => {
            if (!config.lineTest.isNeedInit && config.lineTest.open) {
                self.tasks();
            }
        }, 5000);
    }

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
            let result;
            try {
                result = await getData.search_data(completeParam.params);
                if (result.step != STEP.FINAL) {
                    return;
                }
            } catch (e) {
                console.error(e);
                return;
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
        console.log("over once");
        this.tasks();
    }

    completeParams(hotData) {
        let params;
        if (hotData.type == BudgetType.HOTEL) {
            params = {
                type: BudgetType.HOTEL,
                channels: [],
                input: {
                    checkInDate: moment().add(10, "days").format("YYYY-MM-DD"),
                    checkOutDate: moment().add(12, "days").format("YYYY-MM-DD"),
                    city: hotData.to,
                },
                step: STEP.FINAL,
                data: []
            } as DataOrder;
        } else {
            params = {
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
        }

        return { params, hotData };
    }

    async getLineDatas(num: number) {
        return await DB.models["AutoLines"].findAll({
            order: [["updated_at", "asc"]],
            limit: num
        })
    }
}

let autoMatic = new AutoMatic();