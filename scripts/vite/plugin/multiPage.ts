import MpaPlugin from 'vite-plugin-mpa-plus'
import type { Rewrite, Pages } from 'vite-plugin-mpa-plus'

export default function configMultiPagePlugin() {
  return MpaPlugin({
    pages: {
      main: {
        entry: 'src/apps/main/main.ts',
        filename: 'index.html',
        template: 'src/apps/main/index.html',
        inject: {
          data: {
            title: 'mpa-app1',
            injectScript: `<script type="module" src="/test.js"></script>`
          }
        }
      },
      hello: {
        entry: 'src/apps/hello/main.ts',
        filename: 'hello.html',
        template: 'src/apps/hello/index.html',
        inject: {
          data: {
            title: 'mpa-app2',
            injectScript: `<script type="module" src="/test.js"></script>`
          }
        }
      }
    }
    // historyApiFallback: {
    //   rewrites: [
    //     {
    //       from: `/view-main`,
    //       to: `main.html`
    //     }
    //   ]
    // }
  })
}
