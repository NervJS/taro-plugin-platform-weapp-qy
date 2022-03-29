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

## Typings

开发者在 `global.d.ts` 中加入 `/// <reference path="node_modules/@tarojs/plugin-platform-weapp-qy/types/shims-qy.d.ts" />` 即可获得类型提示。

例子：

```
/// <reference path="node_modules/@tarojs/plugin-platform-weapp-qy/types/shims-qy.d.ts" />
/// <reference path="node_modules/@tarojs/taro/types/index.d.ts" />

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
  }
}
```

## License

MIT License

Copyright (c) O2Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.