module.exports = {
  // forward ip or domain
  server: 'https://90paw.com',
  
  // 使用 plugin, 可以指定一个插件, 自动取cookie
  // 如果没有给定任何的auth plugin, 则用默认的 default,
  // default 主要就是把cookie设置项写到头部去
  plugin: 'default',
  
  // 使用 cookie。若设置了 plugin 为非 default，那么cookie项无效
  // cookie: 'dxhy_sso_sessionid=1009399919712141312_f5c136f1d491467083cea3504e314aa2',
  
  // 应用的用户名
  useUser: 'user1',
  
  // 用户&密码列表
  users: {
    user1: '123456',
    user2: '12345678',
  },
  
  // 如果更改这个 reloginSeq, bird 会刷新缓存的cookie信息, 重新做登陆
  // 这种配置, 在很多开发的场景中非常有用
  reloginSeq: 0,
  
  // 预设retry filename或者函数回调 (statusCode, rawBody) => {}，用来检测判定cookie是否失效需要重新登陆获取，返回true会重新登录
  // retryMethod: 'returnCode11001',
  // retryMethod: function( statuseCode, rawBody ) {
  //      return statusCode == '302'
  // }
};
