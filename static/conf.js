var path = require('path')
exports.mockRoot = path.resolve(__dirname, './mock')
exports.port = 9090

var staticDir = __dirname

exports.tasks = {
    remove (ctx, name) {
        return {
            status: 0,
            message: 'success',
            data: 'http://e.sm.cn'
        }
    },
    webTask (ctx, name) {
        if (ctx.path.match(/(modify|remove|delete|add|batchCopy)/)) {
            return {
                data: 133100671,
                status: 0,
                tip: '操作成功'
            }
        }
        if (ctx.path.match(/\/wolongweb\/report\S+\/(create|download)/)) {
            return {
                status: 0,
                data: 'http://ad-qatest2.sm.cn/wolongweb/reportFile/download?uid=1061&reportId=40285',
                success: true
            }
        }
        const path = ctx.path.replace('/web/', '/').replace('/main/', '/')
        return '.' + path
    }
}

exports.static = {
    direction: staticDir,
    extensions: ['html', 'js', 'css']
}

exports.plugins = {
    less: {
        handler: function () {
            return async (ctx, next) => {
                await next()
                if (ctx.request.path.match(/\.less$/)) {
                    // 设置response的Content-Type:
                    ctx.response.type = 'text/css'
                    // 设置response的内容:
                    ctx.response.body = 'body{color: red}'
                }
            }
        }
    }
}

exports.mapping = {
    remove: [
        '**/remove',
        '**/delete',
        '**/batchAdd',
        '**/update*',
        '**/*Update',
        '**/*Remove',
        '*/recovery',
        '*/suspend',
        '*/skip*',
        '**/livetools/create'
    ],
    webTask: [
        '/wolongweb/(.*)',
        '/message/(.*)',
        '*'
    ]
}
