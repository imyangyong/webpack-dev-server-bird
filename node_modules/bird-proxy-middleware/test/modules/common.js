/**
 * @file 统一转发文件
 */
module.exports = [
    // 统一做的转发, 根据相应需求修改
    {test: '/success', static: 'success/index.html'},
    {test: '/failure', mock: 'common/failure'},
  
    // 不推荐存在其他server，这样首次调用该server相关接口为未登录状态，需二次调用
    {test: '/configure/api', replace: '', server: 'https://www.90paw.com:8081'},
];
