/*
 * @Author: Mr.He 
 * @Date: 2017-12-23 11:23:15 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2017-12-23 11:39:26
 * @content what is the content of this file. */

import cache from "@jingli/cache";
import { hotelStorage, hotelRealTimeData, ISearchHotelParams } from "../../api/hotels";
import { trafficStorage, trafficRealTimeData, ISearchTicketParams } from "../../api/traffic";
import { fullPriceService } from "model/fullPrice"
import * as moment from "moment";
import uuid from "uuid";
import { TASK_NAME } from '../../api/types';
import API from "@jingli/dnode-api";
let request = require("request-promise");
let _ = require("lodash");



export class GetData {
    async getFullPriceData(params: DataOrder) {
        fullPriceService.getFullPriceBudget;
    }

    async getCacheData(params: DataOrder) {

    }

    async getRealTimeData(params: DataOrder) {

    }
}