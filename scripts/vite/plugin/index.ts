import type { PluginOption } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import configMultiPagePlugin from './multiPage'

export default function createVitePlugins(viteEnv: ViteEnv) {
  const { VITE_REMOVE_CONSOLE } = viteEnv
  console.log(VITE_REMOVE_CONSOLE)

  const vitePlugins: PluginOption[] = [
    vue(),
    vueJsx(),
    AutoImport({
      dts: './types/auto-imports.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      dts: './types/components.d.ts',
      resolvers: [ElementPlusResolver()]
    })
  ]

  vitePlugins.push(configMultiPagePlugin())

  return vitePlugins
}
