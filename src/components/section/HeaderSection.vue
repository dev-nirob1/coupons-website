<script setup>
import { onMounted, ref } from 'vue';
import { navbarAnimation } from '@/plugins/animation';
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  navbarAnimation()
})
</script>

<template>
  <header class="navbar ">
    <nav class="flex justify-between align-center container">
      <!-- Logo -->
      <router-link to="/" class="logo">
          <img src="/logo.png" alt="logo">
          <span class="brand">CouponCraze</span>
      </router-link>

      <!-- Mobile Menu Button -->
      <button class="hamburger" @click="toggleMenu">
        <i :class="isMenuOpen ? 'fas fa-xmark text-2xl' : 'fas fa-bars text-2xl'" class="fa-2xl"></i>
      </button>

      <!-- Navigation Links -->
      <ul class="nav-links" :class="{ 'active': isMenuOpen }">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/coupon_list">Latest Coupons</router-link></li>
        <li><router-link to="/coupon_list/exclusive">Exclusive Coupons</router-link></li>
        <li><router-link to="/coupon_list/ending_soon">Ending Soon</router-link></li>
        <li><router-link to="/categories">Categories</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>

        <!-- Auth Buttons -->
        <div class="flex gap-1">
          <RouterLink to="/login" class="btn p-1 login">Login</RouterLink>
          <RouterLink to="/register" class="btn p-1 signup">Sign Up</RouterLink>
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
  background-color: var(--alternative-color);
}

.navbar {
  backdrop-filter: blur(50px);
  color: var(--white-color);
  padding: 0.75rem 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: .3s ease;
}
.navbar a {
  text-decoration: none;
}
.logo{
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
}
.logo img {
  height: 60px;
  width: 100%;
}

.brand {
  display: none;
}
.nav-links{
  display:flex;
   align-items:center;
    gap:1rem;
}
.navbar ul {
  list-style: none;
  position: fixed;
  top: -100%;
  left: -100%;
  width: 80%;
  margin: 0;
  /* height: calc(100vh - 70px); */
  color: var(--light-color);
  background: var(--white-color);
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  gap: 1.5rem;
  transition: .3s;
  /* box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1); */
}
.navbar ul.active {
  top: 100px;
    left: 0;
  }
.navbar ul li a {
  font-weight: 500;
  transition: color 0.2s ease-in-out;
  position: relative;
  padding: 0.5rem 0;
}

.navbar ul li a:hover {
  color: var(--alternative-color);
}

.login {
  background-color: var(--white-color);
  color: var(--light-color);
}

.signup {
  background-color: var(--alternative-color);
  color: var(--white-color);
}

/* Mobile Menu Styles */
.hamburger {
  display: block;
  height: 2rem;
  width: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
}

@media (min-width: 992px) {
  .brand {
    display: block;
    margin: 0;
  }
  .navbar ul{
    position: inherit;
    color: var(--white-color);
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: transparent;
    padding: .75rem 0;
  }
  .navbar ul li a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--alternative-color);
    transition: width 0.3s ease;
  }

  .navbar ul li a:hover::after {
    width: 100%;
  }

  .hamburger {
    display: none;
  }
}

/* Responsive Design */
/* @media (min-width: 768px) {
  .hamburger {
    display: none;
  }
  header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;
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
} */
</style>
