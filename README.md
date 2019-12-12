<div align="center">
  <a href="https://github.com/AngusYang9/webpack-dev-server-bird">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

<h1 align="center" style="margin: 30px 0 35px;">webpack-dev-server-bird</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/webpack-dev-server-bird"><img alt="npm" src="https://img.shields.io/npm/v/webpack-dev-server-bird"></a>
</p>

#### This package is for the application of [bird-proxy-middleware](https://www.npmjs.com/package/bird-proxy-middleware), which is set up on the basis of [webpack-dev-server](https://npmjs.com/package/webpack-dev-server)

## Getting Started

First thing's first, install the module:

```bash
npm install webpack-dev-server-bird --save-dev
```

## Usage

The configuration of using this package is consistent with that of `webpack-dev-server`. The only difference is that `bird-proxy-middleware` replaces the original proxy.

## Bird Proxy Configure

Suppose your project is built by vue-cli2.

**config/index.js**

```javascript
module.exports = {
  dev: {
    // ...other config
    birdfilePath: path.resolve(__dirname, '../bird/birdfile.js'), // absolute path ！！！
		// ...
  },
  // ...
}  
```

**build/webpack.dev.conf.js**

```javascript
devServer: {
  birdfilePath: config.dev.birdfilePath
}
```

**package.json**

```javascript
"scripts": {
  "dev": "webpack-dev-server-bird --inline  --config build/webpack.dev.conf.js",
   // ...
},
```

that's all.

Then use your [bird-proxy-middleware](https://www.npmjs.com/package/bird-proxy-middleware), and enjoy it 😸
