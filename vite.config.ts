import { fileURLToPath, URL } from 'url'
import dayjs from 'dayjs'
import { loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'

import { wrapperEnv } from './scripts/utils'
import { createProxy, createVitePlugins } from './scripts/vite'

import pkg from './package.json'

function pathResolve(dir: string) {
  return fileURLToPath(new URL(dir, import.meta.url))
}

const __APP_INFO__ = {
  pkg: {
    name: pkg.name,
    version: pkg.version,
    desc: pkg.description,
    dependencies: pkg.dependencies,
    devDependencies: pkg.devDependencies
  },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  const viteEnv = wrapperEnv(env)
  const {
    VITE_PORT,
    VITE_PROXY,
    VITE_REMOVE_CONSOLE,
    VITE_PUBLIC_PATH,
    VITE_SOURCE_MAP
  } = viteEnv

  return {
    root,
    base: VITE_PUBLIC_PATH,
    plugins: createVitePlugins(viteEnv),
    resolve: {
      alias: {
        '@': pathResolve('./src/apps/index'),
        '#': pathResolve('./types')
      }
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    server: {
      https: true,
      host: true,
      port: VITE_PORT,
      // 加载 .env.development 中的proxy配置
      proxy: createProxy(VITE_PROXY)
    },
    esbuild: {
      sourcemap: mode === 'development' ?? VITE_SOURCE_MAP,
      pure: VITE_REMOVE_CONSOLE ? ['console.log', 'debugger'] : []
    }
  }
}
