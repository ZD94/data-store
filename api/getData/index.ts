/*
 * @Author: Mr.He 
 * @Date: 2017-12-08 18:19:41 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2017-12-17 15:49:08
 * @content what is the content of this file. */

import DataEvent from "../../model/event";
import cache from "@jingli/cache";
import { Param, BudgetType } from "model/event";
import { testTraffic, testHotel, fullPriceService } from "model/fullPrice";

let getData = {
    async getData(params: Param) {
        // console.log("params params params =====>", params);

        //将请求加入事件循环机制 don't need result.
        setTimeout(() => {
            DataEvent.addEvent(params).then((result) => {
                console.log(result);
            }).catch((e) => {
                console.error(e);
            });
        }, 20000);

        return await fullPriceService.getFullPriceBudget(params);
        /*  if (params.type == BudgetType.HOTEL) {
             console.log("BudgetType.HOTEL  ")
             return testHotel;
         } else {
             console.log("! BudgetType.HOTEL");
             return testTraffic;
         } */
    }
};

export default getData;

// setTimeout(async () => {
//     let result = await getData.getData({
//         type: BudgetType.HOTEL,
//         orderId: "b0852580-dfb5-11e7-a0ed-5b3409abe4op",
//         channels: [],
//         input: {
//             checkInDate: "2017-12-22",
//             checkOutDate: "2017-12-24",
//             city: "CT_179"
//         },
//         callbackUrl: "http://localhost:3003",
//         id: "b0852580-dfb5-11e7-a0ed-5b3409abe4c9"
//     });

//     // console.log("setTimeout hotel ======> ", result);
// }, 3000);





// setTimeout(async () => {
//     let result = await getData.getData({
//         type: BudgetType.TRAFFICT,
//         orderId: "b0852580-dfb5-11e7-a0ed-5b3409abe466",
//         channels: [],
//         input: {
//             leaveDate: "2017-12-22",
//             originPlace: "CT_179",
//             destination: "CT_075"
//         },
//         callbackUrl: "http://localhost:3003",
//         id: "b0852580-dfb5-11e7-a0ed-5b3409abe455"
//     });

//     // console.log("setTimeout traffic ======> ", result);
// }, 4000);