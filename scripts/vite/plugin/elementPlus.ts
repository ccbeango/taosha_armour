import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function configElementPlusPlugin() {
  return [
    AutoImport({
      dts: './types/auto-imports.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      dts: './types/components.d.ts',
      resolvers: [ElementPlusResolver()]
    })
  ]
}
