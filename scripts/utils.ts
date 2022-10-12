/**
 * 将环境变量配置文件 .env.* 中的变量解析为实际值
 */
export function wrapperEnv(envConf: Recordable) {
  const confRes: any = {}

  for (const envName of Object.keys(envConf)) {
    let realVal = envConf[envName].replace(/\\n/g, '\n') // 允许换行符
    realVal = realVal === 'true' ? true : realVal === 'false' ? false : realVal

    if (envName === 'VITE_PORT') {
      realVal = Number(realVal)
    }

    if (envName === 'VITE_PROXY') {
      try {
        realVal = JSON.parse(realVal.replace(/'/g, '"'))
      } catch (error) {
        realVal = ''
      }
    }

    confRes[envName] = realVal
    if (typeof realVal === 'string') {
      process.env[envName] = realVal
    } else if (typeof realVal === 'object') {
      process.env[envName] = JSON.stringify(realVal)
    }
  }

  return confRes
}
