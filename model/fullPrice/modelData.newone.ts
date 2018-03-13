/*
 * @Author: Mr.He 
 * @Date: 2017-12-09 21:22:12 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-03-13 14:14:37
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
                    "price": 1500
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
            ]
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
        "name": "如家商旅酒店",
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
        "name": "如家快捷",
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
        "name": "全季酒店",
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
        "name": "汉庭",
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
        "name": "速8",
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
        "name": "7天",
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
    }
];