const pkg = require('../package.json')

if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[34mThis repository(${pkg.name}) requires using pnpm as the package manager` +
      ` for scripts to work properly.\u001b[39m\n`
  )
  console.warn(
    `\u001b[34mDon\`t use npm or yarn.\u001b[39m \u001b[32mPlease run \u001b[1mpnpm install\u001b[39m\n`
  )
  process.exit(1)
}
