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
    /*{
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },*/
  ],
})

export default router
