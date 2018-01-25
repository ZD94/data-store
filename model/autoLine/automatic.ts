/*
 * @Author: Mr.He 
 * @Date: 2018-01-24 18:31:00 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-01-25 17:51:07
 * @content what is the content of this file. */

import Common from "model/util";
import { DB } from "@jingli/database";
import config from "@jingli/config";

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
            return setTimeout(this.tasks, 5 * 1000);
        }

        let datas = await this.getLineDatas(1);

        for (let item of datas) {
            console.log(item.toJSON());
        }

    }

    async getLineDatas(num: number) {
        return await DB.models["AutoLines"].findAll({
            where: {},
            order: [["number", "asc"], ["weight", "desc"]],
            limit: num
        })
    }
}

let autoMatic = new AutoMatic();

setTimeout(async () => {
    await autoMatic.tasks();
}, 5000);
