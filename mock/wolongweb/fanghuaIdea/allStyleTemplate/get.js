module.exports = function (req, body) {
    var styleType = req.query.styleType
    return require(`${__dirname}/AllStyleTemplate/l${styleType}.json`)
}
