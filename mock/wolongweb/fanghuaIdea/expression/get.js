module.exports = function (req, body) {
    var styleType = req.query.styleType
    return require(`${__dirname}/expression/style_${styleType}.json`)
}
