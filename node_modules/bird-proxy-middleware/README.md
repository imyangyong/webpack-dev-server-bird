<h3 align="center" style="margin: 30px 0 35px;">bird-proxy-middleware</h3>
<p align="center">
  <a href="https://www.npmjs.com/package/bird-proxy-middleware"><img alt="npm" src="https://img.shields.io/npm/v/bird-proxy-middleware"></a>
  <a href="https://raw.githubusercontent.com/AngusYang9/bird-proxy-middleware/master/LICENSE"><img alt="NPM" src="https://img.shields.io/npm/l/shell-spawn"></a>
</p>

---

##### bird-proxy-middleware 内置了具有 cas 认证的代理服务器，并可以轻松地实现mock数据以及静态资源

# 快速上手

## 安装

```shell
npm install --save bird-proxy-middleware
```

推荐在你的项目中创建一个 `bird/` 文件夹, 并下载配置模板:

```shell
mkdir bird
git clone git@github.com:AngusYang9/bird-proxy-middleware-configs.git bird
```

其中, birdfile.js 为你的 bird 配置文件。

**模板中已标明详细的配置参数说明，download it !**

## 作为中间件使用

**注意!! 最好把bird放置在所有其他的中间件或request handler后面**

```
var bird = require('bird-proxy-middleware')

...

// 假设 app 是一个 express 服务器对象
app.all('*', bird('./bird/birdfile.js'))

...
```

**订制登录认证 plugin，请联系me🤝**
