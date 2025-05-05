<script setup>
import { computed, onMounted, ref } from 'vue';
import { navbarAnimation } from '@/Plugins/animation';
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
    element.addEventListener('click', ()=> {
      isMenuOpen.value = false
    })
  });
})
</script>

<template>
  <header class="navbar" :class="{'bg-secondary': routeName !== 'home'}">
    <nav class="flex justify-between align-center container">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <BaseImage src="/logo.png" alt="logo"/>
        <span class="brand">CouponCraze</span>
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
        <ListItem><router-link to="/dashboard">Dashboard</router-link></ListItem>
        <ListItem><router-link to="/login" class="btn p-1 login">Login</router-link></ListItem>
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
  padding: 0.75rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: .3s ease;
}

.navbar a {
  text-decoration: none;
}

.logo {
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
  color: var(--light-color);
  background: var(--white-color);
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  gap: 1.5rem;
  transition: .3s;
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
  .navbar ul {
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

</style>
