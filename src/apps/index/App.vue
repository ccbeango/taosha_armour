<!--
 * @Author       : ccbean
 * @Date         : 2022-10-14 21:46:51
 * @LastEditors  : liuyinghao
 * @LastEditTime : 2022-10-16 17:48:03
 * @Description  : 
-->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import SvgIcon from '@index//components/SvgIcon.vue'

import { useCounterStore, usePermissionStore } from '@index/store'
import { storeToRefs } from 'pinia'

import { getOsType } from '@index/utils/ua'

console.log('getOsType', getOsType())

// import { yo } from 'yoo-hoo'
// yo('ho', {
//   color: 'blue',
//   spacing: 20
// })
const counterStore = useCounterStore()
const { counter } = storeToRefs(counterStore)
const { increment } = counterStore

const permission = usePermissionStore()
const { buildRoutesAction } = permission
</script>

<template>
  <header class="container">
    <img
      alt="Vue logo"
      class="logo"
      src="@index//assets/logo.svg"
      width="125"
      height="125"
    />
    <div>
      <h2>{{ counter }}</h2>
      <el-button type="danger" @click="increment">counter +1</el-button>
    </div>

    <h2 class="color-red" @click="buildRoutesAction">红色测试</h2>

    <SvgIcon name="bag"></SvgIcon>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
.color-red {
  color: $color;
  background: var(--test-color);
  font-size: 0.875rem;
  /* @include test; */
}

.container {
  font-size: 16px;

  &__switch {
    color: #f00;

    &--active {
      display: block;
    }
  }
}
</style>
