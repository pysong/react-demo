/**
 * Created by hanzh on 2017/3/14.
 */
var ordata = {
    'showNum': 1,
    'clickNum': 0,
    'convertNum': 0,
    'consume': 0,
    'clickRatio': '0.00%',
    'cpc': '0',
    'convertRatio': 0,
    'planId': 22551,
    'isPromotionAbnormal': false,
    'unitId': 1906801,
    'bid': 1.8,
    'showq': 0,
    'rank': '20',
    'keyWinfo': false,
    'ding': false,
    'level': 4
}
var rankFields = ['showNum', 'clickNum', 'convertNum', 'bid', 'showq']
var originData = {
    'status': 0,
    'data': [],
    'success': true
}

module.exports = function (req, res) {
    var data = originData
    if (Math.floor(Math.random() * 2)) {
        for (var i = 0; i < 4; i++) {
            var cObj = JSON.parse(JSON.stringify(ordata))
            cObj.rank = i + 1
            if (i === 3) {
                cObj.rank = 99
            }
            rankFields.forEach(function (item) {
                cObj[item] = Number.parseInt(Math.random() * 100)
            })
            data.data.push(cObj)
        }
    }
    return data
}
