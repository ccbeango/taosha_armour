/*
 * @Author       : ccbean
 * @Date         : 2022-10-14 21:46:51
 * @LastEditors  : ccbean
 * @LastEditTime : 2022-10-15 17:24:56
 * @Description  :
 */
export declare global {
  declare type RecordKey = string | number | symbol
  declare type Recordable<T = any> = Record<RecordKey, T>

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

  declare interface Fn<T = any, R = T> {
    (...args: T[]): R
  }
}
