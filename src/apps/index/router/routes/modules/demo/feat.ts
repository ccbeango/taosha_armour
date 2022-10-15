import type { AppRouteModule } from '@index/router/types'

import { getParentLayout, LAYOUT } from '@index//router/constant'
import { t } from '@index//router/utils'

const feat: AppRouteModule = {
  path: '/feat',
  name: 'FeatDemo',
  component: LAYOUT,
  redirect: '/feat/icon',
  meta: {
    orderNo: 19,
    icon: 'ion:git-compare-outline',
    title: t('routes.demo.feat.feat')
  },

  children: [
    {
      path: 'icon',
      name: 'IconDemo',
      component: () => import('@index/views/demo/feat/icon/index.vue'),
      meta: {
        title: t('routes.demo.feat.icon')
      }
    },
    {
      path: 'ws',
      name: 'WebSocket',
      component: () => import('@index/views/demo/feat/ws/index.vue'),
      meta: {
        title: t('routes.demo.feat.ws')
      }
    },
    {
      path: 'request',
      name: 'RequestDemo',
      // @ts-ignore
      component: () => import('@index/views/demo/feat/request-demo/index.vue'),
      meta: {
        title: t('routes.demo.feat.requestDemo')
      }
    },
    {
      path: 'session-timeout',
      name: 'SessionTimeout',
      component: () =>
        import('@index/views/demo/feat/session-timeout/index.vue'),
      meta: {
        title: t('routes.demo.feat.sessionTimeout')
      }
    },
    {
      path: 'print',
      name: 'Print',
      component: () => import('@index/views/demo/feat/print/index.vue'),
      meta: {
        title: t('routes.demo.feat.print')
      }
    },
    {
      path: 'tabs',
      name: 'TabsDemo',
      component: () => import('@index/views/demo/feat/tabs/index.vue'),
      meta: {
        title: t('routes.demo.feat.tabs'),
        hideChildrenInMenu: true
      },
      children: [
        {
          path: 'detail/:id',
          name: 'TabDetail',
          component: () => import('@index/views/demo/feat/tabs/TabDetail.vue'),
          meta: {
            currentActiveMenu: '/feat/tabs',
            title: t('routes.demo.feat.tabDetail'),
            hideMenu: true,
            dynamicLevel: 3,
            realPath: '/feat/tabs/detail'
          }
        }
      ]
    },
    {
      path: 'breadcrumb',
      name: 'BreadcrumbDemo',
      redirect: '/feat/breadcrumb/flat',
      component: getParentLayout('BreadcrumbDemo'),
      meta: {
        title: t('routes.demo.feat.breadcrumb')
      },

      children: [
        {
          path: 'flat',
          name: 'BreadcrumbFlatDemo',
          component: () =>
            import('@index/views/demo/feat/breadcrumb/FlatList.vue'),
          meta: {
            title: t('routes.demo.feat.breadcrumbFlat')
          }
        },
        {
          path: 'flatDetail',
          name: 'BreadcrumbFlatDetailDemo',
          component: () =>
            import('@index/views/demo/feat/breadcrumb/FlatListDetail.vue'),
          meta: {
            title: t('routes.demo.feat.breadcrumbFlatDetail'),
            hideMenu: true,
            hideTab: true,
            currentActiveMenu: '/feat/breadcrumb/flat'
          }
        },
        {
          path: 'children',
          name: 'BreadcrumbChildrenDemo',
          component: () =>
            import('@index/views/demo/feat/breadcrumb/ChildrenList.vue'),
          meta: {
            title: t('routes.demo.feat.breadcrumbChildren')
          },
          children: [
            {
              path: 'childrenDetail',
              name: 'BreadcrumbChildrenDetailDemo',
              component: () =>
                import(
                  '@index/views/demo/feat/breadcrumb/ChildrenListDetail.vue'
                ),
              meta: {
                currentActiveMenu: '/feat/breadcrumb/children',
                title: t('routes.demo.feat.breadcrumbChildrenDetail')
                //hideTab: true,
                // hideMenu: true,
              }
            }
          ]
        }
      ]
    },

    {
      path: 'context-menu',
      name: 'ContextMenuDemo',
      component: () => import('@index/views/demo/feat/context-menu/index.vue'),
      meta: {
        title: t('routes.demo.feat.contextMenu')
      }
    },
    {
      path: 'download',
      name: 'DownLoadDemo',
      component: () => import('@index/views/demo/feat/download/index.vue'),
      meta: {
        title: t('routes.demo.feat.download')
      }
    },
    {
      path: 'click-out-side',
      name: 'ClickOutSideDemo',
      component: () =>
        import('@index/views/demo/feat/click-out-side/index.vue'),
      meta: {
        title: t('routes.demo.feat.clickOutSide')
      }
    },
    {
      path: 'img-preview',
      name: 'ImgPreview',
      component: () => import('@index/views/demo/feat/img-preview/index.vue'),
      meta: {
        title: t('routes.demo.feat.imgPreview')
      }
    },
    {
      path: 'copy',
      name: 'CopyDemo',
      component: () => import('@index/views/demo/feat/copy/index.vue'),
      meta: {
        title: t('routes.demo.feat.copy')
      }
    },
    {
      path: 'msg',
      name: 'MsgDemo',
      component: () => import('@index/views/demo/feat/msg/index.vue'),
      meta: {
        title: t('routes.demo.feat.msg')
      }
    },
    {
      path: 'watermark',
      name: 'WatermarkDemo',
      component: () => import('@index/views/demo/feat/watermark/index.vue'),
      meta: {
        title: t('routes.demo.feat.watermark')
      }
    },
    {
      path: 'ripple',
      name: 'RippleDemo',
      component: () => import('@index/views/demo/feat/ripple/index.vue'),
      meta: {
        title: t('routes.demo.feat.ripple')
      }
    },
    {
      path: 'full-screen',
      name: 'FullScreenDemo',
      component: () => import('@index/views/demo/feat/full-screen/index.vue'),
      meta: {
        title: t('routes.demo.feat.fullScreen')
      }
    },
    {
      path: '/error-log',
      name: 'ErrorLog',
      component: () => import('@index/views/sys/error-log/index.vue'),
      meta: {
        title: t('routes.demo.feat.errorLog')
      }
    },
    {
      path: 'excel',
      name: 'Excel',
      redirect: '/feat/excel/customExport',
      component: getParentLayout('Excel'),
      meta: {
        // icon: 'mdi:microsoft-excel',
        title: t('routes.demo.excel.excel')
      },

      children: [
        {
          path: 'customExport',
          name: 'CustomExport',
          component: () => import('@index/views/demo/excel/CustomExport.vue'),
          meta: {
            title: t('routes.demo.excel.customExport')
          }
        },
        {
          path: 'jsonExport',
          name: 'JsonExport',
          component: () => import('@index/views/demo/excel/JsonExport.vue'),
          meta: {
            title: t('routes.demo.excel.jsonExport')
          }
        },
        {
          path: 'arrayExport',
          name: 'ArrayExport',
          component: () => import('@index/views/demo/excel/ArrayExport.vue'),
          meta: {
            title: t('routes.demo.excel.arrayExport')
          }
        },
        {
          path: 'importExcel',
          name: 'ImportExcel',
          component: () => import('@index/views/demo/excel/ImportExcel.vue'),
          meta: {
            title: t('routes.demo.excel.importExcel')
          }
        }
      ]
    },
    {
      path: 'testTab/:id',
      name: 'TestTab',
      component: () => import('@index/views/demo/feat/tab-params/index.vue'),
      meta: {
        title: t('routes.demo.feat.tab'),
        carryParam: true,
        hidePathForChildren: true
      },
      children: [
        {
          path: 'testTab/id1',
          name: 'TestTab1',
          component: () =>
            import('@index/views/demo/feat/tab-params/index.vue'),
          meta: {
            title: t('routes.demo.feat.tab1'),
            carryParam: true,
            ignoreRoute: true
          }
        },
        {
          path: 'testTab/id2',
          name: 'TestTab2',
          component: () =>
            import('@index/views/demo/feat/tab-params/index.vue'),
          meta: {
            title: t('routes.demo.feat.tab2'),
            carryParam: true,
            ignoreRoute: true
          }
        }
      ]
    },
    {
      path: 'testParam/:id',
      name: 'TestParam',
      component: getParentLayout('TestParam'),
      meta: {
        title: t('routes.demo.feat.menu'),
        ignoreKeepAlive: true
      },
      children: [
        {
          path: 'sub1',
          name: 'TestParam_1',
          component: () =>
            import('@index/views/demo/feat/menu-params/index.vue'),
          meta: {
            title: t('routes.demo.feat.menu1'),
            ignoreKeepAlive: true
          }
        },
        {
          path: 'sub2',
          name: 'TestParam_2',
          component: () =>
            import('@index/views/demo/feat/menu-params/index.vue'),
          meta: {
            title: t('routes.demo.feat.menu2'),
            ignoreKeepAlive: true
          }
        }
      ]
    }
  ]
}

export default feat