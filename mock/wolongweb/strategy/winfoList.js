/**
 * 获取策略关键词列表
 */
function item (id, params) {
    return {
        id: id,
        winfoId: id,
        word: '关键词' + id,
        wordName: '关键词' + id,
        bid: Math.random() * 100,
        strategyId: params.strategyId,
        planId: params.planId,
        unitId: params.unitId,
        planName: '计划名称',
        unitName: '单元名称',
        rate: +(0.18 * id).toFixed(2)
    }
}

module.exports = function (req, resp) {
    var list = Array(50)
    for (var i = list.length - 1; i >= 0; i--) {
        list[i] = item(i, req.query)
    }
    var result = {
        data: {
            queryCondition: {
                currentPage: 1,
                pageSize: 50,
                totalPage: 10,
                totalSize: 500
            },
            target: list
        },
        status: 0
    }

    return result
}

