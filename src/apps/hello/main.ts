import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/hello/test',
      component: () => import('./test.vue')
    }
  ]
})

const app = createApp(App).use(router)

app.mount('#app')
