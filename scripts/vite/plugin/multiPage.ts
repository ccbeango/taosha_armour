/*
 * @Author       : liuyinghao
 * @Date         : 2022-10-09 15:38:10
 * @LastEditors  : liuyinghao
 * @LastEditTime : 2022-10-17 17:12:03
 * @Description  :
 */
import MpaPlugin from 'vite-plugin-mpa-plus'
import type { Rewrite, Pages } from 'vite-plugin-mpa-plus'
import fs from 'fs'

export default function configMultiPagePlugin() {
  const entrys = fs.readdirSync('src/apps')
  const rewrites: Rewrite[] = []
  const pages = entrys.reduce<Pages>((res, pageName) => {
    res[pageName] = {
      entry: `src/apps/${pageName}/main.ts`,
      filename: `pages/${pageName}.html`,
      template: `src/apps/${pageName}/index.html`,
      inject: {
        data: {
          title: 'mpa-app1',
          injectScript: `
            <script type="module" src="/test.js"></script>
          `
        }
      }
    }

    rewrites.push({
      from: new RegExp(`^/${pageName}$`),
      to: `/pages/${pageName}.html`
    })

    return res
  }, {})

  return MpaPlugin({
    pages
    // historyApiFallback: {
    //   rewrites
    // }
  })

  // return MpaPlugin({
  //   entry: `src/apps/index/main.ts`,
  //   // template: `src/apps/index/index.html`,
  //   inject: {
  //     data: {
  //       title: 'mpa-app1',
  //       injectScript: `
  //         <script type="module" src="/test.js"></script>
  //       `
  //     }
  //   }
  // })
}
