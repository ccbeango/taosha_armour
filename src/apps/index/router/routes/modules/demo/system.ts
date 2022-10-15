import type { AppRouteModule } from '@index/router/types'

import { LAYOUT } from '@index//router/constant'
import { t } from '@index//router/utils'

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/account',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.demo.system.moduleName')
  },
  children: [
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        title: t('routes.demo.system.account'),
        ignoreKeepAlive: false
      },
      component: () => import('@index/views/demo/system/account/index.vue')
    },
    {
      path: 'account_detail/:id',
      name: 'AccountDetail',
      meta: {
        hideMenu: true,
        title: t('routes.demo.system.account_detail'),
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/system/account'
      },
      component: () =>
        import('@index/views/demo/system/account/AccountDetail.vue')
    },
    {
      path: 'role',
      name: 'RoleManagement',
      meta: {
        title: t('routes.demo.system.role'),
        ignoreKeepAlive: true
      },
      component: () => import('@index/views/demo/system/role/index.vue')
    },

    {
      path: 'menu',
      name: 'MenuManagement',
      meta: {
        title: t('routes.demo.system.menu'),
        ignoreKeepAlive: true
      },
      component: () => import('@index/views/demo/system/menu/index.vue')
    },
    {
      path: 'dept',
      name: 'DeptManagement',
      meta: {
        title: t('routes.demo.system.dept'),
        ignoreKeepAlive: true
      },
      component: () => import('@index/views/demo/system/dept/index.vue')
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      meta: {
        title: t('routes.demo.system.password'),
        ignoreKeepAlive: true
      },
      component: () => import('@index/views/demo/system/password/index.vue')
    }
  ]
}

export default system
