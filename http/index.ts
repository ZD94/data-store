/*
 * @Author: Mr.He 
 * @Date: 2018-01-10 18:40:03 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-03-15 18:56:45
 * @content what is the content of this file. */


/* logger */
import Logger from "@jingli/logger";
var logger = new Logger('HTTP');

let express = require("express");
let conn_timeout = require("connect-timeout");
let bodyParser = require("body-parser");
let moment = require("moment");
import getData from "api/getData";
import Common from 'model/util';
import * as config from "@jingli/config";
import { EOperationStatus } from 'api/hotels';
export const WebTrackUrlLimit = 16000;  //阿里云限制url的长度为16k

let app = express();
app.use(conn_timeout("300s"));
app.use(bodyParser.json({ limit: '8mb' }));
app.use(bodyParser.urlencoded({ limit: '8mb', extended: true }));

app.use(usingTime);

function wrapFn(fn: { (req, res, next): any }) {
    return async (req, res, next) => {
        try {
            let ret = await fn(req, res, next);
        } catch (err) {
            return next(err);
        }
    }
}

app.post("/searchData", wrapFn(async (req: any, res: any, next: any) => {
    let params = req.body || {};
    let expectStep = params.step;
    if (typeof params.input == 'string') {
        params.input = JSON.parse(params.input);
    }

    let result = await getData.search_data(params);
    Common.setWebTrackEndPoint({
        "__topic__": config.serverType,
        "project": "data-store",
        "eventName": "HttpRequest-SearchDataRequest",
        "searchCondition": JSON.stringify(params.input),
        "expectDataType": expectStep,
        "returnDataType": result.step,
        "dataLength": result.data.length,
        "operationStatus": result.data && result.data.length ? EOperationStatus.REQUEST_SUCCESS : EOperationStatus.EMPTY,
        "duration": Date.now() - req.enterTime
    });
    logger.info(moment().format("YYYY-MM-DD HH:mm:ss"), `expectStep: ${expectStep}, get Step: ${result.step}, length: ${result.data.length}`);
    res.json(result);
}));

app.get("/test", wrapFn((req, res, next) => {
    res.send("test is ok.");
}));

function usingTime(req: any, res: any, next: any) {
    req.enterTime = Date.now();
    res.json = function (data: object) {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        logger.info(moment().format("YYYY-MM-DD HH:mm:ss"), req.method, req.url, process.title, (Date.now() - req.enterTime) / 1000, "s");
        res.end();
    }

    next();
}

app.use((err, req, res, next) => {
    if (err) {
        logger.error(err);
        return res.json({ code: 500, msg: '系统内部错误' });
    }
    return next();
})

export default app;