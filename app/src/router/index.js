import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '@/views/FrontPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'frontpage',
      component: FrontPage,
    },
    {
      path: '/money',
      name: 'money',
      component: () => import('../views/MoneyPage.vue'),
    },
    {
      path: '/percent',
      name: 'percent',
      component: () => import('../views/PercentPage.vue'),
    },
  ],
})

export default router
