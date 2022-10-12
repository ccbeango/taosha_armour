import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://github.com/vbenjs/vite-plugin-svg-icons
export default function configSvgIconsPlugin(isBuild: boolean) {
  return createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/common/assets/icons')],
    svgoOptions: isBuild,
    inject: 'body-last',
    symbolId: 'icon-[dir]-[name]'
  })
}
