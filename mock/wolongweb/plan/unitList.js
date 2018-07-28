module.exports = function (req, resp) {
    var parentId = req.query.parentId
    var list = Array(20).fill(1).map((i, idx) => {
        var id = parentId * 1000 + idx
        var unit = Array.from('医院-单元-电话-北京').sort(
            x => {
                return Math.random() > 0.5 ? 1 : -1
            }
        ).join('')
        return {
            id: id,
            planId: parentId,
            level: 3,
            ideaCount: 10,
            commonIdeaCount: id % 4,
            winfoCount: 4,
            name: unit + id
        }
    })
    return {
        data: list,
        status: 0
    }
}
