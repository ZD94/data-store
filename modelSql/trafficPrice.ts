/*
 * @Author: Mr.He 
 * @Date: 2018-01-22 17:52:39 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-01-22 17:53:41
 * @content what is the content of this file. */


import sequelize = require("sequelize");
import { DB } from '@jingli/database';

let columns = {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    from: {
        type: sequelize.STRING(50),
        allowNull: false,
    },
    to: {
        type: sequelize.STRING(50),
        allowNull: false,
    },
    type: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    degree: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    price: {
        type: sequelize.NUMERIC(15, 2),
        allowNull: false,
    }
}

let options = {
    indexes: [
        {
            name: "traffic_prices_from",
            fields: ['from']
        },
        {
            name: 'traffic_prices_to',
            fields: ['to']
        },
        {
            name: 'traffic_prices_created_at',
            fields: ['created_at']
        },
        {
            name: 'traffic_prices_type',
            fields: ['type']
        }
    ],
    underscored: true,
    timestamps: true,
    tableName: 'traffic_prices'
}
DB.models.TrafficPrice = DB.define('TrafficPrice', columns, options);