/*
 * @Author: Mr.He 
 * @Date: 2017-12-09 21:22:12 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2017-12-17 14:23:11
 * @content 提供全价数据服务. */


export let flightModel = {
    "originPlace": "CT_179",
    "originStation": {
        "code": "HGH",
        "port": "T3"
    },
    "destination": "CT_075",
    "destinationStation": {
        "code": "CTU",
        "port": "T2"
    },
    "No": "MU2252",
    "carry": "东航",
    "departDateTime": "2017-12-22T02:45:00.000Z",
    "arrivalDateTime": "2017-12-22T06:15:00.000Z",
    "type": 1,
    "duration": 210,
    "segs": [
        {
            "deptAirport": {
                "name": "萧山",
                "city": "杭州",
                "code": "HGH",
                "bname": "T3"
            },
            "arriAirport": {
                "name": "双流",
                "city": "成都",
                "code": "CTU",
                "bname": "T2"
            },
            "deptDateTime": "2017-12-22T02:45:00.000Z",
            "arriDateTime": "2017-12-22T06:15:00.000Z",
            "craft": {
                "kind": "中",
                "series": "320",
                "name": "空客"
            },
            "base": {
                "flgno": "MU2252",
                "aircode": "MU",
                "airsname": "东航",
                "ishared": false
            }
        }
    ],
    "agents": [
        {
            "name": "ctrip",
            "bookUrl": "http://m.ctrip.com/html5/flight/swift/domestic/HGH/CTU/2017-12-22",
            "deeplinkData": {
                "originPlace": "HGH",
                "destination": "CTU",
                "datetime": "2017-12-22",
                "flgno": "MU2252",
                "type": "domestic"
            },
            "cabins": [
                {
                    "name": 2,
                    "price": 10
                }
            ]
        }
    ]
};


export let trainModel = {
    "No": "D314",
    "type": 0,
    "agents": [
        {
            "name": "qunar",
            "cabins": [
                {
                    "name": 3,
                    "price": 336,
                    "remainNumber": 100
                },
                {
                    "name": 6,
                    "price": 730,
                    "remainNumber": 100
                }
            ],
            "bookUrl": "http://touch.train.qunar.com/trainList_Card.html?startCity=上海&startStation=上海&endCity=北京&endStation=北京南&date=2017-12-21&trainNum=D314&searchType=stasta&sort=&seatType=二等座&searchArr=北京&searchDep=上海&needRecommondLess=1&bd_source=3w",
            "deeplinkData": {
                "date": "2017-12-21",
                "endCity": "北京",
                "seatType": "二等座",
                "trainNum": "D314",
                "searchArr": "北京",
                "searchDep": "上海",
                "startCity": "上海",
                "endStation": "北京南",
                "startStation": "上海"
            }
        }
    ],
    "duration": 707,
    "destination": "CT_131",
    "originPlace": "CT_289",
    "originStation": {
        "name": "上海"
    },
    "departDateTime": "2017-12-21T13:08:00.000Z",
    "arrivalDateTime": "2017-12-22T00:55:00.000Z",
    "destinationStation": {
        "name": "北京南"
    }
}



export let testHotel = [
    {
        "name": "杭州马可波罗假日酒店",
        "shortName": "马可波罗",
        "star": 4,
        "latitude": 30.251023133062056,
        "longitude": 120.15697126391926,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/435383.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 435383,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 439
            }
        ]
    },
    {
        "name": "杭州中维香溢大酒店",
        "shortName": "中维香溢",
        "star": 5,
        "latitude": 30.24781477421487,
        "longitude": 120.16412581516192,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/7828854.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 7828854,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 546
            }
        ]
    },
    {
        "name": "杭州中山国际大酒店",
        "shortName": "中山国际",
        "star": 4,
        "latitude": 30.250645427646802,
        "longitude": 120.15849314718527,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/429778.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 429778,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 309
            }
        ]
    },
    {
        "name": "浙江国际大酒店",
        "shortName": "浙江国际",
        "star": 5,
        "latitude": 30.26564270611577,
        "longitude": 120.15907754192513,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/396983.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 396983,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 436
            }
        ]
    },
    {
        "name": "杭州瑞立江河汇酒店",
        "shortName": "瑞立江河汇",
        "star": 5,
        "latitude": 30.25250010585056,
        "longitude": 120.21467801723273,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/5240879.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 5240879,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 588
            }
        ]
    },
    {
        "name": "杭州汇和君亭酒店",
        "shortName": "汇和君亭",
        "star": 5,
        "latitude": 30.29048376706908,
        "longitude": 120.19358083208029,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1435183.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1435183,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 426
            }
        ]
    },
    {
        "name": "桔子���晶酒店(杭州庆春东路店)",
        "shortName": "桔子水晶",
        "star": 4,
        "latitude": 30.25415983674843,
        "longitude": 120.17893472508766,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/6270640.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 6270640,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 349
            }
        ]
    },
    {
        "name": "杭州瑞莱克斯大酒店",
        "shortName": "瑞莱克斯",
        "star": 4,
        "latitude": 30.225240849740544,
        "longitude": 120.18077789873821,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/479445.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 479445,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 220
            }
        ]
    },
    {
        "name": "杭州湖滨君亭酒店",
        "shortName": "湖滨君亭",
        "star": 4,
        "latitude": 30.246933549237905,
        "longitude": 120.15774287593263,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/435419.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 435419,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 272
            }
        ]
    },
    {
        "name": "杭州新瑞丰格琳酒店",
        "shortName": "新瑞丰格琳",
        "star": 4,
        "latitude": 30.25112845019253,
        "longitude": 120.17293099640351,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/391738.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 391738,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 260
            }
        ]
    },
    {
        "name": "桔子水晶酒店(杭州火车东站店)",
        "shortName": "桔子水晶",
        "star": 4,
        "latitude": 30.285785657641444,
        "longitude": 120.19490498573195,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/3997628.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 3997628,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 439
            }
        ]
    },
    {
        "name": "赞成宾馆(杭州国际店)",
        "shortName": "赞成宾馆",
        "star": 4,
        "latitude": 30.241098016866527,
        "longitude": 120.16440429912663,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.2,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/5903375.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 5903375,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 339
            }
        ]
    },
    {
        "name": "杭州中维歌德大酒店",
        "shortName": "中维歌德",
        "star": 5,
        "latitude": 30.242603574302304,
        "longitude": 120.16760544259112,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/346307.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 346307,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 629
            }
        ]
    },
    {
        "name": "全季酒店(杭州西湖解放路店)",
        "shortName": "全季酒店",
        "star": 3,
        "latitude": 30.248925662971065,
        "longitude": 120.16135895704377,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/975714.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 975714,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 374
            }
        ]
    },
    {
        "name": "杭州天元大厦",
        "shortName": "天元大厦",
        "star": 4,
        "latitude": 30.25105207939128,
        "longitude": 120.21319607052375,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/442246.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 442246,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 398
            }
        ]
    },
    {
        "name": "杭州御街壹号酒店",
        "shortName": "御街壹号",
        "star": 4,
        "latitude": 30.242225420393677,
        "longitude": 120.15972552118423,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/9236520.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 9236520,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 611
            }
        ]
    },
    {
        "name": "浙江东方豪生大酒店",
        "shortName": "东方豪生",
        "star": 5,
        "latitude": 30.273117236780703,
        "longitude": 120.177969056545,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/419973.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 419973,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 194
            }
        ]
    },
    {
        "name": "西湖柒号酒店式公寓(杭州西湖店)",
        "shortName": "西湖柒号",
        "star": 3,
        "latitude": 30.249670215532966,
        "longitude": 120.15831254587285,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/445496.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 445496,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 297
            }
        ]
    },
    {
        "name": "领尚臻品酒店(杭州钱江新城汽车南站店)",
        "shortName": "领尚臻品",
        "star": 3,
        "latitude": 30.231244161750613,
        "longitude": 120.17725974417799,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/662385.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 662385,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 249
            }
        ]
    },
    {
        "name": "全季酒店(杭州四季青秋涛路店)",
        "shortName": "全季酒店",
        "star": 3,
        "latitude": 30.25094416595925,
        "longitude": 120.18997581688723,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/5342157.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 5342157,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 297
            }
        ]
    },
    {
        "name": "全季酒店(杭州西湖平海路店)",
        "shortName": "全季酒店",
        "star": 3,
        "latitude": 30.25095143823631,
        "longitude": 120.15763075948489,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/7801978.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 7801978,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 322
            }
        ]
    },
    {
        "name": "杭州中豪大酒店",
        "shortName": "中豪",
        "star": 4,
        "latitude": 30.25752511993205,
        "longitude": 120.18989230940262,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/469780.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 469780,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 348
            }
        ]
    },
    {
        "name": "杭州湾大酒店",
        "shortName": "湾大酒店",
        "star": 3,
        "latitude": 30.28279362081986,
        "longitude": 120.1882323084621,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1210163.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1210163,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 255
            }
        ]
    },
    {
        "name": "桔子水晶酒店(杭州钱江新城近江店)",
        "shortName": "桔子水晶",
        "star": 4,
        "latitude": 30.232160559988355,
        "longitude": 120.18421895031042,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/6336031.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 6336031,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 419
            }
        ]
    },
    {
        "name": "杭州红楼大酒店",
        "shortName": "红楼大酒店",
        "star": 4,
        "latitude": 30.242259288416918,
        "longitude": 120.17066169073492,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/396971.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 396971,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 298
            }
        ]
    },
    {
        "name": "全季酒店(杭州钱江新城店)",
        "shortName": "全季酒店",
        "star": 3,
        "latitude": 30.238627261087984,
        "longitude": 120.20060348392919,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/6112145.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 6112145,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 311
            }
        ]
    },
    {
        "name": "杭州银河汇",
        "shortName": "银河汇",
        "star": 4,
        "latitude": 30.247456953838533,
        "longitude": 120.20885788412797,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1915400.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1915400,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 466
            }
        ]
    },
    {
        "name": "杭州和丽精品酒店",
        "shortName": "和丽精品",
        "star": 3,
        "latitude": 30.287165462145698,
        "longitude": 120.18786851174747,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/445494.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 445494,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 229
            }
        ]
    },
    {
        "name": "浙江文源宾馆",
        "shortName": "文源宾馆",
        "star": 3,
        "latitude": 30.279387697347055,
        "longitude": 120.16447145073418,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1734283.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1734283,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 228
            }
        ]
    },
    {
        "name": "久栖·杭州游宿度假公寓",
        "shortName": "久栖",
        "star": 3,
        "latitude": 30.24950670713875,
        "longitude": 120.15822635898422,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/6599717.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 6599717,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 256
            }
        ]
    },
    {
        "name": "杭州捷特漫大酒店",
        "shortName": "捷特漫",
        "star": 4,
        "latitude": 30.22464331844047,
        "longitude": 120.18574694477911,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/450880.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 450880,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 298
            }
        ]
    },
    {
        "name": "柏诗酒店(杭州501城市广场店)",
        "shortName": "柏诗酒店",
        "star": 3,
        "latitude": 30.25577797049761,
        "longitude": 120.19243141562482,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.2,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/8904186.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 8904186,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 329
            }
        ]
    },
    {
        "name": "全季酒店(杭州钱江新城新塘路店)",
        "shortName": "全季酒店",
        "star": 3,
        "latitude": 30.2615841405357,
        "longitude": 120.19782503688748,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/7276739.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 7276739,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 258
            }
        ]
    },
    {
        "name": "杭州赞成宾馆",
        "shortName": "赞成宾馆",
        "star": 4,
        "latitude": 30.24088678928157,
        "longitude": 120.16492737488514,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/2135072.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 2135072,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 368
            }
        ]
    },
    {
        "name": "浙江铁道大厦城市广场大酒店",
        "shortName": "铁道大厦",
        "star": 3,
        "latitude": 30.240774864554442,
        "longitude": 120.17133662817737,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/792763.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 792763,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 197
            }
        ]
    },
    {
        "name": "杭州银江宾馆",
        "shortName": "银江宾馆",
        "star": 4,
        "latitude": 30.254460541319947,
        "longitude": 120.16992967540864,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/443762.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 443762,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 299
            }
        ]
    },
    {
        "name": "浙江中瑞大厦",
        "shortName": "中瑞大厦",
        "star": 4,
        "latitude": 30.247278149940843,
        "longitude": 120.16937160357745,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.2,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1734828.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1734828,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 388
            }
        ]
    },
    {
        "name": "杭州华辰银座酒店",
        "shortName": "华辰银座",
        "star": 4,
        "latitude": 30.27240601450273,
        "longitude": 120.19675064798946,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/443744.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 443744,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 307
            }
        ]
    },
    {
        "name": "杭州柏悦酒店",
        "shortName": "柏悦酒店",
        "star": 5,
        "latitude": 30.249739104132853,
        "longitude": 120.20270466452585,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/6066000.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 6066000,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 1325
            }
        ]
    },
    {
        "name": "杭州华辰国际饭店",
        "shortName": "华辰国际",
        "star": 4,
        "latitude": 30.250409878939546,
        "longitude": 120.1574704428562,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.2,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/436137.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 436137,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 339
            }
        ]
    },
    {
        "name": "杭州泛海钓鱼台酒店",
        "shortName": "泛海钓鱼台",
        "star": 5,
        "latitude": 30.235941271986675,
        "longitude": 120.20154898410944,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/5678956.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 5678956,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 1289
            }
        ]
    },
    {
        "name": "杭州维景国际大酒店",
        "shortName": "维景",
        "star": 5,
        "latitude": 30.25135172095066,
        "longitude": 120.15936417674013,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/375374.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 375374,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 450
            }
        ]
    },
    {
        "name": "杭州华辰凤庭大酒店",
        "shortName": "华辰凤庭",
        "star": 4,
        "latitude": 30.228356742885516,
        "longitude": 120.18373194222791,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/708088.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 708088,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 358
            }
        ]
    },
    {
        "name": "杭州领军君悦酒店公寓",
        "shortName": "领军君悦",
        "star": 4,
        "latitude": 30.247670433727777,
        "longitude": 120.20870964107586,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/2986577.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 2986577,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 458
            }
        ]
    },
    {
        "name": "杭州红星文化大酒店(原红星文化大厦)",
        "shortName": "红星文化",
        "star": 4,
        "latitude": 30.24065325845013,
        "longitude": 120.1678692008732,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/437838.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 437838,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 298
            }
        ]
    },
    {
        "name": "杭州五洋宾馆",
        "shortName": "五洋宾馆",
        "star": 4,
        "latitude": 30.255001958711052,
        "longitude": 120.1690708263492,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/441372.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 441372,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 398
            }
        ]
    },
    {
        "name": "杭州皇逸庭院酒店",
        "shortName": "杭州皇逸庭院",
        "star": 4,
        "latitude": 30.26152391620185,
        "longitude": 120.18945506266951,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.2,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/6107007.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 6107007,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 538
            }
        ]
    },
    {
        "name": "莫泰268(杭州西湖南宋御街步行街店)",
        "shortName": "莫泰268",
        "star": 2,
        "latitude": 30.241384665754534,
        "longitude": 120.15966553707253,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1461643.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1461643,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 125
            }
        ]
    },
    {
        "name": "杭州逸致酒店",
        "shortName": "逸致酒店",
        "star": 3,
        "latitude": 30.249725063693102,
        "longitude": 120.1931106123898,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/8140087.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 8140087,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 298
            }
        ]
    },
    {
        "name": "杭州圣瑞驰财富酒店",
        "shortName": "圣瑞驰财富",
        "star": 4,
        "latitude": 30.250060560503805,
        "longitude": 120.16013503692399,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/378511.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 378511,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 339
            }
        ]
    },
    {
        "name": "杭州耀鼎城市生活酒店",
        "shortName": "耀鼎城市",
        "star": 3,
        "latitude": 30.25638651554369,
        "longitude": 120.19274395220532,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.2,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/2934875.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 2934875,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 312
            }
        ]
    },
    {
        "name": "如家精选酒店(杭州西湖解放路店)",
        "shortName": "如家精选",
        "star": 3,
        "latitude": 30.246527768727066,
        "longitude": 120.16665545215646,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/4026151.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 4026151,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 247
            }
        ]
    },
    {
        "name": "宜必思酒店(杭州西湖南宋御街店)",
        "shortName": "宜必思",
        "star": 3,
        "latitude": 30.240616160534792,
        "longitude": 120.15930875854701,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/435380.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 435380,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 119
            }
        ]
    },
    {
        "name": "如家精选酒店(杭州钱江世纪新城杭海路店)",
        "shortName": "如家精选",
        "star": 3,
        "latitude": 30.25083756494324,
        "longitude": 120.19786732157542,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/5721244.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 5721244,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 263
            }
        ]
    },
    {
        "name": "怡莱酒店(杭州西湖湖滨店)",
        "shortName": "怡莱酒店",
        "star": 2,
        "latitude": 30.24729316877999,
        "longitude": 120.1579053602072,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/2330618.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 2330618,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 122
            }
        ]
    },
    {
        "name": "浙江紫晶大酒店",
        "shortName": "紫晶",
        "star": 4,
        "latitude": 30.254785792012694,
        "longitude": 120.18105876857003,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/441382.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 441382,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 289
            }
        ]
    },
    {
        "name": "杭州钱江世纪城希尔顿欢朋酒店",
        "shortName": "希尔顿欢朋",
        "star": 4,
        "latitude": 30.229909848772913,
        "longitude": 120.2442183916785,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/12135133.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 12135133,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 498
            }
        ]
    },
    {
        "name": "智颐尚品酒店(杭州钱江新城店)(原缤纷五洲尚品酒店)",
        "shortName": "智颐尚品",
        "star": 3,
        "latitude": 30.236888190864033,
        "longitude": 120.19424197248105,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.2,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1709962.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1709962,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 388
            }
        ]
    },
    {
        "name": "玺玥酒店·杭州火车东站店",
        "shortName": "玺玥·杭州火车东站店",
        "star": 3,
        "latitude": 30.285840269948917,
        "longitude": 120.19525385099602,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/5930676.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 5930676,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 136
            }
        ]
    },
    {
        "name": "杭州丽君酒店",
        "shortName": "丽君酒店",
        "star": 2,
        "latitude": 30.288936480223324,
        "longitude": 120.19737623946462,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1774197.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1774197,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 142
            }
        ]
    },
    {
        "name": "锦江之星品尚(杭州西湖延安路店)(原精品4s版延安路商业街店)",
        "shortName": "锦江之星品尚",
        "star": 3,
        "latitude": 30.26095698988412,
        "longitude": 120.15787899628565,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1740628.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1740628,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 259
            }
        ]
    },
    {
        "name": "久栖·杭州游子度假公寓(火车东站店)",
        "shortName": "游子酒店",
        "star": 3,
        "latitude": 30.288338685396432,
        "longitude": 120.19677671528385,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.2,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1470603.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1470603,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 128
            }
        ]
    },
    {
        "name": "如家精选酒店(杭州钱江新城汽车南站店)",
        "shortName": "如家精选",
        "star": 3,
        "latitude": 30.2341412827481,
        "longitude": 120.18083343138316,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/5860782.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 5860782,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 237
            }
        ]
    },
    {
        "name": "杭州雷迪森西子国际开缘颐颂酒店",
        "shortName": "开缘颐颂",
        "star": 2,
        "latitude": 30.25579277516527,
        "longitude": 120.19243146516656,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/2892674.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 2892674,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 320
            }
        ]
    },
    {
        "name": "五洋公馆(杭州河坊街火车城站店)",
        "shortName": "五洋公馆",
        "star": 3,
        "latitude": 30.23879093198602,
        "longitude": 120.16633365385155,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/890332.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 890332,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 158
            }
        ]
    },
    {
        "name": "如家(杭州西湖南宋御街定安路地铁站店)",
        "shortName": "如家快捷",
        "star": 2,
        "latitude": 30.24320889472091,
        "longitude": 120.15841445093854,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1441801.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1441801,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 86
            }
        ]
    },
    {
        "name": "杭州爵优花园酒店",
        "shortName": "爵优花园",
        "star": 2,
        "latitude": 30.23171153610571,
        "longitude": 120.18260510174623,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.2,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/5527908.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 5527908,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 211
            }
        ]
    },
    {
        "name": "杭州金苑宾馆",
        "shortName": "金苑宾馆",
        "star": 3,
        "latitude": 30.256014561394068,
        "longitude": 120.15850433793217,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/439847.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 439847,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 254
            }
        ]
    },
    {
        "name": "漫心酒店(杭州庆春路店)",
        "shortName": "漫心酒店",
        "star": 4,
        "latitude": 30.256368219803207,
        "longitude": 120.18459290411305,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1475978.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1475978,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 342
            }
        ]
    },
    {
        "name": "西湖柒号酒店式公寓(杭州河坊街店)",
        "shortName": "西湖柒号",
        "star": 2,
        "latitude": 30.241802363014372,
        "longitude": 120.16367984231647,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/840634.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 840634,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 219
            }
        ]
    },
    {
        "name": "领军酒店公寓(杭州悦玺店)",
        "shortName": "领军酒店",
        "star": 2,
        "latitude": 30.249332722000077,
        "longitude": 120.20318518825023,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/5175773.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 5175773,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 348
            }
        ]
    },
    {
        "name": "浙江大学圆正·艮秋宾馆",
        "shortName": "圆正·艮秋",
        "star": 2,
        "latitude": 30.27104219679323,
        "longitude": 120.18946089853436,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1630754.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1630754,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 146
            }
        ]
    },
    {
        "name": "如家(杭州火车东站西广场新风路店)",
        "shortName": "如家快捷",
        "star": 2,
        "latitude": 30.29344545596203,
        "longitude": 120.19070582379268,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/2313316.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 2313316,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 127
            }
        ]
    },
    {
        "name": "7天(杭州城站火车站店)",
        "shortName": "7天",
        "star": 2,
        "latitude": 30.236685118110973,
        "longitude": 120.16816384837166,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1640488.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1640488,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 104
            }
        ]
    },
    {
        "name": "杭州暖墅酒店",
        "shortName": "暖墅酒店",
        "star": 3,
        "latitude": 30.25672953088723,
        "longitude": 120.17394032703692,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.2,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1744136.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1744136,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 226
            }
        ]
    },
    {
        "name": "杭州凤栖大酒店",
        "shortName": "",
        "star": 3,
        "latitude": 30.259886277552102,
        "longitude": 120.17039201279061,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.2,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/6300295.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 6300295,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 199
            }
        ]
    },
    {
        "name": "如家(杭州西湖解放路佑圣观路店)",
        "shortName": "如家快捷",
        "star": 2,
        "latitude": 30.246508400770775,
        "longitude": 120.16348561802384,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1352761.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1352761,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 151
            }
        ]
    },
    {
        "name": "如家商旅酒店(杭州钱江新城天虹广场店)",
        "shortName": "如家商旅",
        "star": 2,
        "latitude": 30.259552110211843,
        "longitude": 120.20316573151126,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/6501449.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 6501449,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 199
            }
        ]
    },
    {
        "name": "如家(杭州火车东站闸弄口地铁站店)",
        "shortName": "如家快捷",
        "star": 2,
        "latitude": 30.281031999725023,
        "longitude": 120.1797308694146,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1390433.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1390433,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 151
            }
        ]
    },
    {
        "name": "全季酒店(杭州四季青凯旋路店)",
        "shortName": "全季酒店",
        "star": 3,
        "latitude": 30.24307391034651,
        "longitude": 120.17701736892869,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.2,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/5408326.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 5408326,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 339
            }
        ]
    },
    {
        "name": "汉庭(杭州西湖解放路店)",
        "shortName": "汉庭酒店",
        "star": 2,
        "latitude": 30.246173690576395,
        "longitude": 120.16042334465718,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/428266.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 428266,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 123
            }
        ]
    },
    {
        "name": "如家(杭州火车东站秋涛北路店)",
        "shortName": "如家快捷",
        "star": 2,
        "latitude": 30.271685257455474,
        "longitude": 120.18972034651489,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1569741.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1569741,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 132
            }
        ]
    },
    {
        "name": "如家(杭州西湖解放路建国路店)",
        "shortName": "如家快捷",
        "star": 2,
        "latitude": 30.245567527012042,
        "longitude": 120.16819018897854,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1441150.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1441150,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 180
            }
        ]
    },
    {
        "name": "游子酒店式公寓(杭州西湖东方金座店)",
        "shortName": "游子公寓",
        "star": 3,
        "latitude": 30.249867783842603,
        "longitude": 120.15847222995062,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/876549.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 876549,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 228
            }
        ]
    },
    {
        "name": "四季瑞丽精品酒店(杭州丝绸城店)",
        "shortName": "四季瑞丽",
        "star": 2,
        "latitude": 30.2609921228544,
        "longitude": 120.16410552797862,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1696163.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1696163,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 178
            }
        ]
    },
    {
        "name": "杭州巨化宾馆",
        "shortName": "巨化宾馆",
        "star": 3,
        "latitude": 30.2374888144205,
        "longitude": 120.1680438458073,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9.2,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/446045.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 446045,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 308
            }
        ]
    },
    {
        "name": "汉庭(杭州西湖大道新店)",
        "shortName": "汉庭酒店",
        "star": 2,
        "latitude": 30.241837089767106,
        "longitude": 120.16541862453569,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/2313594.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 2313594,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 143
            }
        ]
    },
    {
        "name": "南苑e家精选酒店(杭州庆春店)",
        "shortName": "南苑e家",
        "star": 2,
        "latitude": 30.253751433476264,
        "longitude": 120.17221779740808,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/433941.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 433941,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 269
            }
        ]
    },
    {
        "name": "杭州雷鲸大酒店",
        "shortName": "雷鲸",
        "star": 3,
        "latitude": 30.270783561584985,
        "longitude": 120.20207107889061,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.2,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/522060.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 522060,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 238
            }
        ]
    },
    {
        "name": "速8(杭州南宋御街店)",
        "shortName": "速8",
        "star": 2,
        "latitude": 30.24184609330825,
        "longitude": 120.15958226030642,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 7.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1343023.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1343023,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 88
            }
        ]
    },
    {
        "name": "7天(杭州清河坊步行街店)",
        "shortName": "7天",
        "star": 2,
        "latitude": 30.236098225865838,
        "longitude": 120.16408814843325,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1640377.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1640377,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 136
            }
        ]
    },
    {
        "name": "玫瑰传说精品酒店(杭州中河北路地铁站店)",
        "shortName": "玫瑰传说",
        "star": 2,
        "latitude": 30.261051671614734,
        "longitude": 120.16124124764575,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/437663.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 437663,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 146
            }
        ]
    },
    {
        "name": "杭州添泉酒店式公寓",
        "shortName": "杭州添泉",
        "star": 2,
        "latitude": 30.28882014448234,
        "longitude": 120.19713952906619,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/916788.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 916788,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 142
            }
        ]
    },
    {
        "name": "如家(杭州解放路庆春门大学路店)",
        "shortName": "如家快捷",
        "star": 2,
        "latitude": 30.252273250527452,
        "longitude": 120.1718955104322,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.2,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1086144.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1086144,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 123
            }
        ]
    },
    {
        "name": "杭州银苑大厦",
        "shortName": "银苑大厦",
        "star": 3,
        "latitude": 30.264035051080917,
        "longitude": 120.17194045605889,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1630062.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1630062,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 400
            }
        ]
    },
    {
        "name": "杭州苍灵公寓式酒店",
        "shortName": "苍灵公寓",
        "star": 2,
        "latitude": 30.288598296632564,
        "longitude": 120.19712830247653,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/1137316.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 1137316,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 121
            }
        ]
    },
    {
        "name": "海友酒店(杭州西湖大道店)",
        "shortName": "海友酒店",
        "star": 2,
        "latitude": 30.244327316751914,
        "longitude": 120.16251685622001,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.4,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/987319.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 987319,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 89
            }
        ]
    },
    {
        "name": "如家(杭州钱江新城景芳地铁站店)",
        "shortName": "如家快捷",
        "star": 2,
        "latitude": 30.263199923827578,
        "longitude": 120.19599455300879,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.6,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/3361389.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 3361389,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 203
            }
        ]
    },
    {
        "name": "如家(杭州火车城站清河坊古街店)",
        "shortName": "如家快捷",
        "star": 2,
        "latitude": 30.232725228997563,
        "longitude": 120.16590758163653,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 9,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/427887.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 427887,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 94
            }
        ]
    },
    {
        "name": "中兰酒店(杭州西湖店)",
        "shortName": "中兰酒���",
        "star": 2,
        "latitude": 30.249409882764684,
        "longitude": 120.16138444640896,
        "checkInDate": "2017-12-20",
        "checkOutDate": "2017-12-21",
        "commentScore": 8.8,
        "agents": [
            {
                "name": "ctrip",
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/6331655.html?daylater=3&days=1&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "hotelId": 6331655,
                    "checkInDate": "2017-12-20",
                    "checkOutDate": "2017-12-21",
                    "type": "domestic"
                },
                "price": 166
            }
        ]
    }
];