/**
 * Created by wlh on 2017/6/9.
 */

'use strict';
import API from '@jingli/dnode-api';
import {TASK_NAME} from '../types';
import {AbstractDataSupport} from "../data-support";

export interface Ticket {

}
export class TrafficSupport extends AbstractDataSupport<Ticket> {
    async search_tickets(params) {
        let self = this;
        let tickets: Ticket[] = [];
        let ps = [...TASK_NAME.FLIGHT, ...TASK_NAME.TRAIN].map( async (taskName) => {
            let currentResult = await self.getData(taskName, params);
            tickets = [...tickets, ...currentResult];
        });
        await Promise.all(ps);
        return tickets;
    }
}

var trafficSupport = new TrafficSupport();
export default trafficSupport;