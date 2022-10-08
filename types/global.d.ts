export declare global {
  declare type Recordable<T = any> = Record<string, T>

  declare interface ViteEnv {
    VITE_PORT: number
    VITE_REMOVE_CONSOLE: boolean
    VITE_PROXY: [string, string][]
  }
}
