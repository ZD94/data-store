/*
 * @Author: Mr.He 
 * @Date: 2017-12-24 16:49:08 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2017-12-25 09:54:26
 * @content what is the content of this file. */

import { ISearchHotelParams, ISearchTicketParams, BudgetType, DataOrder, HOTLE_CACHE_TIME, TRAFFIC_CACHE_TIME, STEP } from 'model/interface';
import md5 from "md5";

export class FinalData {
    promiseIds: any;
    constructor() {
        this.promiseIds = {};
    }
    async getFinalData(params: DataOrder) {
        let ps = params.channels.map(async (name) => {
            let promiseId = this.getPromiseId(params, name);
            let result = this.promiseIds[promiseId];
            if (result) {
                //有promiseId，等待结束
                return await result;
            } else {
                //没有promiseId，

            }
        });
    }

    getPromiseId(params: DataOrder, name: string): string {
        if (params.type == BudgetType.HOTEL) {
            let input = params.input as ISearchHotelParams;
            let str = [input.checkInDate, input.checkOutDate, input.city, name].join("|");
            return md5(str);
        } else {
            let input = params.input as ISearchTicketParams;
            let str = [input.destination, input.originPlace, input.leaveDate, name].join("|");
            return md5(str);
        }
    }

    waitEnd(promiseId: string) {

    }
}

let finalData = new FinalData();
export default finalData;