import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/zems/front/Layout/MainLayout.vue'
import AboutPage from '@/zems/front/pages/AboutPage.vue'
import HomePage from '@/zems/front/pages/HomePage.vue'
import CouponsPage from '@/zems/front/pages/CouponsPage.vue'
import LoginPage from '@/zems/front/pages/LoginPage.vue'
import RegisterPage from '@/zems/front/pages/RegisterPage.vue'
import DashboardLayout from '@/zems/back/layout/DashboardLayout.vue'
import DashboardHome from '@/zems/back/pages/DashboardHome.vue'
import CategoriesManagement from '@/zems/back/pages/CategoriesManagement.vue'
import ProfilePage from '@/zems/back/pages/ProfilePage.vue'
import CouponsManagement from '@/zems/back/pages/CouponsManagement.vue'
import UsersManagement from '@/zems/back/pages/UsersManagement.vue'
import AddCoupon from '@/zems/back/pages/AddCoupon.vue'
import CategoriesPage from '@/zems/front/pages/CategoriesPage.vue'
import CategoryDetailsPage from '@/zems/front/pages/CategoryDetailsPage.vue'
import CompanyDetailsPage from '@/zems/front/pages/CompanyDetailsPage.vue'
import CompaniesPage from '@/zems/front/pages/CompaniesPage.vue'
import CouponDetailsPage from '@/zems/front/pages/CouponDetailsPage.vue'

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
          component: CouponsPage, //all coupon details
        },
        {
          path: '/coupons/:id', // Optional if coupon details are shown in a modal
          name: 'coupons-details',
          component: CouponDetailsPage, // single coupon details page
        },
        {
          path: '/companies',
          name: 'companies',
          component: CompaniesPage // for all company listing
        },
        {
          path: '/companies/:slug',
          name: 'company-details',
          component: CompanyDetailsPage //for single company details with coupon
        },
        {
          path: '/categories',
          name: 'categories',
          component: CategoriesPage, //for all category
        },
        {
          path: '/category/:slug',
          name: 'category-details',
          component: CategoryDetailsPage //for single category dynamic route
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
  ],
})

export default router
