/**
 * 获取策略列表
 */

function item (id, params) {
    return {
        id: id,
        name: '策略' + id,
        rate: (0.1 * id).toFixed(1),
        winfoNum: Math.floor(Math.random() * 100),
        status: id % 2,
        rank: id % 3
    }
}

module.exports = function (req, resp) {
    var list = Array(20)
    for (var i = list.length - 1; i >= 0; i--) {
        list[i] = item(i, req.query)
    }
    var result = {
        data: list,
        status: 0
    }
    return result
}
