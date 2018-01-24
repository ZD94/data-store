/*
 * @Author: Mr.He 
 * @Date: 2018-01-22 17:52:39 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-01-23 16:56:49
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
    fromName: {
        type: sequelize.STRING(50),
        allowNull: false,
    },
    toName: {
        type: sequelize.STRING(50),
        allowNull: false,
    },
    number: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    weight: {
        type: sequelize.INTEGER,
        allowNull: false
    },
}

let options = {
    indexes: [
        {
            name: "auto_lines_from",
            fields: ['from']
        },
        {
            name: 'auto_lines_to',
            fields: ['to']
        },
        {
            name: 'auto_lines_number',
            fields: ['number']
        }
    ],
    underscored: true,
    timestamps: true,
    tableName: 'auto_lines'
}
DB.models.AutoLines = DB.define('AutoLines', columns, options);