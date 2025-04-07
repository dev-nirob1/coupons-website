<template>
  <nav class="navbar">
    <div class="navbar-container container">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <span class="icon">🏷️</span>
        <span class="brand">CouponCraze</span>
      </router-link>

      <!-- Mobile Menu Button -->
      <button class="mobile-menu-button" @click="toggleMenu">
        <span class="bar" :class="{ 'bar-1-active': isMenuOpen }"></span>
        <span class="bar" :class="{ 'bar-2-active': isMenuOpen }"></span>
        <span class="bar" :class="{ 'bar-3-active': isMenuOpen }"></span>
      </button>

      <!-- Navigation Links -->
      <ul class="nav-links" :class="{ 'active': isMenuOpen }">
        <li><router-link to="/" @click="closeMenu">Home</router-link></li>
        <li><router-link to="/coupons" @click="closeMenu">Coupons</router-link></li>
        <li><router-link to="/categories" @click="closeMenu">Categories</router-link></li>
        <li><router-link to="/about" @click="closeMenu">About</router-link></li>

        <!-- Auth Buttons -->
        <div class="auth-buttons">
          <button class="btn login">Login</button>
          <button class="btn signup">Sign Up</button>
        </div>
      </ul>
    </div>
  </nav>
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
  background-color: #fff;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.75rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 1rem;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  text-decoration: none;
}

.icon {
  font-size: 1.5rem;
  margin-right: 0.4rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;
}

.nav-links a {
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  transition: color 0.2s ease-in-out;
  position: relative;
  padding: 0.5rem 0;
}

.nav-links a:hover {
  color: #f43f5e;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #f43f5e;
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.auth-buttons {
  display: flex;
  gap: 0.75rem;
  margin-left: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn.login {
  background-color: #f3f4f6;
  color: #374151;
}

.btn.login:hover {
  background-color: #e5e7eb;
}

.btn.signup {
  background-color: #f43f5e;
  color: white;
}

.btn.signup:hover {
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

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background: #f43f5e;
  transition: all 0.3s ease;
}

.bar-1-active {
  transform: translateY(8px) rotate(45deg);
}

.bar-2-active {
  opacity: 0;
}

.bar-3-active {
  transform: translateY(-8px) rotate(-45deg);
}

/* Responsive Design */
@media (max-width: 768px) {
  .mobile-menu-button {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: -100%;
    width: 80%;
    height: calc(100vh - 70px);
    background: #fff;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    gap: 1.5rem;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  }

  .nav-links.active {
    left: 0;
  }

  .auth-buttons {
    margin-left: 0;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}
</style>
