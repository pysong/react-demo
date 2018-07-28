module.exports = function (req, resp) {
    var result = {}
    result[req.query.startDate || '2016-09-09'] = {
        userId: req.query.uid,
        biddingNum: 100,
        winShowNum: 30,
        avgRiseRate: '23.45%'
    }
    return {
        data: result,
        status: 0
    }
}
