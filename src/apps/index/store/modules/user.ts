/*
 * @Author       : liuyinghao
 * @Date         : 2022-10-16 10:05:04
 * @LastEditors  : ccbean
 * @LastEditTime : 2022-10-19 20:02:42
 * @Description  : 用户信息Store
 */
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { UserInfo } from '#/store'

import { router } from '@/router'
import { PageEnum } from '@/enums/pageEnum'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<Nullable<UserInfo>>(null)
  const token = ref('')

  userInfo.value = {
    usreId: 9527,
    username: 'ccbean',
    avatar: 'https://avatars.githubusercontent.com/u/16501284?v=4',
    desc: '你好你好啊',
    homePath: '/',
    roles: ['super']
  }

  /* getters */
  // 获取用户信息
  const getUserInfo = computed(() => {
    return userInfo.value! || {}
  })
  // 获取token
  const getToken = computed(() => {
    return token.value || 'fake_token'
  })

  async function loginAction() {
    await afterLoginAction(false)
  }

  async function afterLoginAction(goHome?: boolean) {
    goHome && (await router.replace(PageEnum.BASE_HOME))
  }

  return {
    userInfo,
    // getters
    getUserInfo,
    getToken,

    // action
    loginAction,
    afterLoginAction
  }
})
