import { createRouter, createWebHistory } from 'vue-router'
import auth_routes from '@/zems/auth/routes'
import front_routes from '@/zems/front/routes'
import back_routes from '@/zems/back/routes'
import NotFound from '@/zems/front/Pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...front_routes,
    ...back_routes,
    ...auth_routes,
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
})

export default router
