/*
 * @Author: Mr.He 
 * @Date: 2018-01-22 17:52:39 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-03-06 20:45:30
 * @content what is the content of this file. */


import sequelize = require("sequelize");
import { DB } from '@jingli/database';

let columns = {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
    },
    type: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    from: {
        type: sequelize.STRING(50),
        allowNull: true,
    },
    to: {
        type: sequelize.STRING(50),
        allowNull: true,
    },
    fromName: {
        type: sequelize.STRING(50),
        allowNull: true,
    },
    toName: {
        type: sequelize.STRING(50),
        allowNull: true,
    },
    number: {
        type: sequelize.INTEGER,
        allowNull: false
    }
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
    tableName: 'auto_lines',
    scheme: "autoLine"
}
DB.models.AutoLines = DB.define('AutoLines', columns, options);