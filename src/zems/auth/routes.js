import AuthLayout from "@zems/auth/AuthLayout/AuthLayout.vue";
import LoginPage from "@zems/auth/Pages/LoginPage.vue";
import RegisterPage from "@zems/auth/Pages/RegisterPage.vue";

export default [
  {
    path:'/login',
    name:'AuthLogin',
    component: AuthLayout,
    meta: {auth: false},
    redirect:'/',
    children:[
      {
        path: '/login',
        name: 'login',
        component: LoginPage
      },
      {
        path: '/register',
        name: 'register',
        component: RegisterPage
      }
    ]
  }
]
