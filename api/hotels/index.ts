/**
 * Created by wlh on 2017/6/9.
 */

'use strict';

import API from "@jingli/dnode-api";

export class HotelSupport {

    constructor() {
    }

    async search_hotels(params) {
        let result = await API['dtask_mgr'].runTask({name: "ctrip-hotel-domestic", input: params});
        return result;
    }
}

var hotelSupport = new HotelSupport();
export default hotelSupport;