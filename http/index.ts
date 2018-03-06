/*
 * @Author: Mr.He 
 * @Date: 2018-01-10 18:40:03 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-03-06 22:04:18
 * @content what is the content of this file. */


/* logger */
import Logger from "@jingli/logger";
var logger = new Logger('HTTP');

let express = require("express");
let conn_timeout = require("connect-timeout");
let bodyParser = require("body-parser");
let moment = require("moment");
import getData from "api/getData";
import autoLine from "model/autoLine/addline";

let app = express();
app.use(conn_timeout("300s"));
app.use(bodyParser.json({ limit: '8mb' }));
app.use(bodyParser.urlencoded({ limit: '8mb', extended: true }));

app.use(usingTime);

app.post("/searchData", async (req: any, res: any, next: any) => {
    let params = req.body;
    let expectStep = params.step;
    let result = await getData.search_data(params);
    logger.info(moment().format("YYYY-MM-DD hh:mm:ss"), `expectStep: ${expectStep}, get Step: ${result.step}, length: ${result.data.length}`);
    res.json(result);
});

app.get("/addLine", async (req: any, res: any, next: any) => {
    let { from, to } = req.query;
    let result = await autoLine.addOneLine(from, to);
    res.json(result);
});

app.get("/test", (req, res, next) => {
    res.send("test is ok.");
});

function usingTime(req: any, res: any, next: any) {
    req.enterTime = Date.now();
    res.json = function (data: object) {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        logger.info(moment().format("YYYY-MM-DD hh:mm:ss"), req.method, req.url, process.title, (Date.now() - req.enterTime) / 1000, "s");
        res.end();
    }

    next();
}

export default app;