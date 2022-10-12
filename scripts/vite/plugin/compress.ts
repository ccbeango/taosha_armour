import type { PluginOption } from 'vite'
import viteCompression from 'vite-plugin-compression'

export default function configCompressPlugin(
  isBuild: boolean,
  compress: 'gizp' | 'brotli' | 'none',
  deleteOriginFile = false
) {
  if (!isBuild) return false

  const compressList = compress.split(',')

  const plugins: PluginOption[] = []

  if (compressList.includes('gzip')) {
    plugins.push(
      viteCompression({
        ext: '.gz',
        deleteOriginFile
      })
    )
  }

  if (compressList.includes('brotli')) {
    plugins.push(
      viteCompression({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile
      })
    )
  }

  return plugins
}
