import type { PluginOption } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import configElementPlusPlugin from './elementPlus'
import configMultiPagePlugin from './multiPage'
import configCompressPlugin from './compress'
import configSvgIconsPlugin from './svgIcons'
import configVisualizerPlugin from './visualizer'
import configImageminPlugin from './imagemin'

export default function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
    VITE_USE_IMAGEMIN,
    VITE_VISUALIZER_REPORT
  } = viteEnv

  const vitePlugins: PluginOption[] = [
    /* 通用配置 */
    vue(),
    vueJsx(),
    // ElementPlus
    configElementPlusPlugin(),
    // 多页面支持
    configMultiPagePlugin(),
    // SVG Sprites
    configSvgIconsPlugin(isBuild),

    /* 生产环境配置 */
    // 构建代码压缩
    configCompressPlugin(
      isBuild,
      VITE_BUILD_COMPRESS,
      VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
    ),
    // 图片压缩
    configImageminPlugin(isBuild && VITE_USE_IMAGEMIN),
    // 可视化bundle报告
    configVisualizerPlugin(isBuild && VITE_VISUALIZER_REPORT)
  ]

  return vitePlugins
}
