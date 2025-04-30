<script setup>
import { ref } from 'vue';
const isExpanded = ref(false)
const toggleMenu = () => {
  isExpanded.value = !isExpanded.value;
  console.log(isExpanded.value);
}
</script>
<template>
  <div class="small" :class="{ 'collapsed': isExpanded }">
    <div class="small-nav">
      <!-- toggle menu bar  -->
      <div class="menu-toggle">
        <BaseButton @click="toggleMenu">
          <i :class="isExpanded ? 'fas fa-xmark' : 'fas fa-bars'"></i>
        </BaseButton>
      </div>
      <div class="logo">
        <img src="/logo.png" alt="logo">
      </div>

    </div>
    <div class="menu">
      <RouterLink to="/dashboard">
        <i class="fa-solid fa-house-user"></i>
        <span>Home</span>
      </RouterLink>
      <RouterLink to="/add-coupon">
        <i class="fa-solid fa-plus"></i>
        <span>Add Coupon</span>
      </RouterLink>
      <RouterLink to="/coupons-management">
        <i class="fa-solid fa-list-check"></i>
        <span>Manage Coupon</span>
      </RouterLink>
      <RouterLink to="/categories-management">
        <i class="fa-solid fa-layer-group"></i>
        <span>Categories</span>
      </RouterLink>
      <RouterLink to="/users-management">
        <i class="fa-solid fa-users"></i>
        <span>Users</span>
      </RouterLink>
    </div>
  </div>
  <!-- <div class="sidebar">
    <div class="toggle-btn" @click="toggleSidebar">
      <i class="fa-solid fa-bars"></i>
    </div>
    <ul class="nav-links" :class="{ 'active': collapsed }">

      <li class="dropdown-parent">
        <div @click="toggleDropdown" class="flex align-center justify-between">
          <div>
            <i class="fa-solid fa-ticket"></i>
            <span>Coupons</span>
          </div>
          <i class="fa-solid fa-angle-down"></i>
        </div>
        <div class="dropdown-child" v-if="dropdownCollapse">


        </div>
      </li>
      <li>

      </li>
      <li>

      </li>
    </ul>
    <ul class="profile">
      <RouterLink to="/profile-page">
        <i class="fa-solid fa-user"></i>
        <span>Profile</span>
      </RouterLink>
      <div class="logout-btn">
        <button class="text-white">
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
        <span>Logout</span>
      </div>
    </ul>
  </div> -->
</template>

<style scoped>
.small {
  background-color: var(--primary-color);
  color: var(--white-color);
  max-width: 300px;
}

.small i {
  color: var(--white-color);
}

.logo {
  width: 60px;
  height: 60px;
}

.logo img {
  width: 100%;
  height: 100%;
}

.small-nav {
  display: flex;
  justify-content: space-between;
}

.collapsed .menu {
  top: 4rem;
  left: 0;
}

.menu {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: 1.5rem;
  position: absolute;
  left: -120%;
  background-color: var(--primary-color);
  height: 100vh;
  width: fit-content;
  transition: .3s;
}

.menu a {
  display: flex;
  gap: 1rem;
  text-decoration: none;
  padding: .75rem 0;
}

@media (min-width: 768px) {
  .small {
    width: 300px;
  }

  .menu {
    background-color: var(--light-color);
    position: static;
    left: 0;
    width: 100%;
  }
}

/* @media (min-width: 768px) {
  .small-nav {
    flex-direction: column;
    justify-content: flex-start;
  }

  .menu {
    width: 4rem;
  }

  .is-expanded .menu {
    position: static;
    width: 100%;
    font-size: 1.25rem;
    overflow: hidden;
  }
} */


/* .is-expanded {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: calc(2rem + 2rem);
  overflow-y: auto;
  height: 100vh;
  background-color: var(--primary-color);
  color: var(--white-color);
  z-index: 99;
  transition: .4s;
}

aside i {
  font-size: 2rem;
  color: var(--white-color);
}

.logo {
  margin-bottom: 1rem;
  width: 2rem;
}

.logo img {
  width: 100%;
}
.is-expanded{
  width: 60%;
}
.is-expanded .menu-toggle {
    top: -4.5rem;
  }
.menu-toggle {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  position: relative;
  top: 0;
  transition: .3s;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
} */

/* @media (min-width: 768px) {
  aside {
    position: sticky;
    top: 0;
  }
  .is-expanded {
    width: 300px;
  }


} */
</style>
