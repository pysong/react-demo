var originData = {
    'winfoId': 10104136808,
    'word': '爷爷和1',
    'planId': 100110406,
    'planName': '我是计划',
    'unitId': 404857663,
    'unitName': '我是单元',
    'rank': 1,
    'wmatch': 1,
    'showq': 4,
    'bid': 12,
    'show': 100,
    'click': 200,
    'consume': 300
}
originData = {
    'userId': 1061,
    'showNum': 0,
    'clickNum': 0,
    'convertNum': 0,
    'consume': 0,
    'clickRatio': '0.00%',
    'cpc': '0.00',
    'convertRatio': 0,
    'planId': 100660797,
    'planName': '航班_哪里到哪里国际机票_phrase',
    'isPaused': 0,
    'reviewState': 0,
    'frontState': 7,
    'isPromotionAbnormal': false,
    'unitId': 438704067,
    'unitName': '莫斯科出发国际机票_phrase',
    'planIsDelete': 0,
    'unitIsDelete': 0,
    'winfoId': 11280175345,
    'showWord': '莫斯科直飞武汉航班时刻',
    'wmatch': 1,
    'bid': 0.45,
    'url': 'http://m.sm.com/html5/Flight/international/round-moscow-wuhan-mow-wuh-all/?relddate=7&rdays=5&sepopup=5&sourceid=1768&sID=466047&allianceID=18887&utm_source=sm&utm_medium=cpc&utm_campaign=sm1768',
    'showq': 4,
    'rank': '-',
    'keyWinfo': false,
    'id': 11280175345,
    'level': 4
}
var queryCondition = {
    'ascend': false,
    'totalSize': 4248,
    'pageSize': 50,
    'currentPage': 1,
    'totalPage': 213,
    'firstResult': 0,
    'isQueryAll': false
}
var statusArr = [7, 2, 1, 0]
module.exports = function (req, resq) {
    var data = {
        data: {
            queryCondition: queryCondition,
            target: []
        },
        status: 0
    }
    var res = '个关键词低于起价将不能展现使用账户地域设置个关键词低于起价将不能展现使用账户地域设置个关键词低于起价将不能展现使用账户地域设置个关键词低于起价将不能展现使用账户地域设置个关键词低于起价将不能展现使用账户地域设置个关键词低于起价将不能展现使用账户地域设置个关键词低于起价将不能展现使用账户地域设置个关键词低于起价将不能展现使用账户地域设置个关键词低于起价将不能展现使用账户地域设置个关键词低于起价将不能展现使用账户地域设置'
    var pid = req.query.parentId || 9999
    var curstr = JSON.stringify(originData)
    for (var i = 0; i < 50; i++) {
        var cnum = Number.parseInt(Math.random() * 100)
        var curObj = JSON.parse(curstr)
        var cstr = ''
        for (var j = 6; j >= 0; j--) {
            cstr += res[Math.floor((pid) % 100 / 100 * 21) + j + i]
        }
        curObj.showWord = cstr
        curObj.winfoId = pid + i
        curObj.rank = cnum % 8 + 1
        curObj.bid = cnum % 8 + 0.5
        curObj.show = cnum % 8 + 10
        curObj.clickNum = cnum * cnum + 21
        curObj.consume = cnum % 8 + 31
        curObj.keyWinfo = i % 2
        curObj.frontState = statusArr[i % 4]
        curObj.wmatch = cnum % 3
        data.data.target.push(curObj)
    }
    return data
}
