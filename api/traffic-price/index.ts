
import { DB } from '@jingli/database';
import API from '@jingli/dnode-api';

export enum E_TRAFFIC_TYPE { 
    FLIGHT = 1,
    TRAIN = 2
}

export class TrafficPrice { 

    constructor() { }

    private async getFullPrice(params: {
        from: string,
        to: string,
        type: E_TRAFFIC_TYPE,
        degree: number
    }) {
        let { from, to, type, degree } = params;
        let price = await DB.models['TrafficPrice'].findOne({
            where: {
                from: from,
                to: to,
                type: type,
                degree: degree,
            }
        });
        if (!price)
            return price;
        return price.toJSON();
    }

    public async getFlightFullPrice(params: { from: string, to: string, cabin: number }) { 
        let { from, to, cabin } = params;
        return this.getFullPrice({
            from: from,
            to: to,
            type: E_TRAFFIC_TYPE.FLIGHT,
            degree: cabin
        });
    }

    public async getTrainFullPrice(params: {
        from: string;
        to: string;
        seat: number
    }) { 
        let { from, to, seat } = params;
        return this.getFullPrice({
            from: from,
            to: to,
            type: E_TRAFFIC_TYPE.TRAIN,
            degree: seat
        });
    }
}

const trafficPrice = new TrafficPrice();
export default trafficPrice;