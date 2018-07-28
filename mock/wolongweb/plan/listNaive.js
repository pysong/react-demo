var planList = require('./planList')
var unitList = require('./unitList')

var trunk = {
    'data': planList,
    'status': 0
}

// 这里进行假数据的转发和注册
module.exports = function (req, res, next) {
    try {
        var data = null

        if (+req.query.level === 3) {
            data = unitList(req, res)
        }
        else if (req.query.level == 2) {
            var trunkData = []
            if (req.query.qword) {
                trunkData = planList.filter(function (item) {
                    return item.name.indexOf(req.query.qword) > -1
                })
            }
            else {
                trunkData = planList
            }
            trunk.data = trunkData
            data = trunk
        }
        else {
            data = trunk
        }

        return data
    }
    catch (e) {
        return {message: e.message}
    }
}
