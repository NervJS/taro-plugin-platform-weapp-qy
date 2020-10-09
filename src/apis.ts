import { noPromiseApis, otherApis } from './apis-list'

declare const wx: any

function processApis (taro) {
  taro.qy = {}
  const apis = [...noPromiseApis, ...otherApis]

  apis.forEach(key => {
    if (!(key in wx.qy)) {
      taro.qy[key] = () => {
        console.warn(`企业微信小程序暂不支持 ${key}`)
      }
      return
    }

    if (otherApis.has(key)) {
      taro.qy[key] = (options, ...args) => {
        options = options || {}
        const obj = Object.assign({}, options)
        if (typeof options === 'string') {
          if (args.length) {
            return wx.qy[key](options, ...args)
          }
          return wx.qy[key](options)
        }

        const p: any = new Promise((resolve, reject) => {
          ['fail', 'success', 'complete'].forEach((k) => {
            obj[k] = (res) => {
              options[k] && options[k](res)
              if (k === 'success') {
                resolve(res)
              } else if (k === 'fail') {
                reject(res)
              }
            }
          })
          if (args.length) {
            wx.qy[key](obj, ...args)
          } else {
            wx.qy[key](obj)
          }
        })
        return p
      }
    } else {
      taro.qy[key] = (...args) => wx.qy[key].apply(wx, args)
    }
  })
}


export function initQywxApi (taro) {
  processApis(taro)
  taro.qy.version = wx.qy.version
  taro.qy.isWxLoginSupport = wx.qy.isWxLoginSupport
}
