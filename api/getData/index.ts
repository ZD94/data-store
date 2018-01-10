/*
 * @Author: Mr.He 
 * @Date: 2017-12-08 18:19:41 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-01-08 17:00:26
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
            default:
                throw new Error("not has the Step : " + params.step);
        }
    }
};

export default getData;