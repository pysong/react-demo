module.exports = function (req, resp) {
    var isOk = Math.random() > 0.9
    return {
        status: 0,
        data: isOk
    }
}