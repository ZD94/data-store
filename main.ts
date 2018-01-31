/**
 * Created by wlh on 2017/6/9.
 */

'use strict';
require('app-module-path').addPath(__dirname);

import * as path from 'path';
import config from "@jingli/config";
import API from '@jingli/dnode-api';
import Logger from '@jingli/logger';
import fs = require("fs");
Logger.init(config.logger);
let logger = new Logger('dtask');

import Bluebird = require('bluebird');
global['Promise'] = Bluebird;
Bluebird.promisifyAll(require("redis"));

import cache from "@jingli/cache";
cache.init({ redis_conf: config.redis.url, prefix: 'data-store:cache:' + config.appName });

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
import { loadModel, sync } from "./db";
import "modelSql/index";

const pkg = require("./package.json");

import app from "./http";
const http = require("http");

zone.forkStackTrace()
    .run(async function () {
        let PORT = config.socket_file || config.httpPort;
        if (cluster.isMaster) {
            console.log("PORT  === >  ", PORT);
            await sync({ force: false });
            await API.initSql(path.join(__dirname, 'api'), config.api);
            let result = await checkListeningPort(PORT);
        }
        if (config.cluster && cluster.isMaster) {
            process.title = `${config.appName || pkg.name}-master`;
            let len = Number(config.cluster) || 2;
            for (var i = 0; i < len; i++) {
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

        //开启http服务
        let server = http.createServer(app);
        server.on('listening', function () {
            if (!/^\d+$/.test(PORT)) {
                fs.chmodSync(PORT, '777')
            }
        });

        server.on('error', (err) => {
            throw err;
        })

        server.listen(PORT, () => {
            console.log("http server running ", PORT);
        });
    });


var net = require('net');
function checkListeningPort(path) {

    var conn = {} as { port: any; path: any };
    if (/^\d+$/.test(path)) {
        conn.port = path;
    } else {
        conn.path = path;
        if (!fs.existsSync(path)) {
            return Promise.resolve();
        } else {
            fs.unlinkSync(path);
            return Promise.resolve();
        }
    }

    return new Promise(function (resolve, reject) {

        var client = net.connect(conn);
        client.on('error', function (e) {
            if (e.code == 'ECONNREFUSED') {
                if (conn.path) {
                    fs.unlink(conn.path, function () {
                        resolve();
                    });
                } else {
                    resolve();
                }
            } else {
                logger.error(11111, e);
                reject(e);
            }
        });
        client.on('connect', function () {
            reject(new Error('Address is in use: ' + path));
            client.end();
        });
    });
}