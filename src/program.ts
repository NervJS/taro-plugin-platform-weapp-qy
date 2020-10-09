import { Weapp } from '@tarojs/plugin-platform-weapp'

export default class QYWX extends Weapp {
  platform = 'qywx'
  runtimePath = `@tarojs/plugin-platform-weapp-qy/dist/runtime`
}
