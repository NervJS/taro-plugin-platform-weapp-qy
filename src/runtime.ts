import { mergeReconciler, mergeInternalComponents } from '@tarojs/shared'
import { components, initNativeApi } from '@tarojs/plugin-platform-weapp/dist/runtime-utils'
import { initQywxApi } from './apis'

export const hostConfig = {
  initNativeApi: function (taro) {
    initNativeApi(taro)
    initQywxApi(taro)
  }
}

mergeReconciler(hostConfig)
mergeInternalComponents(components)
