/**
 * Created by wlh on 2017/6/9.
 */

'use strict';

export const TASK_NAME = {
    TRAIN: ['ctrip-train-domestic', 'qunar-train-domestic'],
    TRAIN_DEFAULT: ['ctrip-train-domestic', 'qunar-train-domestic'],

    FLIGHT: ['phantom-ctrip-flight'],  //, 'jingzhong-flight', 11-13，去掉敬重数据
    FLIGHT_DEFAULT: ['phantom-ctrip-flight'],

    FLIGHT_ABROAD: ['phantom-ctrip-flight', 'skyscanner-flight', 'kiwi-flight'],
    FLIGHT_ABROAD_DEFAULT: ['phantom-ctrip-flight', 'skyscanner-flight', 'kiwi-flight'],

    HOTEL: ['ctrip-hotel-domestic'],
    HOTEL_DEFAULT: ['ctrip-hotel-domestic'],

    HOTEL_ABROAD: ['ctrip-hotel-abroad'],
    HOTEL_ABROAD_DEFAULT: ['ctrip-hotel-abroad'],

    TRAIN_EUR: ['ctrip-eurorail'],     // not use.
    FAST_FLIGHT: ['jingzhong-flight'],     //not use
    FAST_FLIGHT_ABROAD: ['kiwi-flight'],   //not use
}

export interface SearchParams {
    isCacheData?: boolean;
}