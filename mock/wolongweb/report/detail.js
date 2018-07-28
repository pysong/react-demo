var data = require('./lego/report.json')
var fanghua = require('./lego/fanghua')

module.exports = function (req, res, next) {
    try {
        data.data.queryCondition.currentPage = req.query.reqPageIndex
        if (req.query.compareStartData) {
            data.data.compare = true
        }
        if (req.query.level > 4) {
            data = fanghua
        }
        return data
    }
    catch (e) {
        console.log(e)
        return req.query
    }
}
