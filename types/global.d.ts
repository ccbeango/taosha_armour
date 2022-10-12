export declare global {
  declare type Recordable<T = any> = Record<string, T>

  declare interface ViteEnv {
    VITE_REMOVE_CONSOLE: boolean
    VITE_PUBLIC_PATH: string
    VITE_SOURCE_MAP: boolean
    VITE_PROXY: [string, string][]
    VITE_PORT: number
    VITE_BUILD_COMPRESS: 'gizp' | 'brotli' | 'none'
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
    VITE_USE_IMAGEMIN: boolean
    VITE_VISUALIZER_REPORT: boolean
  }
}
