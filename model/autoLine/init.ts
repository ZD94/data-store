/*
 * @Author: Mr.He 
 * @Date: 2018-01-23 19:57:25 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-03-06 20:49:52
 * @content what is the content of this file. */


import autoLine from "model/autoLine/addline";
import config from "@jingli/config";


// let Cities = ["北京", "上海", "成都", "深圳", "广州", "昆明", "西安", "重庆", "景洪", "武汉",
//     "香港", "首尔", "台北", "曼谷", "新加坡", "东京", "杭州", "纽约", "洛杉矶", "华盛顿", "伦敦",
//     "巴黎", "澳门", "青岛"];

let compareArray = (cities) => {
    cities = Array.from(new Set(cities));
    let result = [];
    cities.map((item, index) => {
        for (let i = index + 1; i < cities.length; i++) {
            result.push([item, cities[i]]);
        }
    });
    return result;
}

/* let addLines = async (cities) => {
    let lines = compareArray(Cities);
    for (let item of lines) {
        let result = await autoLine.addOneLine(item[0], item[1]);
        console.log(result.msg, item[0], item[1]);
    }
} */

export let initLines = async function () {
    let lines = compareArray(config.lineTest.cities);
    let hotels = config.lineTest.cities;

    for (let item of lines) {
        let result = await autoLine.addOneLine(item[0], item[1]);
        console.log(result.msg, item[0], item[1]);
    }

    for (let item of hotels) {
        let result = await autoLine.addHotel(item);
        console.log(result.msg, item);
    }

    console.log("********** 线路加载结束 **********");
}