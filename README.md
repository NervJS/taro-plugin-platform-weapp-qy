# `@tarojs/plugin-platform-weapp-qy`

Taro 插件。用于支持编译为企业微信小程序。

## 使用

#### 1. 配置插件

```js
// Taro 项目配置
module.exports = {
  // ...
  plugins: [
    '@tarojs/plugin-platform-weapp-qy'
  ]
}
```

#### 2. 编译为企业微信小程序

```shell
taro build --type qywx
taro build --type qywx --watch
```

#### 其它

##### 平台判断

```js
if (process.TARO_ENV === 'qywx') {
  // ...
}
```

##### API

企业微信小程序拓展了一些独有 API，可以通过 `Taro.qy.xxx` 来调用，如：

```js
Taro.qy.openUserProfile()
  .then(res => console.log(res))
```
