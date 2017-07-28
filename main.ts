/**
 * Created by wlh on 2017/6/9.
 */

'use strict';

import * as path from 'path';
let config = require('@jingli/config');
import API from '@jingli/dnode-api';
import Logger from '@jingli/logger';
Logger.init(config.logger);
let logger = new Logger('dtask');

import Bluebird = require('bluebird');
global['Promise'] =Bluebird;
Bluebird.promisifyAll(require("redis"));

import * as zone from '@jingli/zone-setup';

process.on('unhandledRejection', (reason: any, p: PromiseLike<any>) => {
    if (config.debug) {
        throw reason;
    }
    logger.error(reason);
});

import database = require("@jingli/database");
database.init(config.postgres.url);

import cluster = require("cluster");
import os = require("os");
import {loadModel, sync} from "./db";
const pkg = require("./package.json");
zone.forkStackTrace()
    .run(async function () {

        if (cluster.isMaster) {
            await API.initSql(path.join(__dirname, 'api'), config.api);
        }
        await loadModel(path.join(__dirname, 'api'));
        if (cluster.isMaster) {
            await sync({force: false});
        }

        if (config.cluster && cluster.isMaster) { 
            process.title = `${config.appName || pkg.name}-master`;
            for (var i = 0; i < os.cpus().length; i++) { 
                cluster.fork();
            }
            cluster.on('exit', function (worker) { 
                logger.error(`worker ${worker.process.pid} has died!`);
                cluster.fork();
            })
            return;
        }
        if (cluster.isWorker) { 
            process.title = `${config.appName || pkg.name}-worker`;
        }
        process.on('unhandledRejection', function (reason, p) { 
            logger.error('unhandledRejection==>', reason)
            throw reason;
        })
        process.on('uncaughtException', function (err) { 
            logger.error('uncaughtException==>', err.stack ? err.stack : err);
            throw err;
        })

        await API.init(path.join(__dirname, 'api'), config.api);
        await API.startServices(config.listen);
        logger.info(`worker#${process.pid} API listen on ${config.listen}`);
        logger.info('API initialized.');
    });

