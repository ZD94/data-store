
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
        // degree: number[]
    }) {
        let { from, to, type } = params;
        let price = await DB.models['TrafficPrice'].findAll({
            where: {
                from: from,
                to: to,
                type: type
            }
        });
        if (!price)
            return price;
        if (price.length == 0) {
            console.log("TrafficPrice 全价数据没有", params);
        }
        return price;
    }

    public async getFlightFullPrice(params: { from: string, to: string }) {
        let { from, to } = params;
        return this.getFullPrice({
            from: from,
            to: to,
            type: E_TRAFFIC_TYPE.FLIGHT
        });
    }

    public async getTrainFullPrice(params: {
        from: string;
        to: string;
        // seat: number[]
    }) {
        let { from, to } = params;
        return this.getFullPrice({
            from: from,
            to: to,
            type: E_TRAFFIC_TYPE.TRAIN
        });
    }
}

const trafficPrice = new TrafficPrice();

/* setTimeout(async () => {
    let result = await trafficPrice.getFlightFullPrice({
        from: "CT_179",
        to: "CT_075"
    });

    console.log(1234, result);
}, 4000); */


export default trafficPrice;