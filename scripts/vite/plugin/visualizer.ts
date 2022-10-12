import type { PluginOption } from 'vite'
import visualizer from 'rollup-plugin-visualizer'

export default function configVisualizerPlugin(isReport) {
  if (!isReport) return false

  return visualizer({
    filename: './node_modules/.cache/visualizer/stats.html',
    title: 'Tao Sha Rollup Visualizer',
    open: true,
    // default treemap Which diagram type to use: sunburst, treemap, network, raw-data, list.
    template: 'sunburst',
    gzipSize: true,
    brotliSize: true
  }) as PluginOption
}
