var url = require('url')
var path = require('path')

module.exports = function (req, res, next) {
    var urlStr = req.originalUrl
    var pathname = url.parse(urlStr).pathname
    var basename = path.parse(pathname).name
    var content = require('./' + basename)
    return content
}
