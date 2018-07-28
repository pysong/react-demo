

module.exports = function (req, res, next) {
    var cData = {
        "status": 0,
        "data": {
            "userId": 1061,
            "imeiNo": "123456789012345",
            "idfaNo": "123456789012345678901234567890qw",
            "liveStartTime": 1513757227000,
            "liveStartTimeStr": "2017-12-28 14:09:20",
            "frequency": 3
        },
        "success": true
    }
    cData.data.frequency = 2
    return cData
}
