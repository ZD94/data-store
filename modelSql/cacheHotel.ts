/*
 * @Author: Mr.He 
 * @Date: 2018-01-22 17:40:36 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-01-22 17:42:03
 * @content what is the content of this file. */


import sequelize = require("sequelize");
import { DB } from '@jingli/database';

let columns = {
    id: {
        type: sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    channel: {
        type: sequelize.STRING(50),
        allowNull: false,
    },
    city: {
        type: sequelize.STRING(50),
        allowNull: false,
    },
    checkInDate: {
        type: sequelize.DATEONLY,
        allowNull: false,
    },
    checkOutDate: {
        type: sequelize.DATEONLY,
        allowNull: false,
    },
    location: {
        type: "GEOGRAPHY(Point)",
        allowNull: true,
    },
    data: {
        type: sequelize.JSONB,
        allowNull: false,
    },
    originData: {
        type: sequelize.JSONB,
    }
};
let options = {
    tableName: "cache_hotels",
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    indexes: [
        {
            name: 'cache_hotel_channel',
            fields: ['channel']
        },
        {
            name: 'cache_hotel_city',
            fields: ['city']
        },
        {
            name: 'cache_hotel_check_in_date',
            fields: ['checkInDate']
        },
        {
            name: 'cache_hotel_check_out_date',
            fields: ['checkOutDate']
        }
    ]
}
DB.models.CacheHotel = DB.define('CacheHotel', columns, options);