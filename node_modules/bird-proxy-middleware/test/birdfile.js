var fs = require('fs')

// ==================Nodejs 热更新============================
// 有些时候, 我们在一个大的团队里做协作, 而 birdfile 由于会被作为本地的配置文件被忽略掉,
// 我们需要有一些公共的部分可以作为大家都可以很方便引用的设置
// 同时, 我们也需要能够在这些公共文件被修改的时候, 也能动态刷新bird的总体配置,
// 所以, 可以使用 birdDynamicRequire 来代替 原生的 nodejs 的 require
// tips: 你可以创建自己的 server 配置脚本
var devServer = birdDynamicRequire('./servers/default-server')

// -------------------- config-----------------------
var birdConfig = {
    // bird 服务的名称
    name: 'My App',
    
    // bird 端口，默认8899
    // port: 9999,
    
    // 静态资源
    staticFileRootDirPath: './static',
    
    // mock资源
    mockRoot: './mock',
    
    // middleware 的话, bird会return一个中间件函数, 默认为false
    // 注意: 这个设置无法进行动态更改
    middleware: true,
    
    // 默认的文件夹入口, 即如果访问的是文件夹, 且本设置为非空, 则尝试返回该文件夹下的同名文件
    // 默认为 index.html
    defaultIndex: 'index.html',
    
    // 是否打印出debug信息
    debug: true,
    
    // 是否打印xhr data
    // showXhrData: false,
    useServer: 'devServer',
    
    // 所有预设的 servers
    servers: {
        devServer: devServer
    },

    // 接口路由转发，详情见相应配置文件
    routes: [],
}

// ----------------------- ROUTES ----------------------
// ==================Nodejs 热更新============================
var routes = birdDynamicRequireModuleFolder('./modules')
routes.map(function(config) {
    birdConfig.routes = birdConfig.routes.concat(config)
})

module.exports = birdConfig
