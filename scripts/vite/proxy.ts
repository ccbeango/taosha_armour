import type { ProxyOptions } from 'vite'

type ProxyList = [string, string][]

type ProxyTargetList = Recordable<ProxyOptions>

const httpsRE = /^https:\/\//

/**
 * 创建vite proxy代理
 * - VITE_PROXY = [["/taosha-api","http://localhost:9527"],["/mock-api","http://localhost:9528"]]
 */
export default function createProxy(list: ProxyList) {
  const ret: ProxyTargetList = {}

  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target)

    ret[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: path => path.replace(new RegExp(`^${prefix}`), ''),
      // https 需设置 secure = false
      ...(isHttps ? { secure: false } : {})
    }
  }

  return ret
}
