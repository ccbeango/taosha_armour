/// <reference types="vite/client" />

export declare module 'vue' {
  interface ComponentCustomProperties {
    $filters: {
      formatTime(val: string): string
    }
  }
}
