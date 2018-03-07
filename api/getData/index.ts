/*
 * @Author: Mr.He 
 * @Date: 2017-12-08 18:19:41 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-01-08 17:00:26
 * @content what is the content of this file. */

import cache from "@jingli/cache";
import { STEP, BudgetType, DataOrder, ISearchHotelParams, ISearchTicketParams } from "model/interface";
import common  from 'model/util';
import { fullPriceService } from "model/fullPrice";
import cacheData from "model/cache";
import finalData from "model/final";
import * as config from "@jingli/config";
import { EOperationStatus } from 'api/hotels';

let getData = {
    async search_data(params: DataOrder) {
        let timing = Date.now();
        let result: DataOrder;
        params = await common.checkParams(params);
        switch (params.step) {
            case STEP.FULL:
                return await fullPriceService.getFullPriceData(params);
            case STEP.CACHE:
                result = await cacheData.getCacheData(params);
                await common.setWebTrackEndPoint({
                    "__topic__": config.serverType,
                    "project": "data-store",
                    "eventName": "HttpRequest-CacheDataRequest",
                    "searchCondition": JSON.stringify(params),
                    "expectDataType": STEP.CACHE,
                    "returnDataType": result.step,
                    "dataLength": result.data.length,
                    "operationStatus": result.data && result.data.length? EOperationStatus.SUCCESS: EOperationStatus.EMPTY,
                    "duration": Date.now() - timing,
                    "hit": result.step != STEP.FULL && result.data && result.data.length? true: false
                });
                return result;
            case STEP.FINAL:
                return await finalData.getFinalData(params);
            default:
                throw new Error("not has the Step : " + params.step);
        }
    }
};

export default getData;