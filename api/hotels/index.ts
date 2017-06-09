/**
 * Created by wlh on 2017/6/9.
 */

'use strict';

import API from "@jingli/dnode-api";
import {AbstractDataSupport} from "../data-support";
import {TASK_NAME} from "../types";

export interface IHotel {}
export class HotelSupport extends AbstractDataSupport<IHotel> {

    async search_hotels(params) {
        let self = this;
        let hotels: IHotel[] = [];
        let ps = TASK_NAME.HOTEL.map( async (taskName) => {
            let currentHotels = await self.getData(taskName, params);
            hotels = [...hotels, ...currentHotels]
        });
        await Promise.all(ps);
        return hotels;
    }
}

var hotelSupport = new HotelSupport();
export default hotelSupport;