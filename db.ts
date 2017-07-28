/**
 * Created by wlh on 2017/7/17.
 */

'use strict';

import fs = require("fs");
import path = require("path");
import {DB} from '@jingli/database';
import Logger from '@jingli/logger';
const logger = new Logger("db");

export async function loadModel(apiPath:string) {
    let absReg = /^\//;
    if (!absReg.test(apiPath)) {
        apiPath = path.join(__dirname, apiPath);
    }
    let dirs = fs.readdirSync(apiPath);
    let ignores = [];
    for(let dir of dirs) {
        let absDirPath = path.join(apiPath, dir);
        if (!fs.statSync(absDirPath).isDirectory()) {
            continue;
        }
        let modelDir = path.join(absDirPath, 'model');
        if (!fs.existsSync(modelDir)) {
            continue;
        }
        //加载${dir}/model/*.ts 文件
        let files = fs.readdirSync(modelDir);
        for(let f of files) {
            if (!/\.(js|ts)$/.test(f))
                continue;
            f = f.replace(/\.js|\.ts$/, '');
            let modelName = underlineToHump(f);
            logger.debug(`load file ${f} mount to DB.models[${modelName}]`);
            DB.models[modelName] = DB.import(path.join(modelDir, f) );
        }
    }
}

export async function sync(options: {force?: boolean}) {
    let force = options ? !!options.force : false;
    logger.debug(`sync db force:${force}`)
    return DB.sync({force:force});
}


function underlineToHump(str) {
    str = str.replace(/(-|_)[a-z]/g, function(match) {
        return match[1].toUpperCase();
    });
    str = str.replace(/^[a-z]/, function(match) {
        return match.toUpperCase();
        // return String.fromCharCode(match.charCodeAt(0) - 32)
    })
    return str;
}