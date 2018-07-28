module.exports = function (req, body) {
    var styleType = req.query.styleType
    console.log(req.query)
    return require(`${__dirname}/batchOpInfo/style_${styleType}.json`)
}
