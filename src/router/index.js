import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/zems/front/Layout/MainLayout.vue'
import AboutPage from '@/zems/front/pages/AboutPage.vue'
import HomePage from '@/zems/front/pages/HomePage.vue'
import CouponsPage from '@/zems/front/pages/CouponsPage.vue'
import LoginPage from '@/zems/front/pages/LoginPage.vue'
import RegisterPage from '@/zems/front/pages/RegisterPage.vue'

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
        {
          path: '/login',
          name: 'login',
          component: LoginPage,
        },
        {
          path: '/register',
          name: 'register',
          component: RegisterPage,
        },
      ],
    },
  ],
})

export default router
