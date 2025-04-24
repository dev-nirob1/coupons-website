import HomePage from '@/zems/front/pages/HomePage.vue'
import AboutPage from '@/zems/front/pages/AboutPage.vue'
import CouponsPage from '@/zems/front/pages/CouponsPage.vue'
import CouponDetailsPage from '@/zems/front/pages/CouponDetailsPage.vue'
import CompaniesPage from '@/zems/front/pages/CompaniesPage.vue'
import CategoriesPage from '@/zems/front/pages/CategoriesPage.vue'
import MainLayout from '@/zems/front/Layout/MainLayout.vue'

export default [
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
        path: '/category_list/:type?',
        name: 'category_list',
        component: CouponsPage,
      },
    ],
  },
]
