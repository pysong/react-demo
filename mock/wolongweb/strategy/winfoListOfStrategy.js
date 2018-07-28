/**
 * 获取关键词列表
 */

function item (id, params, od) {
    var unitId = 133100670
    var planId = 133100564
    var cid = unitId
    if (params.planId && params.unitId) {
        planId = params.planId
        unitId = params.unitId
        cid = unitId + '' + id
    } else if (params.planId) {
        planId = params.planId
        unitId = planId + '' + od
        cid = unitId + '' + id
    } else if (params.unitId) {
        planId = params.unitId + '' + id
        unitId = params.unitId
        cid = planId + '' + id
    }

    return {
        winfoId: cid,
        word: '关键词' + id,
        planId: planId || 133100670,
        unitId: unitId || 133100564,
        planName: '计划名称',
        unitName: '单元名称' + od
    }
}

/**
 * query.planId 请求计划中关键词
 * query.unitId 请求单元中关键词
 */
module.exports = function (req, resp) {
    var list = Array(100)

    for (var i = list.length - 1; i >= 0; i--) {
        list[i] = item(i, req.query, Math.ceil(i / 10))
    }
    var result = {
        data: list,
        status: 0
    }
    return result
}
