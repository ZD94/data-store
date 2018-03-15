/*
 * @Author: Mr.He 
 * @Date: 2017-12-23 11:37:39 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-03-15 16:45:47
 * @content what is the content of this file. */

export const HOTLE_CACHE_TIME = 2 * 60;
export const TRAFFIC_CACHE_TIME = 20;

export interface ISearchHotelParams {
    checkInDate: string;
    checkOutDate: string;
    city: string;
    latitude?: number;
    longitude?: number;
}

export interface ISearchTicketParams {
    leaveDate: string;
    originPlace: string;
    destination: string;
}

export enum BudgetType {
    TRAFFICT = 1,
    HOTEL = 2
}

export interface DataOrder {
    type: BudgetType;
    channels?: string[];
    input: ISearchHotelParams | ISearchTicketParams;
    step: STEP;
    data: any[];
    isAbroad: boolean;
}

export enum STEP {
    FULL = "FULL",
    CACHE = "CACHE",
    FINAL = "FIN"
}

