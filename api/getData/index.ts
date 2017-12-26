/*
 * @Author: Mr.He 
 * @Date: 2017-12-08 18:19:41 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2017-12-26 12:14:31
 * @content what is the content of this file. */

import cache from "@jingli/cache";
import { STEP, BudgetType, DataOrder, ISearchHotelParams, ISearchTicketParams } from "model/interface";
import common from 'model/util';
import { fullPriceService } from "model/fullPrice";
import cacheData from "model/cache";
import finalData from "model/final";

let getData = {
    async search_data(params: DataOrder) {
        params = await common.checkParams(params);
        switch (params.step) {
            case STEP.FULL:
                return await fullPriceService.getFullPriceData(params);
            case STEP.CACHE:
                return await cacheData.getCacheData(params);
            case STEP.FINAL:
                return await finalData.getFinalData(params);
        }
    }
};

export default getData;

// setTimeout(async () => {

//     let params = {
//         type: BudgetType.HOTEL,
//         channels: ["ctrip-hotel-domestic"],
//         input: {
//             checkInDate: "2018-1-22",
//             checkOutDate: "2018-1-24",
//             city: "CT_131"
//         },
//         step: STEP.FINAL,
//         data: [],
//         isAbroad: false
//     } as DataOrder;
//     // finalData.createRealTimeData(params, "ctrip-hotel-domestic")

//     setTimeout(async () => {
//         try {
//             let result = await getData.getData(params);
//             console.log("finnaly get the result : ", result);

//         } catch (e) {
//             console.log(e);
//         }
//     }, 6000);

//     // let result = await getData.getData(params);
//     // console.log("result =====>", result);

// }, 5000);





/* setTimeout(async () => {

    let params = {
        type: BudgetType.TRAFFICT,
        channels: ["ctrip-hotel-domestic"],
        input: {
            leaveDate: "2018-1-22",
            originPlace: "CT_179",
            destination: "CT_075"
        },
        step: STEP.FINAL,
        data: [],
        isAbroad: false
    } as DataOrder;
    // finalData.createRealTimeData(params, "ctrip-hotel-domestic")

    // setTimeout(async () => {
    try {
        let result = await getData.getData(params);
        console.log("finnaly get the result : ", result);

    } catch (e) {
        console.log(e);
    }
    // }, 6000);
}, 4000); */