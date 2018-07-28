/**
 * 获取策略报告
 */
function witem (id, params) {
    return {
        winfoId: id,
        keyword: '关键词' + id,
        strategyName: '策略名称' + id,
        strategyId: 11,
        planId: 111,
        planName: '计划名称',
        unitId: 222,
        unitName: '单元名称',
        maxRiseRate: +Math.random().toFixed(2),
        avgRiseRate: +Math.random().toFixed(2),
        biddingNum: +Math.random().toFixed(2),
        winCtr: id * 35 % 13,
        winShowNum: id * 35 % 11,
        winClickNum: id * 11 % 13,
        winConsume: id * 17,
        winAcp: Math.random().toFixed(2),
        winAvgRank: id % 4 + 1
    }
}

function item (id, params) {
    return {
        strategyName: '策略名称' + id,
        strategyId: id,
        maxRiseRate: +Math.random().toFixed(2),
        avgRiseRate: +Math.random().toFixed(2),
        biddingNum: +Math.random().toFixed(2),
        winCtr: id * 35 % 13,
        winShowNum: id * 35 % 11,
        winClickNum: id * 11 % 13,
        winConsume: id * 17,
        winAcp: Math.random().toFixed(2),
        winAvgRank: id % 4
    }
}

module.exports = function (req, resp) {
    var list = Array(20)
    var sid = req.query.strategyId
    for (var i = list.length - 1; i >= 0; i--) {
        list[i] = sid ? witem(i + 112, req.query) : item(i, req.query)
    }
    var result = {
        data: {
            recordPerPage: 20,
            reqPageIndex: 1,
            totalPage: 10,
            totalRecord: 1000,
            resultList: list
        },
        status: 'success'
    }
    return result
}
