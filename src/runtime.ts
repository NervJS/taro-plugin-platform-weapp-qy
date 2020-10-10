import { mergeReconciler, mergeInternalComponents } from '@tarojs/shared'
import { components, initNativeApi, hostConfig } from '@tarojs/plugin-platform-weapp/dist/runtime-utils'
import { initQywxApi } from './apis'

hostConfig.initNativeApi = function (taro) {
  initNativeApi(taro)
  initQywxApi(taro)
}

mergeReconciler(hostConfig)
mergeInternalComponents(components)
