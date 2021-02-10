import QYWX from './program'
import type { IPluginContext } from '@tarojs/service'

export default (ctx: IPluginContext) => {
  ctx.registerPlatform({
    name: 'qywx',
    useConfigName: 'mini',
    async fn ({ config }) {
      const program = new QYWX(ctx, config)
      await program.start()
    }
  })
}
