/*
 * @Author: Mr.He 
 * @Date: 2017-12-08 18:19:41 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2017-12-24 17:44:21
 * @content what is the content of this file. */

import DataEvent from "../../model/event";
import cache from "@jingli/cache";
import { STEP, BudgetType, DataOrder, ISearchHotelParams, ISearchTicketParams } from "model/interface";
import common from 'model/util';
import { testTraffic, testHotel, fullPriceService } from "model/fullPrice";
import cacheData from "model/cache";
import API from "@jingli/dnode-api";

let getData = {
    async getData(params: DataOrder) {
        params = await this.checkParams(params);
        switch (params.step) {
            case STEP.FULL:
                return await fullPriceService.getFullPriceData(params);
            case STEP.CACHE:
                return await cacheData.getCacheData(params);
            case STEP.FINAL:

                break;
        }
    },

    async checkParams(params: DataOrder) {
        if (params.type == BudgetType.HOTEL) {
            let input = params.input as ISearchHotelParams;
            let city = await API['place'].getCityInfo({ cityCode: input.city });
            if (!input.latitude || !input.longitude) {
                input.latitude = city.latitude;
                input.longitude = city.longitude;
            }

            params.isAbroad = city.isAbroad;
        }

        if (params.type == BudgetType.TRAFFICT) {
            let input = params.input as ISearchTicketParams;
            let originPlace = API['place'].getCityInfo({ cityCode: input.originPlace });
            let destination = API['place'].getCityInfo({ cityCode: input.destination });
            let ps = await Promise.all([await originPlace, await destination]);
            let isAbroad = false;
            for (let city of ps) {
                if (city.isAbroad) {
                    isAbroad = true;
                    break;
                }
            }

            params.isAbroad = isAbroad;
        }

        params.channels = common.switchChannel(params.type, params.channels, params.isAbroad);

        return params;
    }
};

export default getData;

/* setTimeout(async () => {
    let result = await getData.getData({
        type: BudgetType.HOTEL,
        channels: [],
        input: {
            checkInDate: "2017-12-22",
            checkOutDate: "2017-12-24",
            city: "CT_289"
        },
        step: STEP.CACHE,
        data: []
    });

    console.log("setTimeout hotel ======> ", result);
}, 3000); */





/* setTimeout(async () => {
    let result = await getData.getData({
        type: BudgetType.TRAFFICT,
        channels: [],
        input: {
            leaveDate: "2017-12-22",
            originPlace: "CT_179",
            destination: "CT_075"
        },
        data: [],
        step: STEP.CACHE
    });

    console.log("setTimeout traffic ======> ", result);
}, 4000); */