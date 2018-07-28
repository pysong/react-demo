module.exports = function (req, body) {
    var styleType = JSON.parse(req.query.context).bizParam.styletype || 0
    var data = require(`${__dirname}/listCustomized/style_${styleType}.json`)
    return data
}
