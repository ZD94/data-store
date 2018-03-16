import { STEP, BudgetType, DataOrder, ISearchHotelParams, ISearchTicketParams } from "../../model/interface";
import getData from "./index";

let params = {
    id: '419e8520-282c-11e8-a8ae-d32cd980048d',
    type: 2,
    input:
        {
            checkInDate: '2018-03-25T13:00:00.000Z',
            checkOutDate: '2018-03-30T02:00:00.000Z',
            city: '1808089',
            latitude: null,
            longitude: null
        },
    days: 5,
    index: 0,
    step: STEP.CACHE,
    data: [],
    isAbroad: false
} as DataOrder;


let paramsTraffic = {
    id: '940a2170-2840-11e8-a660-0d8f43cb2828',
    type: 1,
    input:
        {
            leaveDate: '2018-03-25T13:00:00.000Z',
            originPlace: '800000054',
            destination: '1814905',
            earliestGoBackDateTime: null,
            latestArrivalDateTime: '2018-03-25T13:00:00.000Z'
        },
    index: 0,
    backOrGo: 1,
    channels: [],
    step: STEP.FINAL,
    data: [],
    isAbroad: false
} as DataOrder;
setTimeout(async () => {
    let resultAll = await getData.search_data(params);
    let result = resultAll.data;
    console.log(result.length, resultAll.step, result)
}, 3000);