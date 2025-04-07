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
        <i :class="isMenuOpen ? 'fas fa-xmark text-2xl' : 'fas fa-bars text-2xl'"
          class="fa-2xl"></i>
      </button>

      <!-- Navigation Links -->
      <ul class="flex align-center gap-1" :class="{ 'active': isMenuOpen }">
        <li><router-link to="/" @click="closeMenu">Home</router-link></li>
        <li><router-link to="/coupons" @click="closeMenu">Coupons</router-link></li>
        <li><router-link to="/categories" @click="closeMenu">Categories</router-link></li>
        <li><router-link to="/about" @click="closeMenu">About</router-link></li>

        <!-- Auth Buttons -->
        <div class="flex gap-1">
          <button class="btn login">Login</button>
          <button class="btn signup">Sign Up</button>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

</script>

<style scoped>
.navbar {
  background-color: var(--white-color);
  padding: 0.75rem 0;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); */
  position: sticky;
  top: 0;
  z-index: 1000;
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
  color: var(--light-color);
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

header ul li  a:hover::after {
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
}

.signup:hover {
  background-color: #e11d48;
}

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
