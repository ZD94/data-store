/**
 * Created by wlh on 2017/6/9.
 */

'use strict';

export const TASK_NAME = {
    TRAIN: ['ctrip-train-domestic', 'qunar-train-domestic'],
    TRAIN_EUR: ['ctrip-eurorail'],
    FLIGHT: ['phantom-ctrip-flight'],  //, 'jingzhong-flight', 11-13，去掉敬重数据
    FLIGHT_ABROAD: ['phantom-ctrip-flight','skyscanner-flight', 'kiwi-flight'],
    HOTEL: ['ctrip-hotel-domestic'],
    HOTEL_ABROAD: ['ctrip-hotel-abroad'],
    FAST_FLIGHT: ['jingzhong-flight'],
    FAST_FLIGHT_ABROAD: ['kiwi-flight'],
}

export interface SearchParams {
    isCacheData?: boolean;
}