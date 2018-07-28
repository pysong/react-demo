
var data = {
    'status': 0,
    'data': {
        'queryCondition': {
            'ascend': true,
            'totalSize': 319016,
            'pageSize': 20,
            'currentPage': 1,
            'totalPage': 15951,
            'firstResult': 0,
            'isQueryAll': false
        },
        'list': [
            {
                'day': 20170630,
                'hour': -1,
                'userid': 1061,
                'userName': '携程旅行网',
                'clickNum': 0,
                'showNum': 2,
                'consume': 0,
                'rank': '0',
                'clickRatio': '0%',
                'acp': '0',
                'planId': 0,
                'unitId': 0,
                'ideaId': 6662399,
                'winfoId': 43064664,
                'planName': '<div>dsfdf111</div>',
                'unitName': '<b>安顺航班</b>',
                'keyword': '<b>安顺航班</b>',
                'query': '安顺航班',
                'styleType': -1,
                'content': '<div>dsfdf</div>',
                'queryState': 'IsKeyword',
                'timeStr': '2017-06-27~2017-07-03'
            }
        ]
    },
    'success': true
}

const meta = {
    'day': 20170703,
    'hour': -1,
    'userid': 1061,
    'userName': '携程旅行网',
    'clickNum': 0,
    'showNum': 2,
    'consume': 0,
    'rank': '0',
    'clickRatio': '0%',
    'acp': '0',
    'planId': 0,
    'unitId': 0,
    'ideaId': 6662480,
    'winfoId': 43070535,
    'planName': '<b>安顺航班11</b>',
    'unitName': '<b>安顺航班22</b>',
    'keyword': '<b>安顺航班33</b>',
    'query': '飞机票查询.com',
    'styleType': -1,
    'content': 'unknown',
    'queryState': 'Valid',
    'timeStr': '2017-06-27~2017-07-03'
}

module.exports = function () {
    data.data.list = new Array(20).fill(meta)
        .map((item, idx) => {
            return Object.assign({}, item, {
                ideaId: +Math.random(32),
                unitId: 10000 + idx,
                planId: 100 + idx % 7
            })
        })
    return data
}
