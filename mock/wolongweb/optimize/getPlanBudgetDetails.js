var data = {
    'data': [],
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
        'planName': '我是计划名字',
        'planId': 1212121,
        'offLineTime': '下线时间',
        'lossShow': 2000,
        'budget': -1,
        'expectedOffLineTime': 9898,
        'showNum': 1000,
        'clickNum': 222,
        'consume': 333,
        'clickRatio': 444,
        'frontState': '1'
    }
    var pageSize = req.query.pageSize || 10
    for (var i = 1; i < pageSize; i++) {
        var citem = deepClone(cData)
        citem.budget = Math.floor(Math.random() * 5)
        citem.frontState = Math.floor(Math.random() * 5)
        citem.expectedOffLineTime = new Date(Date.now() + (Math.random() * 999999999)).toLocaleDateString()
        citem.offLineTime = new Date(Date.now() + (Math.random() * 999999999)).toLocaleString()
        data.data.push(citem)
    }
    return data
}
