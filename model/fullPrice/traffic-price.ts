
import { DB } from '@jingli/database';
import API from '@jingli/dnode-api';
import { SelectDataHelp } from "api/data-support";

export enum E_TRAFFIC_TYPE {
    FLIGHT = 1,
    TRAIN = 2
}

export class TrafficPrice extends SelectDataHelp {
    constructor() {
        super();
    }

    private async getFullPrice(params: {
        from: string,
        to: string,
        type: E_TRAFFIC_TYPE,
        // degree: number[]
    }) {
        let { from, to, type } = params;
        let where = {
            from: {
                in: await this.getSelectCitis(from)
            },
            to: {
                in: await this.getSelectCitis(to)
            },
            type: type
        };
        let price = await DB.models['TrafficPrice'].findAll({
            where
        });
        if (!price)
            return price;

        if (price.length == 0) {
            console.log("TrafficPrice 全价数据没有,可能是请求火车", type, where);
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

export default trafficPrice;