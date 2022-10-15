import type { AppRouteModule } from '@index/router/types'

import { LAYOUT } from '@index//router/constant'
import { t } from '@index//router/utils'

const setup: AppRouteModule = {
  path: '/setup',
  name: 'SetupDemo',
  component: LAYOUT,
  redirect: '/setup/index',
  meta: {
    orderNo: 90000,
    hideChildrenInMenu: true,
    icon: 'whh:paintroll',
    title: t('routes.demo.setup.page')
  },
  children: [
    {
      path: 'index',
      name: 'SetupDemoPage',
      component: () => import('@index/views/demo/setup/index.vue'),
      meta: {
        title: t('routes.demo.setup.page'),
        icon: 'whh:paintroll',
        hideMenu: true
      }
    }
  ]
}

export default setup
