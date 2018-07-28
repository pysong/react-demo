var data = require('./lego/report.json')
var fanghua = require('./lego/fanghua')

module.exports = function (req, res, next) {
    try {
        data.data.queryCondition.currentPage = req.query.reqPageIndex
        if (req.query.level > 4) {
            data = fanghua
        }
        if (req.query.isSummary) {
            data.data.q = 1
            data.data.target.reportInfo.summary = {
                timeStr: '2017-04-28~2017-04-30',
                showNum: Math.floor(Math.random() * 100),
                clickNum: '1',
                consume: '1',
                clickRatio: Math.floor(Math.random() * 100) + '%',
                acp: Math.floor(Math.random() * 100),
                rank: Math.floor(Math.random() * 100)
            }
        }
        return data
    }
    catch (e) {
        return req.query
    }
}
