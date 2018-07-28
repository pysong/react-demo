var data = require('./lego/summary.json')

module.exports = function (req, res, next) {
    try {
        if (req.query.compareStartData) {
            data.data.compare = true
        }
        data.data.q = 1
        return data
    }
    catch (e) {
        console.log(e)
        return req.query
    }
}
