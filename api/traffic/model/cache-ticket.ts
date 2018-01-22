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
        channel: {
            type: DataType.STRING(50),
            allowNull: false,
        },
        date: {
            type: DataType.DATEONLY,
            allowNull: false
        },
        data: {
            type: DataType.JSONB,
            allowNull: false,
        },
        originData: {
            type: DataType.JSONB
        },
    }

    let options = {
        indexes: [
            {
                name: "cache_ticket_from",
                fields: ['from']
            },
            {
                name: "cache_ticket_to",
                fields: ['to']
            },
            {
                name: 'cache_ticket_channel',
                fields: ['channel']
            },
            {
                name: 'cache_ticket_created_at',
                fields: ['created_at']
            },
            {
                name: 'cache_ticket_date',
                fields: ['date']
            }
        ],
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        tableName: 'cache_tickets'
    }

    return DB.define('CacheTicket', attributes, options);
}
