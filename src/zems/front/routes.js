import HomePage from '@/zems/front/Pages/HomePage.vue'
import CouponsPage from '@/zems/front/Pages/CouponsPage.vue'
import CompaniesPage from '@/zems/front/Pages/CompaniesPage.vue'
import MainLayout from '@/zems/front/Layout/MainLayout.vue'
import CompanyDetailsPage from './Pages/CompanyDetailsPage.vue'
import CategoriesPage from '@/zems/front/Pages/CategoriesPage.vue'
import HomeTwoPage from './Pages/HomeTwoPage.vue'
import HomeThreePage from './Pages/HomeThreePage.vue'

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
        path: 'home-two',
        name: 'home-two',
        component: HomeTwoPage,
      },
      {
        path: 'home-three',
        name: 'home-three',
        component: HomeThreePage,
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
        path: '/companies/:type',
        name: 'company-details',
        component: CompanyDetailsPage,
      },
      // {
      //   path: '/company_list/:type?',
      //   name: 'company_list',
      //   component: CouponsPage,
      // },
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
