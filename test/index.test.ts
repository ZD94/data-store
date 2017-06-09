import '@jingli/fs-promisify';
import * as path from 'path';

import Logger from '@jingli/logger';

import * as zone from '@jingli/zone-setup';

import Bluebird = require('bluebird');
global.Promise = Bluebird;
Bluebird.config({ longStackTraces: false, warnings: false });

let http = require('http');

Logger.init({
    path: path.join(__dirname, "../log"),
    prefix: "mocha_",
    console: false
});
let logger = new Logger('test');

import * as database from '@jingli/database';
database.init('postgres://postgres:root@localhost:5432/test');

import API from '@jingli/dnode-api';

global['API'] = API;

import config = require('@jingli/config');

process.on('unhandledRejection', (reason: any, p: Promise<any>) => {
    throw reason;
});

let apipath = path.normalize(path.join(__dirname, '../api'));

zone.forkStackTrace()
    .run(async function(){
        try{
            await API.initSql(apipath, config.api);
            await API.init(apipath, config.api);
            await API.loadTests();
            await API.startServices(18088);
            run();
        }
        catch(e){
            logger.error(e.stack?e.stack:e);
            console.error(e.stack?e.stack:e);
            process.exit();
        }
    });