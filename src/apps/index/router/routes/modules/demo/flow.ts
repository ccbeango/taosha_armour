import type { AppRouteModule } from '@index/router/types'

import { LAYOUT } from '@index//router/constant'
import { t } from '@index//router/utils'

const charts: AppRouteModule = {
  path: '/flow',
  name: 'FlowDemo',
  component: LAYOUT,
  redirect: '/flow/flowChart',
  meta: {
    orderNo: 5000,
    icon: 'tabler:chart-dots',
    title: t('routes.demo.flow.name')
  },
  children: [
    {
      path: 'flowChart',
      name: 'flowChartDemo',
      component: () => import('@index/views/demo/comp/flow-chart/index.vue'),
      meta: {
        title: t('routes.demo.flow.flowChart')
      }
    }
  ]
}

export default charts
