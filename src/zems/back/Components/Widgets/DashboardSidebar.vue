<script setup>
import { ref } from 'vue';
const isExpanded = ref(false)
const toggleMenu = () => {
  isExpanded.value = !isExpanded.value;
  console.log(isExpanded.value);
}
</script>
<template>
  <div class="sidebar" :class="{ 'collapsed': isExpanded }">
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
.sidebar {
  background-color: var(--primary-color);
  color: var(--white-color);
  position: relative;
}

.sidebar i {
  color: var(--white-color);
  font-size: 1.5rem;
}

.sidebar .logo {
  width: 60px;
  height: 60px;
}

.sidebar .logo img {
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
  position: absolute;
  left: -120%;
  background-color: var(--primary-color);
  height: 100vh;
  /* width: calc(2rem + 1.5rem); */
  transition: .3s;
}

.menu a {
  display: flex;
  gap: 1rem;
  text-decoration: none;
  padding: .75rem 0;
}

@media (min-width: 768px) {
  .logo {
    display: none;
  }

  .menu {
    position: static;
    left: 0;
    width: calc(2rem + 1.5rem);
    transition: .3s;
  }

  .menu span {
    font-size: 1rem;
    opacity: 0;
    visibility: hidden;
  }

  .collapsed .menu {
    width: 250px;
    transition: .3s;
  }

  .collapsed .menu span {
    opacity: 1;
    visibility: visible;
  }
}
</style>
