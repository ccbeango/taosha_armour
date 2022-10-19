/*
 * @Author       : liuyinghao
 * @Date         : 2022-10-19 14:40:22
 * @LastEditors  : ccbean
 * @LastEditTime : 2022-10-19 19:55:46
 * @Description  :
 */
import { createMpaPlugin } from 'vite-plugin-virtual-mpa'
import type { MpaOptions } from 'vite-plugin-virtual-mpa'
import fs from 'fs'
// import { normalizePath } from 'vite'

type PageOption = MpaOptions<string, string, string, string>['pages']

const indexAppName = 'index'

export default function configMpaPlugin() {
  const entrys = fs.readdirSync('src/apps')

  const pages = entrys.reduce<PageOption>((res, pageName) => {
    res.push({
      name: pageName,
      entry: `/src/apps/${pageName}/main.ts`,
      filename:
        pageName === indexAppName
          ? `${pageName}.html`
          : `pages/${pageName}.html`,
      data: {
        title: 'mpa-app1',
        injectScript: `
            <script type="module" src="/test.js"></script>
          `
      }
    })

    return res
  }, [])

  return createMpaPlugin({
    verbose: false,
    template: 'public/index.html',
    pages
    // rewrites: [
    //   {
    //     from: new RegExp(normalizePath(`/(index|hello)`)),
    //     to: ctx => {
    //       return normalizePath(`/pages/${ctx.match[1]}.html`)
    //     }
    //   }
    // ]
  })
}
