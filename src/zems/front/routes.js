import HomePage from '@/zems/front/Pages/HomePage.vue'
import CouponsPage from '@/zems/front/Pages/CouponsPage.vue'
import CompaniesPage from '@/zems/front/Pages/CompaniesPage.vue'
import CategoriesPage from '@/zems/front/Pages/CategoriesPage.vue'
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
        path: '/coupon_list/:type?',
        name: 'coupon_list',
        component: CouponsPage,
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
