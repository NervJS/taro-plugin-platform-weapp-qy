import { needPromiseApis } from './apis-list'

declare const wx: any

function processApis (taro) {
  taro.qy = {}

  Object.keys(wx.qy).forEach(key => {
    if (needPromiseApis.has(key)) {
      taro.qy[key] = (options, ...args) => {
        options = options || {}
        const obj = Object.assign({}, options)
        if (typeof options === 'string') {
          if (args.length) {
            return wx.qy[key](options, ...args)
          }
          return wx.qy[key](options)
        }

        return new Promise((resolve, reject) => {
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
      }
    } else {
      const target = wx.qy[key]
      if (typeof target === 'function') {
        taro.qy[key] = (...args) => target.apply(wx.qy, args)
      } else {
        taro.qy[key] = target
      }
    }
  })
}


export function initQywxApi (taro) {
  processApis(taro)
}
