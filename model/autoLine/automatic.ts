/*
 * @Author: Mr.He 
 * @Date: 2018-01-24 18:31:00 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-01-28 14:23:39
 * @content what is the content of this file. */

import Common from "model/util";
import { DB } from "@jingli/database";
import config from "@jingli/config";
import getData from "api/getData";
import { DataOrder, BudgetType, STEP } from 'model/interface';
import * as moment from 'moment';

export class AutoMatic {
    async getFreeNodes() {
        try {
            let result = await Common.proxyHttp({
                uri: config.dtaskMgr + "/freeNodes",
                qs: {
                    key: "Jingli2016"
                }
            });
            return Math.floor(result.freeNodes * 0.3);
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
            let realTimeData = await getData.search_data(completeParam.params);
            console.log("realTimeData====>", realTimeData.data.length);
            if (realTimeData.data.length) {
                await DB.models["AutoLines"].update(
                    {
                        number: ++completeParam.hotData.number
                    }, {
                        where: {
                            id: completeParam.hotData.id
                        }
                    }
                );
            }
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
                    lt: 1
                }
            },
            order: [["number", "asc"], ["weight", "desc"]],
            limit: num
        })
    }
}

let autoMatic = new AutoMatic();

setTimeout(async () => {
    await autoMatic.tasks();
}, 5000);



// let params = {
//     type: BudgetType.TRAFFICT,
//     channels: ["ctrip-hotel-domestic"],
//     input: {
//         leaveDate: "2018-1-22",
//         originPlace: "CT_179",
//         destination: "CT_075"
//     },
//     step: STEP.FINAL,
//     data: [],
//     isAbroad: false
// } as DataOrder;
// // finalData.createRealTimeData(params, "ctrip-hotel-domestic")

// // setTimeout(async () => {
// try {
//     let result = await getData.getData(params);
//     console.log("finnaly get the result : ", result);

// } catch (e) {
//     console.log(e);
// }
//     // }, 6000);