import type { AppRouteModule } from '@index/router/types'

import { getParentLayout, LAYOUT } from '@index//router/constant'
import { t } from '@index//router/utils'

const charts: AppRouteModule = {
  path: '/charts',
  name: 'Charts',
  component: LAYOUT,
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: t('routes.demo.charts.charts')
  },
  children: [
    {
      path: 'baiduMap',
      name: 'BaiduMap',
      meta: {
        title: t('routes.demo.charts.baiduMap')
      },
      component: () => import('@index/views/demo/charts/map/Baidu.vue')
    },
    {
      path: 'aMap',
      name: 'AMap',
      meta: {
        title: t('routes.demo.charts.aMap')
      },
      component: () => import('@index/views/demo/charts/map/Gaode.vue')
    },
    {
      path: 'googleMap',
      name: 'GoogleMap',
      meta: {
        title: t('routes.demo.charts.googleMap')
      },
      component: () => import('@index/views/demo/charts/map/Google.vue')
    },

    {
      path: 'echarts',
      name: 'Echarts',
      component: getParentLayout('Echarts'),
      meta: {
        title: 'Echarts'
      },
      redirect: '/charts/echarts/map',
      children: [
        {
          path: 'map',
          name: 'Map',
          component: () => import('@index/views/demo/charts/Map.vue'),
          meta: {
            title: t('routes.demo.charts.map')
          }
        },
        {
          path: 'line',
          name: 'Line',
          component: () => import('@index/views/demo/charts/Line.vue'),
          meta: {
            title: t('routes.demo.charts.line')
          }
        },
        {
          path: 'pie',
          name: 'Pie',
          component: () => import('@index/views/demo/charts/Pie.vue'),
          meta: {
            title: t('routes.demo.charts.pie')
          }
        }
      ]
    }
  ]
}

export default charts
