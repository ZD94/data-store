'use strict';
import Sequelize = require("sequelize");

export = function (DB: Sequelize.Sequelize, DataType: Sequelize.DataTypes) {

    let attributes = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        from: {
            type: DataType.STRING(50),
            allowNull: false,
        },
        to: {
            type: DataType.STRING(50),
            allowNull: false,
        },
        type: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        degree: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataType.NUMERIC(15, 2),
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

    return DB.define('TrafficPrice', attributes, options);
}
