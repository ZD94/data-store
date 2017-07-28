/**
 * Created by wlh on 2017/7/14.
 */

'use strict';
import sequelize = require("sequelize");

export= function(DB: sequelize.Sequelize, Types: sequelize.DataTypes) {
    let columns = {
        id: {
            type: Types.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        channel: {
            type: Types.STRING(50),
            allowNull: false,
        },
        city: {
            type: Types.STRING(50),
            allowNull: false,
        },
        checkInDate: {
            type: Types.DATEONLY,
            allowNull: false,
        },
        checkOutDate: {
            type: Types.DATEONLY,
            allowNull: false,
        },
        location: {
            type: "GEOGRAPHY(Point)",
            allowNull: true,
        },
        data: {
            type: Types.JSONB,
            allowNull: false,
        },
        originData: {
            type: Types.JSONB,
        }
    };
    let options = {
        tableName: "cache_hotels",
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    }
    return DB.define('CacheHotel', columns, options);
}