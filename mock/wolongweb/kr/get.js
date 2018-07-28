var result = {
    'status': 0,
    'data': [{
        'word': '账低起域词价低户起域低',
        'pv': 489,
        'category': 0,
        'bid': 1.11,
        'matchType': 2,
        'competition': 51
    }],
    'message': null
}

module.exports = function (req) {
    var res = '个关键词低于起价将不能展现使用账户地域设置'
    var valueArr = []

    for (var i = 0; i < 1000; i++) {
        var cstr = ''
        var cvalue = {}
        for (var j = 10; j >= 0; j--) {
            cstr += res[Math.floor(Math.random() * 21)]
        }
        cvalue['word'] = cstr
        cvalue['pv'] = Math.floor(Math.random() * 20000)
        cvalue['category'] = Math.floor(Math.random() * 4)
        cvalue['bid'] = Math.floor(Math.random() * 1000)
        cvalue['matchType'] = Math.floor(Math.random() * 6)
        cvalue['competition'] = Math.floor(Math.random() * 9 + 2)
        if (cvalue['matchType'] > 2) {
            cvalue['matchType'] += 4
        }
        valueArr.push(cvalue)
    }
    result.data = valueArr
    return result
}
