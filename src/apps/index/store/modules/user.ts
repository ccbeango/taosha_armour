/*
 * @Author       : liuyinghao
 * @Date         : 2022-10-16 10:05:04
 * @LastEditors  : liuyinghao
 * @LastEditTime : 2022-10-17 17:06:52
 * @Description  : 用户信息Store
 */
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { UserInfo } from '#/store'

import { router } from '@index/router'
import { PageEnum } from '@index/enums/pageEnum'

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

  async function loginAction(params: any) {}

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
