var chartData = require('./lego/chart.json')

module.exports = function (req, res, next) {
    try {
        chartData.data.compared = !!req.query.compareStartDate
        return chartData
    }
    catch (e) {
        return req.query
    }
}
