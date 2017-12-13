/*
 * @Author: Mr.He 
 * @Date: 2017-12-08 18:19:41 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2017-12-13 18:35:41
 * @content what is the content of this file. */

import DataEvent from "../../model/event";
import cache from "@jingli/cache";
import { Param, BudgetType } from "model/event"

let budget = {
    //获取预算
    async getData(params: Param) {

        //1.请求全价数据, 直接返回结果 await result.



        //将请求加入事件循环机制 don't need result.
        DataEvent.addEvent(params);
        //获取缓存数据，并判断是否需要拉取最新数据



        return { "age": 123 }; //返回全价数据结果

    }
};

export default budget;

/*
type: BudgetType;
channels: string[];
input: ISearchHotelParams | ISearchTicketParams;
url: string;
id: string;
*/


setTimeout(async () => {
    let result = await budget.getData({
        type: BudgetType.hotel,
        channels: [],
        input: {
            checkInDate: "2017-12-22",
            checkOutDate: "2017-12-24",
            city: "CT_179"
        },
        callbackUrl: "http://localhost:3003",
        id: "b0852580-dfb5-11e7-a0ed-5b3409abe4c9"
    });

    console.log("setTimeout hotel ======> ", result);
}, 3000);





setTimeout(async () => {
    let result = await budget.getData({
        type: BudgetType.traffic,
        channels: [],
        input: {
            leaveDate: "2017-12-22",
            originPlace: "CT_179",
            destination: "CT_075"
        },
        callbackUrl: "http://localhost:3003",
        id: "b0852580-dfb5-11e7-a0ed-5b3409abe455"
    });

    console.log("setTimeout traffic ======> ", result);
}, 8000);