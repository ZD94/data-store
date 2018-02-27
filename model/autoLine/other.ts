/*
 * @Author: Mr.He 
 * @Date: 2018-01-23 19:57:25 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-01-24 11:40:24
 * @content what is the content of this file. */


import autoLine from "model/autoLine/index";

let Cities = ["北京", "上海", "成都", "深圳", "广州", "昆明", "西安", "重庆", "景洪", "武汉",
    "香港", "首尔", "台北", "曼谷", "新加坡", "东京", "杭州", "纽约", "洛杉矶", "华盛顿", "伦敦",
    "巴黎", "澳门", "青岛"];

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

let addLines = async (cities) => {
    let lines = compareArray(Cities);
    for (let item of lines) {
        let result = await autoLine.addOneLine(item[0], item[1]);
        console.log(result.msg, item[0], item[1]);
    }
}