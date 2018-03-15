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
    id: '419e8520-282c-11e8-a8ae-d32cd980048d',
    type: 2,
    input:
        {
            leaveDate: '2018-03-03T12:00:00.000Z',
            checkInDate: '2018-03-25T13:00:00.000Z',
            checkOutDate: '2018-03-30T02:00:00.000Z',
            city: '1808089',
            latitude: null,
            longitude: null
        },
    index: 0,
    step: STEP.CACHE,
    data: [],
    isAbroad: false
} as DataOrder;
setTimeout(async () => {
    let resultAll = await getData.search_data(params);
    let result = resultAll.data;
    console.log(result.length, resultAll.step, result[0], result[20], result[30]);
}, 3000);