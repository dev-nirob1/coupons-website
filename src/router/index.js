import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/zems/front/Layout/MainLayout.vue'
import AboutPage from '@/zems/front/pages/AboutPage.vue'
import HomePage from '@/zems/front/pages/HomePage.vue'
import CouponsPage from '@/zems/front/pages/CouponsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/about',
          name: 'about',
          component: AboutPage,
        },
        {
          path: '/coupons',
          name: 'coupons',
          component: CouponsPage,
        },
      ],
    },
  ],
})

export default router
