/**
 * Created by wlh on 2017/6/9.
 */
'use strict';

require('ts-node').register({ fast: true });
var Bluebird = require('bluebird');
global.Promise =Bluebird;
Promise.promisifyAll(require("redis"));

require('./main.ts');