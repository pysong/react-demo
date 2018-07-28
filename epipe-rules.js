/**
 * @file CPC前端代理配置
 *
 * @author Liandong Liu (liandong.lld@alibaba-inc.com)
 */

/**
 * 指定规则集名称
 *
 * @type {string}
 */
exports.name = 'cpc'

/**
 * 指定代理端口
 *
 * @type {number}
 */
exports.proxyPort = 8189

// http:///
exports.remote = {
    ajaxPath: '127.0.0.1:9090'
}

var hostMap = {
    '42.120.168.65': 1,
    '42.120.168.74': 1,
    '42.120.168.71': 1,
    'ad-test1.sm.cn': 1,
    'ad-test2.sm.cn': 1,
    'ad-test3.sm.cn': 1,
    'ad-test4.sm.cn': 1,
    'ad-pre.sm.cn': 1,
    'ad-qatest1.sm.cn': 1,
    'ad-qatest2.sm.cn': 1,
    'ad-qatest3.sm.cn': 1,
    'e.sm.cn': 1
}

/**
 * 请求劫持方法
 * - 再正式请求处理前执行
 * - 监听请求信息
 * - 修改请求内容或参数
 * - 指定请求处理方法
 *
 * @param {Request} req 请求对象
 */
exports.request = function (req) {
    var query = req.query
    req.handler = 'proxy'
    if (hostMap[query.host] && !query.path.match(/(\/wolongweb|\/qingluan|\/mc-web|message\/web\/|\/fs|\/cas|console|\.json)/)
    ) {
        exports.staticRequest(req)
        req.handler = 'proxy'
    }
}

/**
 * 静态资源请求
 *
 * @param {Request} req 请求对象
 */
exports.staticRequest = function (req) {
    var query = req.query
    process.debugType = true

    // 如果进入的是phoenix模块
    if (process.debugType) {
        req.url = req.url.replace('proxy/', 'static/').replace(query.host, '127.0.0.1:9090')
        console.log('[static][%s]', req.url)
    }

    // 需要重新解析为修改后的URL
    req.query = query = require('url').parse(req.url)
}

/**
 * 动态资源请求
 *
 * @param {Request} req 请求对象
 */
exports.ajaxRequest = function (req) {
    req.query = require('url').parse(req.url)
}
