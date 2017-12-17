/*
 * @Author: Mr.He 
 * @Date: 2017-12-09 21:22:12 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2017-12-17 12:23:24
 * @content 提供全价数据服务. */


export let testTraffic = [
    {
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
    },
    {
        "originPlace": "CT_179",
        "originStation": {
            "code": "HGH",
            "port": "T3"
        },
        "destination": "CT_075",
        "destinationStation": {
            "code": "CTU",
            "port": "T1"
        },
        "No": "3U8315",
        "carry": "川航",
        "departDateTime": "2017-12-21T22:00:00.000Z",
        "arrivalDateTime": "2017-12-22T01:50:00.000Z",
        "type": 1,
        "duration": 230,
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
                    "bname": "T1"
                },
                "deptDateTime": "2017-12-21T22:00:00.000Z",
                "arriDateTime": "2017-12-22T01:50:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "320",
                    "name": "空客"
                },
                "base": {
                    "flgno": "3U8315",
                    "aircode": "3U",
                    "airsname": "川航",
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
                    "flgno": "3U8315",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 2,
                        "price": 40
                    }
                ]
            }
        ]
    },
    {
        "originPlace": "CT_179",
        "originStation": {
            "code": "HGH",
            "port": "T1"
        },
        "destination": "CT_075",
        "destinationStation": {
            "code": "CTU",
            "port": "T2"
        },
        "No": "CA1741",
        "carry": "国航",
        "departDateTime": "2017-12-21T23:40:00.000Z",
        "arrivalDateTime": "2017-12-22T02:50:00.000Z",
        "type": 1,
        "duration": 190,
        "segs": [
            {
                "deptAirport": {
                    "name": "萧山",
                    "city": "杭州",
                    "code": "HGH",
                    "bname": "T1"
                },
                "arriAirport": {
                    "name": "双流",
                    "city": "成都",
                    "code": "CTU",
                    "bname": "T2"
                },
                "deptDateTime": "2017-12-21T23:40:00.000Z",
                "arriDateTime": "2017-12-22T02:50:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "321",
                    "name": "空客"
                },
                "base": {
                    "flgno": "CA1741",
                    "aircode": "CA",
                    "airsname": "国航",
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
                    "flgno": "CA1741",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 2,
                        "price": 230
                    }
                ]
            }
        ]
    },
    {
        "originPlace": "CT_179",
        "originStation": {
            "code": "HGH",
            "port": "T1"
        },
        "destination": "CT_075",
        "destinationStation": {
            "code": "CTU",
            "port": "T2"
        },
        "No": "CA4534",
        "carry": "国航",
        "departDateTime": "2017-12-22T14:00:00.000Z",
        "arrivalDateTime": "2017-12-22T17:15:00.000Z",
        "type": 1,
        "duration": 195,
        "segs": [
            {
                "deptAirport": {
                    "name": "萧山",
                    "city": "杭州",
                    "code": "HGH",
                    "bname": "T1"
                },
                "arriAirport": {
                    "name": "双流",
                    "city": "成都",
                    "code": "CTU",
                    "bname": "T2"
                },
                "deptDateTime": "2017-12-22T14:00:00.000Z",
                "arriDateTime": "2017-12-22T17:15:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "321",
                    "name": "空客"
                },
                "base": {
                    "flgno": "CA4534",
                    "aircode": "CA",
                    "airsname": "国航",
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
                    "flgno": "CA4534",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 2,
                        "price": 230
                    }
                ]
            }
        ]
    },
    {
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
        "No": "MF8423",
        "carry": "厦航",
        "departDateTime": "2017-12-22T00:15:00.000Z",
        "arrivalDateTime": "2017-12-22T03:25:00.000Z",
        "type": 1,
        "duration": 190,
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
                "deptDateTime": "2017-12-22T00:15:00.000Z",
                "arriDateTime": "2017-12-22T03:25:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "738",
                    "name": "波音"
                },
                "base": {
                    "flgno": "MF8423",
                    "aircode": "MF",
                    "airsname": "厦航",
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
                    "flgno": "MF8423",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 2,
                        "price": 80
                    }
                ]
            }
        ]
    },
    {
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
        "No": "EU2206",
        "carry": "成都航",
        "departDateTime": "2017-12-22T10:55:00.000Z",
        "arrivalDateTime": "2017-12-22T15:55:00.000Z",
        "type": 1,
        "duration": 300,
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
                "deptDateTime": "2017-12-22T10:55:00.000Z",
                "arriDateTime": "2017-12-22T15:55:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "320",
                    "name": "空客"
                },
                "base": {
                    "flgno": "EU2206",
                    "aircode": "EU",
                    "airsname": "成都航",
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
                    "flgno": "EU2206",
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
    },
    {
        "originPlace": "CT_179",
        "originStation": {
            "code": "HGH",
            "port": "T3"
        },
        "destination": "CT_075",
        "destinationStation": {
            "code": "CTU",
            "port": "T1"
        },
        "No": "3U8992",
        "carry": "川航",
        "departDateTime": "2017-12-22T02:45:00.000Z",
        "arrivalDateTime": "2017-12-22T05:55:00.000Z",
        "type": 1,
        "duration": 190,
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
                    "bname": "T1"
                },
                "deptDateTime": "2017-12-22T02:45:00.000Z",
                "arriDateTime": "2017-12-22T05:55:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "321",
                    "name": "空客"
                },
                "base": {
                    "flgno": "3U8992",
                    "aircode": "3U",
                    "airsname": "川航",
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
                    "flgno": "3U8992",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 2,
                        "price": 30
                    }
                ]
            }
        ]
    },
    {
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
        "No": "JD361",
        "carry": "首航",
        "departDateTime": "2017-12-22T13:00:00.000Z",
        "arrivalDateTime": "2017-12-22T16:05:00.000Z",
        "type": 1,
        "duration": 185,
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
                "deptDateTime": "2017-12-22T13:00:00.000Z",
                "arriDateTime": "2017-12-22T16:05:00.000Z",
                "craft": {
                    "kind": "大",
                    "series": "33B",
                    "name": "空客"
                },
                "base": {
                    "flgno": "JD361",
                    "aircode": "JD",
                    "airsname": "首航",
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
                    "flgno": "JD361",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 2,
                        "price": 30
                    }
                ]
            }
        ]
    },
    {
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
        "No": "JD361",
        "carry": "首航",
        "departDateTime": "2017-12-22T13:00:00.000Z",
        "arrivalDateTime": "2017-12-22T16:05:00.000Z",
        "type": 1,
        "duration": 185,
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
                "deptDateTime": "2017-12-22T13:00:00.000Z",
                "arriDateTime": "2017-12-22T16:05:00.000Z",
                "craft": {
                    "kind": "大",
                    "series": "33B",
                    "name": "空客"
                },
                "base": {
                    "flgno": "JD361",
                    "aircode": "JD",
                    "airsname": "首航",
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
                    "flgno": "JD361",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 4,
                        "price": 250
                    }
                ]
            }
        ]
    },
    {
        "originPlace": "CT_179",
        "originStation": {
            "code": "HGH",
            "port": "T1"
        },
        "destination": "CT_075",
        "destinationStation": {
            "code": "CTU",
            "port": "T2"
        },
        "No": "TV9812",
        "carry": "西藏航",
        "departDateTime": "2017-12-22T12:55:00.000Z",
        "arrivalDateTime": "2017-12-22T16:05:00.000Z",
        "type": 1,
        "duration": 190,
        "segs": [
            {
                "deptAirport": {
                    "name": "萧山",
                    "city": "杭州",
                    "code": "HGH",
                    "bname": "T1"
                },
                "arriAirport": {
                    "name": "双流",
                    "city": "成都",
                    "code": "CTU",
                    "bname": "T2"
                },
                "deptDateTime": "2017-12-22T12:55:00.000Z",
                "arriDateTime": "2017-12-22T16:05:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "319",
                    "name": "空客"
                },
                "base": {
                    "flgno": "TV9812",
                    "aircode": "TV",
                    "airsname": "西藏航",
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
                    "flgno": "TV9812",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 2,
                        "price": 39
                    }
                ]
            }
        ]
    },
    {
        "originPlace": "CT_179",
        "originStation": {
            "code": "HGH",
            "port": "T1"
        },
        "destination": "CT_075",
        "destinationStation": {
            "code": "CTU",
            "port": "T2"
        },
        "No": "TV9812",
        "carry": "西藏航",
        "departDateTime": "2017-12-22T12:55:00.000Z",
        "arrivalDateTime": "2017-12-22T16:05:00.000Z",
        "type": 1,
        "duration": 190,
        "segs": [
            {
                "deptAirport": {
                    "name": "萧山",
                    "city": "杭州",
                    "code": "HGH",
                    "bname": "T1"
                },
                "arriAirport": {
                    "name": "双流",
                    "city": "成都",
                    "code": "CTU",
                    "bname": "T2"
                },
                "deptDateTime": "2017-12-22T12:55:00.000Z",
                "arriDateTime": "2017-12-22T16:05:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "319",
                    "name": "空客"
                },
                "base": {
                    "flgno": "TV9812",
                    "aircode": "TV",
                    "airsname": "西藏航",
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
                    "flgno": "TV9812",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 4,
                        "price": 740
                    }
                ]
            }
        ]
    },
    {
        "originPlace": "CT_179",
        "originStation": {
            "code": "HGH",
            "port": "T1"
        },
        "destination": "CT_075",
        "destinationStation": {
            "code": "CTU",
            "port": "T2"
        },
        "No": "SC9812",
        "carry": "山航",
        "departDateTime": "2017-12-22T12:55:00.000Z",
        "arrivalDateTime": "2017-12-22T16:05:00.000Z",
        "type": 1,
        "duration": 190,
        "segs": [
            {
                "deptAirport": {
                    "name": "萧山",
                    "city": "杭州",
                    "code": "HGH",
                    "bname": "T1"
                },
                "arriAirport": {
                    "name": "双流",
                    "city": "成都",
                    "code": "CTU",
                    "bname": "T2"
                },
                "deptDateTime": "2017-12-22T12:55:00.000Z",
                "arriDateTime": "2017-12-22T16:05:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "319",
                    "name": "空客"
                },
                "base": {
                    "flgno": "SC9812",
                    "aircode": "SC",
                    "airsname": "山航",
                    "ishared": true
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
                    "flgno": "SC9812",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 2,
                        "price": 64
                    }
                ]
            }
        ]
    },
    {
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
        "No": "NS8423",
        "carry": "河北航",
        "departDateTime": "2017-12-22T00:15:00.000Z",
        "arrivalDateTime": "2017-12-22T03:25:00.000Z",
        "type": 1,
        "duration": 190,
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
                "deptDateTime": "2017-12-22T00:15:00.000Z",
                "arriDateTime": "2017-12-22T03:25:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "738",
                    "name": "波音"
                },
                "base": {
                    "flgno": "NS8423",
                    "aircode": "NS",
                    "airsname": "河北航",
                    "ishared": true
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
                    "flgno": "NS8423",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 2,
                        "price": 81
                    }
                ]
            }
        ]
    },
    {
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
        "No": "MU5500",
        "carry": "东航",
        "departDateTime": "2017-12-22T04:45:00.000Z",
        "arrivalDateTime": "2017-12-22T07:55:00.000Z",
        "type": 1,
        "duration": 190,
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
                "deptDateTime": "2017-12-22T04:45:00.000Z",
                "arriDateTime": "2017-12-22T07:55:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "320",
                    "name": "空客"
                },
                "base": {
                    "flgno": "MU5500",
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
                    "flgno": "MU5500",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 2,
                        "price": 30
                    }
                ]
            }
        ]
    },
    {
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
        "No": "MU5496",
        "carry": "东航",
        "departDateTime": "2017-12-22T11:55:00.000Z",
        "arrivalDateTime": "2017-12-22T15:20:00.000Z",
        "type": 1,
        "duration": 205,
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
                "deptDateTime": "2017-12-22T11:55:00.000Z",
                "arriDateTime": "2017-12-22T15:20:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "320",
                    "name": "空客"
                },
                "base": {
                    "flgno": "MU5496",
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
                    "flgno": "MU5496",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 2,
                        "price": 30
                    }
                ]
            }
        ]
    },
    {
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
        "No": "MU5496",
        "carry": "东航",
        "departDateTime": "2017-12-22T11:55:00.000Z",
        "arrivalDateTime": "2017-12-22T15:20:00.000Z",
        "type": 1,
        "duration": 205,
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
                "deptDateTime": "2017-12-22T11:55:00.000Z",
                "arriDateTime": "2017-12-22T15:20:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "320",
                    "name": "空客"
                },
                "base": {
                    "flgno": "MU5496",
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
                    "flgno": "MU5496",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 4,
                        "price": 080
                    }
                ]
            }
        ]
    },
    {
        "originPlace": "CT_179",
        "originStation": {
            "code": "HGH",
            "port": "T1"
        },
        "destination": "CT_075",
        "destinationStation": {
            "code": "CTU",
            "port": "T2"
        },
        "No": "TV6271",
        "carry": "西藏航",
        "departDateTime": "2017-12-21T23:40:00.000Z",
        "arrivalDateTime": "2017-12-22T02:50:00.000Z",
        "type": 1,
        "duration": 190,
        "segs": [
            {
                "deptAirport": {
                    "name": "萧山",
                    "city": "杭州",
                    "code": "HGH",
                    "bname": "T1"
                },
                "arriAirport": {
                    "name": "双流",
                    "city": "成都",
                    "code": "CTU",
                    "bname": "T2"
                },
                "deptDateTime": "2017-12-21T23:40:00.000Z",
                "arriDateTime": "2017-12-22T02:50:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "321",
                    "name": "空客"
                },
                "base": {
                    "flgno": "TV6271",
                    "aircode": "TV",
                    "airsname": "西藏航",
                    "ishared": true
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
                    "flgno": "TV6271",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 2,
                        "price": 60
                    }
                ]
            }
        ]
    },
    {
        "originPlace": "CT_179",
        "originStation": {
            "code": "HGH",
            "port": "T1"
        },
        "destination": "CT_075",
        "destinationStation": {
            "code": "CTU",
            "port": "T2"
        },
        "No": "TV6271",
        "carry": "西藏航",
        "departDateTime": "2017-12-21T23:40:00.000Z",
        "arrivalDateTime": "2017-12-22T02:50:00.000Z",
        "type": 1,
        "duration": 190,
        "segs": [
            {
                "deptAirport": {
                    "name": "萧山",
                    "city": "杭州",
                    "code": "HGH",
                    "bname": "T1"
                },
                "arriAirport": {
                    "name": "双流",
                    "city": "成都",
                    "code": "CTU",
                    "bname": "T2"
                },
                "deptDateTime": "2017-12-21T23:40:00.000Z",
                "arriDateTime": "2017-12-22T02:50:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "321",
                    "name": "空客"
                },
                "base": {
                    "flgno": "TV6271",
                    "aircode": "TV",
                    "airsname": "西藏航",
                    "ishared": true
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
                    "flgno": "TV6271",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 3,
                        "price": 120
                    }
                ]
            }
        ]
    },
    {
        "originPlace": "CT_179",
        "originStation": {
            "code": "HGH",
            "port": "T1"
        },
        "destination": "CT_075",
        "destinationStation": {
            "code": "CTU",
            "port": "T2"
        },
        "No": "ZH3912",
        "carry": "深航",
        "departDateTime": "2017-12-22T12:55:00.000Z",
        "arrivalDateTime": "2017-12-22T16:05:00.000Z",
        "type": 1,
        "duration": 190,
        "segs": [
            {
                "deptAirport": {
                    "name": "萧山",
                    "city": "杭州",
                    "code": "HGH",
                    "bname": "T1"
                },
                "arriAirport": {
                    "name": "双流",
                    "city": "成都",
                    "code": "CTU",
                    "bname": "T2"
                },
                "deptDateTime": "2017-12-22T12:55:00.000Z",
                "arriDateTime": "2017-12-22T16:05:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "319",
                    "name": "空客"
                },
                "base": {
                    "flgno": "ZH3912",
                    "aircode": "ZH",
                    "airsname": "深航",
                    "ishared": true
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
                    "flgno": "ZH3912",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 2,
                        "price": 60
                    }
                ]
            }
        ]
    },
    {
        "originPlace": "CT_179",
        "originStation": {
            "code": "HGH",
            "port": "T1"
        },
        "destination": "CT_075",
        "destinationStation": {
            "code": "CTU",
            "port": "T2"
        },
        "No": "CA3918",
        "carry": "国航",
        "departDateTime": "2017-12-22T12:55:00.000Z",
        "arrivalDateTime": "2017-12-22T16:05:00.000Z",
        "type": 1,
        "duration": 190,
        "segs": [
            {
                "deptAirport": {
                    "name": "萧山",
                    "city": "杭州",
                    "code": "HGH",
                    "bname": "T1"
                },
                "arriAirport": {
                    "name": "双流",
                    "city": "成都",
                    "code": "CTU",
                    "bname": "T2"
                },
                "deptDateTime": "2017-12-22T12:55:00.000Z",
                "arriDateTime": "2017-12-22T16:05:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "319",
                    "name": "空客"
                },
                "base": {
                    "flgno": "CA3918",
                    "aircode": "CA",
                    "airsname": "国航",
                    "ishared": true
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
                    "flgno": "CA3918",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 2,
                        "price": 60
                    }
                ]
            }
        ]
    },
    {
        "originPlace": "CT_179",
        "originStation": {
            "code": "HGH",
            "port": "T1"
        },
        "destination": "CT_075",
        "destinationStation": {
            "code": "CTU",
            "port": "T2"
        },
        "No": "TV6456",
        "carry": "西藏航",
        "departDateTime": "2017-12-22T14:00:00.000Z",
        "arrivalDateTime": "2017-12-22T17:15:00.000Z",
        "type": 1,
        "duration": 195,
        "segs": [
            {
                "deptAirport": {
                    "name": "萧山",
                    "city": "杭州",
                    "code": "HGH",
                    "bname": "T1"
                },
                "arriAirport": {
                    "name": "双流",
                    "city": "成都",
                    "code": "CTU",
                    "bname": "T2"
                },
                "deptDateTime": "2017-12-22T14:00:00.000Z",
                "arriDateTime": "2017-12-22T17:15:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "321",
                    "name": "空客"
                },
                "base": {
                    "flgno": "TV6456",
                    "aircode": "TV",
                    "airsname": "西藏航",
                    "ishared": true
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
                    "flgno": "TV6456",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 2,
                        "price": 60
                    }
                ]
            }
        ]
    },
    {
        "originPlace": "CT_179",
        "originStation": {
            "code": "HGH",
            "port": "T1"
        },
        "destination": "CT_075",
        "destinationStation": {
            "code": "CTU",
            "port": "T2"
        },
        "No": "TV6456",
        "carry": "西藏航",
        "departDateTime": "2017-12-22T14:00:00.000Z",
        "arrivalDateTime": "2017-12-22T17:15:00.000Z",
        "type": 1,
        "duration": 195,
        "segs": [
            {
                "deptAirport": {
                    "name": "萧山",
                    "city": "杭州",
                    "code": "HGH",
                    "bname": "T1"
                },
                "arriAirport": {
                    "name": "双流",
                    "city": "成都",
                    "code": "CTU",
                    "bname": "T2"
                },
                "deptDateTime": "2017-12-22T14:00:00.000Z",
                "arriDateTime": "2017-12-22T17:15:00.000Z",
                "craft": {
                    "kind": "中",
                    "series": "321",
                    "name": "空客"
                },
                "base": {
                    "flgno": "TV6456",
                    "aircode": "TV",
                    "airsname": "西藏航",
                    "ishared": true
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
                    "flgno": "TV6456",
                    "type": "domestic"
                },
                "cabins": [
                    {
                        "name": 3,
                        "price": 120
                    }
                ]
            }
        ]
    }
];


export let testHotel = [

    {
        "name": "如家(杭州火车城站清河坊古街店)",
        "star": 2,
        "agents": [
            {
                "name": "ctrip",
                "price": 46,
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/427887.html?daylater=6&days=2&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "type": "domestic",
                    "hotelId": 427887,
                    "checkInDate": "2017-12-22",
                    "checkOutDate": "2017-12-24"
                }
            }
        ],
        "latitude": 30.23891997309516,
        "longitude": 120.1720017209336,
        "shortName": "如家快捷",
        "checkInDate": "2017-12-22",
        "checkOutDate": "2017-12-24",
        "commentScore": 9
    },
    {
        "name": "中兰酒店(杭州西湖店)",
        "star": 2,
        "agents": [
            {
                "name": "ctrip",
                "price": 38,
                "bookUrl": "http://m.ctrip.com/webapp/hotel/hoteldetail/6331655.html?daylater=6&days=2&contrl=0&pay=0&latlon=#fromList",
                "deeplinkData": {
                    "type": "domestic",
                    "hotelId": 6331655,
                    "checkInDate": "2017-12-22",
                    "checkOutDate": "2017-12-24"
                }
            }
        ],
        "latitude": 30.249409882764684,
        "longitude": 120.16138444640896,
        "shortName": "中兰酒店",
        "checkInDate": "2017-12-22",
        "checkOutDate": "2017-12-24",
        "commentScore": 8.8
    }
];
