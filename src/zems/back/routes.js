import DashboardLayout from "@/zems/back/layout/DashboardLayout.vue";
import AddCoupon from "@/zems/back/pages/AddCoupon.vue";
import CategoriesManagement from "@/zems/back/pages/CategoriesManagement.vue";
import CouponsManagement from "@/zems/back/pages/CouponsManagement.vue";
import DashboardHome from "@/zems/back/pages/DashboardHome.vue";
import ProfilePage from "@/zems/back/pages/ProfilePage.vue";
import UsersManagement from "@/zems/back/pages/UsersManagement.vue";
import AddCategory from "@/zems/back/pages/AddCategory.vue";
import EditCategory from "@/zems/back/pages/EditCategory.vue";
import EditCoupon from "@/zems/back/pages/EditCoupon.vue";

export default [
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
          path: '/add-category',
          name: 'add-category',
          component: AddCategory,
        },
        {
          path: '/edit-category', // /:id dynamic route
          name: 'edit-category',
          component: EditCategory,
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
        {
          path: '/edit-coupon', //:id dynamic route
          name: '/edit-coupon',
          component: EditCoupon,
        },
      ],
    },
]
