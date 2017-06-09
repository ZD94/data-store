/**
 * Created by wlh on 2017/6/9.
 */

'use strict';
import API from '@jingli/dnode-api';

export class TrafficSupport {

    async search_tickets(params: any) {
        let result = await API['dtask_mgr'].runTask({name: 'ctrip-train-domestic', input: params});
        return result;
    }
}

var trafficSupport = new TrafficSupport();
export default trafficSupport;