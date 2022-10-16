/*
 * @Author       : ccbean
 * @Date         : 2022-10-15 14:06:03
 * @LastEditors  : liuyinghao
 * @LastEditTime : 2022-10-16 15:42:38
 * @Description  : vue-router 扩展
 */
export {}
declare module 'vue-router' {
  // 扩展RouteMeta
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    /**
     * 路由标题
     */
    title?: string
    /**
     * 排序
     */
    orderNo?: number
    /**
     * 权限验证
     */
    auth?: boolean
    /**
     * 可访问的角色list
     */
    roles?: string[]
    /**
     * 图标
     */
    icon?: string
    /**
     * 隐藏菜单
     */
    hideMenu?: boolean
  }
}
