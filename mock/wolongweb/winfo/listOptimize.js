var data = {
    'data': {
        'queryCondition': {
            'totalPage': 12,
            'totalSize': 99
        },
        'target': []
    },
    'status': 0
}
/**
 * 深度克隆
 * @param  {[Object]} originObj [克隆源对象]
 * @return {[Object]}           [克隆对象]
 */
function deepClone (originObj) {
    if (typeof originObj != 'object') {
        return originObj
    }
    var targetObj = {}
    for (var i in originObj) {
        targetObj[i] = deepClone(originObj[i])
    }
    return targetObj
}
module.exports = function (req, res, next) {
    var cData = {
        'showWord': '我是关键词',
        'id': 11112,
        'status': 11111,
        'planName': '我是计划',
        'planId': '',
        'unitName': '我是单元',
        'unitId': 22222,
        'bid': 0.01,
        'minPrice': 0.2,
        'lostView': 1000,
        'lostClick': 200
    }

    var pageSize = req.query.pageSize || 10
    var page = req.query.page || 1
    for (var i = 1; i < pageSize; i++) {
        var citem = deepClone(cData)
        citem.id = Date.now() + i
        citem.planName = '我是第' + page + '的计划'
        citem.unitName = '我是第' + page + '的单元'
        if (req.query.frontState != undefined) {
            citem.status = req.query.frontState
        } else {
            var ta = [7, 2, 1, 0]
            citem.status = ta[Math.floor(Math.random() * 4)]
        }

        data.data.target.push(citem)
    }
    return data
}
