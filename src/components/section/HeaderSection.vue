<script setup>
import { computed, onMounted, ref } from 'vue';
import { navbarAnimation } from '@/plugins/animation';
import { useRoute } from 'vue-router';
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const route = useRoute()
const routeName = computed(() => route.name);

onMounted(() => {
  navbarAnimation()

  const navbar = document.querySelector('.nav-links')
  console.log(navbar.childNodes);
  navbar.childNodes.forEach(element => {
    element.addEventListener('click', () => {
      isMenuOpen.value = false
    })
  });
})
</script>

<template>
  <header class="navbar" :class="{ 'bg-secondary': routeName !== 'home' }">
    <nav class="flex justify-between align-center container">
      <!-- Logo -->
      <router-link to="/" class="logo">
         <img
            class="height-full width-full"
            src="/logo.png"
            alt="logo"
          />
          <div class="brand">
            <span>CouponHub</span>
            <p>Shop Smarter, Save Bigger</p>
          </div>
      </router-link>

      <!-- Mobile Menu Button -->
      <BaseButton class="hamburger" @click="toggleMenu">
        <i :class="isMenuOpen ? 'fas fa-xmark' : 'fas fa-bars'" class="fa-2xl"></i>
      </BaseButton>

      <!-- Navigation Links -->
      <ul class="nav-links" :class="{ 'active': isMenuOpen }">
        <ListItem><router-link to="/">Home</router-link></ListItem>
        <ListItem><router-link to="/coupon_list">Latest Coupons</router-link></ListItem>
        <ListItem><router-link to="/coupon_list/exclusive">Exclusive Coupons</router-link></ListItem>
        <ListItem><router-link to="/coupon_list/ending_soon">Ending Soon</router-link></ListItem>
        <ListItem><router-link to="/categories">Categories</router-link></ListItem>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* Sticky navbar with scroll effects */
.scroll-down .navbar {
  transform: translate3d(0, -100%, 0);
}

.scroll-up .navbar {
  background-color: var(--secondary-color);
}

.navbar {
  backdrop-filter: blur(50px);
  color: var(--white-color);
  padding: 0.75rem 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: 0.3s ease;
}
.navbar a {
  text-decoration: none;
}
.logo {
  display: flex;
  gap: 0.5rem;
}
.logo span {
  font-size: 1.8rem;
  font-weight: bold;
}
.logo p {
  margin-top: -0.5rem;
  font-size: 0.8rem;
}
.logo img {
  height: 65px;
  width: 100%;
}
.brand {
  display: none;
}
.nav-links {
  display: flex;
  align-items: center;
}
.navbar ul {
  list-style: none;
  position: fixed;
  top: -100%;
  left: -100%;
  width: 80%;
  margin: 0;
  color: var(--white-color);
  background: var(--secondary-color);
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  gap: 1.5rem;
  transition: 0.3s;
}
.navbar ul.active {
  top: 0;
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
/* dropdown menu  */
.dropdown-container {
  position: relative;
}
.dropdown-menu {
  margin-left: 1.5rem;
  margin-top: 1rem;
}
.dropdown-menu a {
  display: block;
}
/* Mobile menu toggle */
.hamburger {
  display: block;
  color: var(--white-color);
  border: none;
  cursor: pointer;
}
@media (min-width: 992px) {
.brand {
    display: block;
    margin: 0;
  }
  .navbar ul {
    position: inherit;
    color: var(--white-color);
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: transparent;
    padding: 0.75rem 0;
  }
  /* Desktop menu hover effects */
  .navbar ul li a::after {
    content: "";
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
  /* dropdonw menu  */
  .navbar .dropdown-menu {
    position: absolute;
    top: 1.75rem;
    left: 0;
    width: 10rem;
    margin: 0;
    padding: 1.5rem 1rem;
    background-color: var(--secondary-color);
    display: none;
    transition: all 0.5s;
  }
  .navbar .dropdown-container:hover .dropdown-menu {
    display: block;
  }
  .navbar .dropdown-menu a {
    margin-bottom: 0.25rem;
  }
  /* expand navlinks on desktop  */
  .hamburger {
    display: none;
  }
}
</style>
