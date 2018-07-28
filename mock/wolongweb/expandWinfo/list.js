var ordata = {
    'showWord': 'word-x',
    'pv': 10000,
    'bid': 1.8,
    'wmatch': 1,
    'planId': 133100670,
    'planName': '医院-中医-地址-[46]1',
    'unitId': 9761,
    'unitName': '元--院医话单-京电北9761',
    'isAdd': false
}
var originData = {
    'status': 0,
    'data': {
        queryCondition: {
            currentPage: 1,
            pageSize: 100,
            totalSize: 1000
        },
        target: []
    },
    'success': true
}

module.exports = function (req, res) {
    var data = originData
    for (var i = 0; i < 100; i++) {
        var cObj = JSON.parse(JSON.stringify(ordata))
        cObj.rank = i + 1
        data.data.target.push(cObj)
    }
    return data
}
