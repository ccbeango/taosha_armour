import type { AppRouteModule } from '@index/router/types'

import { LAYOUT } from '@index//router/constant'
import { t } from '@index/router/utils'

const about: AppRouteModule = {
  path: '/about',
  name: 'About',
  component: LAYOUT,
  redirect: '/about/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.about'),
    orderNo: 100000
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('@index/views/sys/about/index.vue'),
      meta: {
        title: t('routes.dashboard.about'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true
      }
    }
  ]
}

export default about
