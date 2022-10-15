import type { AppRouteModule } from '@index/router/types'

import { LAYOUT } from '@index//router/constant'
import { t } from '@index//router/utils'

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard')
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('@index/views/dashboard/analysis/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboard.analysis')
      }
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('@index/views/dashboard/workbench/index.vue'),
      meta: {
        title: t('routes.dashboard.workbench')
      }
    }
  ]
}

export default dashboard
