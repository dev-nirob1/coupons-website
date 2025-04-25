<script setup>
import { onMounted, ref } from 'vue';
import { navbarAnimation } from '@/plugins/animation';
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
onMounted(()=> {
  navbarAnimation()
})
</script>

<template>
  <header class="navbar">
    <nav class="flex justify-between align-center flex-wrap container">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <BaseTitle class="flex align-center">
          <img src="/logo.png" alt="">
          <span class="brand">CouponCraze</span>
        </BaseTitle>
      </router-link>

      <!-- Mobile Menu Button -->
      <button class="mobile-menu-button" @click="toggleMenu">
        <i :class="isMenuOpen ? 'fas fa-xmark text-2xl' : 'fas fa-bars text-2xl'" class="fa-2xl"></i>
      </button>

      <!-- Navigation Links -->
      <ul class="flex align-center gap-1" :class="{ 'active': isMenuOpen }">
        <li><router-link to="/" @click="closeMenu">Home</router-link></li>
        <li><router-link to="/coupon_list" @click="closeMenu">Latest Coupons</router-link></li>
        <li><router-link to="/coupon_list/exclusive" @click="closeMenu">Exclusive Coupons</router-link></li>
        <li><router-link to="/coupon_list/ending_soon" @click="closeMenu">Ending Soon</router-link></li>
        <li><router-link to="/categories" @click="closeMenu">Categories</router-link></li>
        <li><router-link to="/dashboard" @click="closeMenu">Dashboard</router-link></li>

        <!-- Auth Buttons -->
        <div class="flex gap-1">
          <RouterLink to="/login" class="btn login">Login</RouterLink>
          <RouterLink to="/register" class="btn signup">Sign Up</RouterLink>
        </div>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.scroll-down .navbar {
    transform: translate3d(0, -100%, 0);
  }
  .scroll-up .navbar {
    background-color: var(--border-color);
  }

.navbar {
  background-color: transparent;
  color: var(--white-color);
  padding: 0.75rem 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: color .3s ease;
}

.navbar h3 {
  margin: 5px;
}

.logo {
  text-decoration: none;
}

.logo img {
  height: 60px;
  width: 100%;
}

.icon {
  font-size: 1.5rem;
  margin-right: 0.4rem;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;
}

header ul li a {
  text-decoration: none;
  /* color: var(--light-color); */
  font-weight: 500;
  transition: color 0.2s ease-in-out;
  position: relative;
  padding: 0.5rem 0;
}

header ul li a:hover {
  color: #f43f5e;
}

header ul li a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--alternative-color);
  transition: width 0.3s ease;
}

header ul li a:hover::after {
  width: 100%;
}

.login {
  background-color: #f3f4f6;
  color: #374151;
}

.login:hover {
  background-color: #e5e7eb;
}

.signup {
  background-color: #f43f5e;
  color: var(--white-color);

  &:hover {
    background-color: black;
  }
}

/* .signup:hover {
  background-color: #e11d48;
} */

/* Mobile Menu Styles */
.mobile-menu-button {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

/* Responsive Design */
@media (max-width: 768px) {
  .mobile-menu-button {
    display: block;
  }

  header ul {
    position: fixed;
    top: 70px;
    left: -100%;
    width: 80%;
    height: calc(100vh - 70px);
    background: var(--white-color);
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    gap: 1.5rem;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  }

  header ul.active {
    left: 0;
  }
}
</style>
