<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import SvgIcon from '@/components/SvgIcon.vue'

// import { yo } from 'yoo-hoo'
// yo('ho', {
//   color: 'blue',
//   spacing: 20
// })
</script>

<template>
  <header class="container">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <h2 class="color-red">红色测试</h2>

    <el-button type="danger">你好啊</el-button>

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
