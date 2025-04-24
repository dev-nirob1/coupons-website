import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/zems/front/Layout/MainLayout.vue'
import AboutPage from '@/zems/front/pages/AboutPage.vue'
import HomePage from '@/zems/front/pages/HomePage.vue'
import CouponsPage from '@/zems/front/pages/CouponsPage.vue'
import DashboardLayout from '@/zems/back/layout/DashboardLayout.vue'
import DashboardHome from '@/zems/back/pages/DashboardHome.vue'
import CategoriesManagement from '@/zems/back/pages/CategoriesManagement.vue'
import ProfilePage from '@/zems/back/pages/ProfilePage.vue'
import CouponsManagement from '@/zems/back/pages/CouponsManagement.vue'
import UsersManagement from '@/zems/back/pages/UsersManagement.vue'
import AddCoupon from '@/zems/back/pages/AddCoupon.vue'
import CategoriesPage from '@/zems/front/pages/CategoriesPage.vue'
import CompaniesPage from '@/zems/front/pages/CompaniesPage.vue'
import CouponDetailsPage from '@/zems/front/pages/CouponDetailsPage.vue'
import auth_routes from '@/zems/auth/routes'

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
          path: '/coupon_list/:type?',
          name: 'coupon_list',
          component: CouponsPage,
        },
        {
          path: '/coupons-details/:id', //single coupon details
          name: 'coupons-details',
          component: CouponDetailsPage,
        },
        {
          path: '/companies',
          name: 'companies',
          component: CompaniesPage,
        },
        {
          path: '/company_list/:type?',
          name: 'company_list',
          component: CouponsPage,
        },
        {
          path: '/categories',
          name: 'categories',
          component: CategoriesPage,
        },
        {
          path: '/category_list/:type',
          name: 'category_list',
          component: CouponsPage
        },
      ],
    },
    {
      path: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'dashboard-home',
          component: DashboardHome,
        },
        {
          path: '/categories-management',
          name: 'categories-management',
          component: CategoriesManagement,
        },
        {
          path: '/users-management',
          name: 'users-management',
          component: UsersManagement,
        },
        {
          path: '/profile-page',
          name: 'profile-page',
          component: ProfilePage,
        },
        {
          path: '/add-coupon',
          name: '/add-coupon',
          component: AddCoupon,
        },
        {
          path: '/coupons-management',
          name: '/coupons-management',
          component: CouponsManagement,
        },
      ],
    },
    ...auth_routes
  ],
})

export default router
