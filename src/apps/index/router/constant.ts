/*
 * @Author       : ccbean
 * @Date         : 2022-10-19 19:45:36
 * @LastEditors  : ccbean
 * @LastEditTime : 2022-10-19 20:01:52
 * @Description  :
 */
export const REDIRECT_NAME = 'Redirect'

export const PARENT_LAYOUT_NAME = 'ParentLayout'

export const PAGE_NOT_FOUND_NAME = 'PageNotFound'

export const EXCEPTION_COMPONENT = () => import('@/views/HomeView.vue')

/**
 * @description: default layout
 */
export const LAYOUT = () => import('@/views/HomeView.vue')

/**
 * @description: parent-layout
 */
// export const getParentLayout = (_name?: string) => {
//   return () =>
//     new Promise(resolve => {
//       resolve({
//         name: PARENT_LAYOUT_NAME
//       })
//     })
// }
