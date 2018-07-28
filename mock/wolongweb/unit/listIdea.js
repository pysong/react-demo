module.exports = function (req, resp) {
    var unitId = req.query.unitId
    var list = Array(20).fill(1).map((i, idx) => {
        var id = idx * 100000 + Math.floor(Math.random() * 10000)
        var idea = Array.from('高级创意标题').sort(
            x => {
                return Math.random() > 0.5 ? 1 : -1
            }
        ).join('')
        return {
            id: id,
            unitId,
            name: idea + id
        }
    })
    return {
        data: list,
        status: 0
    }
}
