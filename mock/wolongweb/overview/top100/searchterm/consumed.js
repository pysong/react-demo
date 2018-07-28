var data = 
{
    "status": 0,
    "data": {
        "radioConsume": "100%",
        "totalMoney": 256192.37,
        "list": [],
        "charts": [
            {
                "index": 1,
                "curTime": "2017-06-06",
                "curConsume": 365008,
                "preTime": 0 ,
                "preConsume": 0
            },
            {
                "index": 1,
                "curTime": "2017-06-06",
                "curConsume": 365018,
                "preTime": 0 ,
                "preConsume": 0
            },
            {
                "index": 1,
                "curTime": "2017-06-06",
                "curConsume": 365001,
                "preTime": 0 ,
                "preConsume": 0
            },
            {
                "index": 1,
                "curTime": "2017-06-06",
                "curConsume": 650018,
                "preTime": 0 ,
                "preConsume": 0
            },
            {
                "index": 1,
                "curTime": "2017-06-06",
                "curConsume": 360018,
                "preTime": 0 ,
                "preConsume": 0
            },
            {
                "index": 1,
                "curTime": "2017-06-06",
                "curConsume": 350018,
                "preTime": 0 ,
                "preConsume": 0
            },
            {
                "index": 1,
                "curTime": "2017-06-06",
                "curConsume": 365018,
                "preTime": 0 ,
                "preConsume": 0
            },
            {
                "index": 1,
                "curTime": "2017-06-06",
                "curConsume": 3650018,
                "preTime": 0 ,
                "preConsume": 0
            },
            {
                "index": 1,
                "curTime": "2017-06-06",
                "curConsume": 3650018,
                "preTime": 0 ,
                "preConsume": 0
            },
            {
                "index": 1,
                "curTime": "2017-06-06",
                "curConsume": 365018,
                "preTime": 0 ,
                "preConsume": 0
            }
        ]
    },
    "success": true
}

var item = {
    "timeRange": "",
    "day": 20170606,
    "hour": -1,
    "userid": 1061,
    "userName": "携程旅行网",
    "clickNum": 0,
    "showNum": 1,
    "consume": 0,
    "rank": "0",
    "clickRatio": "0%",
    "acp": "0",
    "planId": 0,
    "unitId": 0,
    "ideaId": 50000000125256115,
    "winfoId": 11279403178,
    "query": "ac026上海至温哥华航班动态ac026上海至温哥华航班动态ac026上海至温哥华航班动态",
    "styleType": 0,
    "guessULike": true
}

module.exports = function () {
    data.data.list = new Array(10).fill(item)
    return data
}
