<script setup>
import { ref } from 'vue';
const isExpanded = ref(false)
const toggleMenu = () => {
  isExpanded.value = !isExpanded.value;
  console.log(isExpanded.value);
}
</script>
<template>
  <aside :class="{ 'is-expanded': isExpanded }">
    <div class="logo">
      <img src="/logo.png" alt="logo">
    </div>
    <!-- toggle menu bar  -->
    <div class="menu-toggle">
      <BaseButton @click="toggleMenu">
        <i :class="isExpanded ? 'fas fa-xmark' : 'fas fa-bars'"></i>
      </BaseButton>
    </div>
  </aside>
  <!-- <div class="sidebar">
    <div class="toggle-btn" @click="toggleSidebar">
      <i class="fa-solid fa-bars"></i>
    </div>
    <ul class="nav-links" :class="{ 'active': collapsed }">
      <li>
        <RouterLink to="/dashboard">
          <i class="fa-solid fa-house-user"></i>
          <span>Home</span>
        </RouterLink>
      </li>
      <li class="dropdown-parent">
        <div @click="toggleDropdown" class="flex align-center justify-between">
          <div>
            <i class="fa-solid fa-ticket"></i>
            <span>Coupons</span>
          </div>
          <i class="fa-solid fa-angle-down"></i>
        </div>
        <div class="dropdown-child" v-if="dropdownCollapse">
          <RouterLink to="/add-coupon">
            <i class="fa-solid fa-plus"></i>
            <span>Add Coupon</span>
          </RouterLink>
          <RouterLink to="/coupons-management">
            <i class="fa-solid fa-list-check"></i>
            <span>Manage Coupon</span>
          </RouterLink>
        </div>
      </li>
      <li>
        <RouterLink to="/categories-management">
          <i class="fa-solid fa-layer-group"></i>
          <span>Categories</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/users-management">
          <i class="fa-solid fa-users"></i>
          <span>Users</span>
        </RouterLink>
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
aside {
  position: fixed;
  z-index: 99;
}

.logo {
  margin-bottom: 1rem;
  width: 2rem;
}

.logo img {
  width: 100%;
}

.menu-toggle {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  position: relative;
  top: 0;
  transition: .3s;
}
.menu-toggle i {
  font-size: 2rem;
  color: var(--white-color);
}

@media (min-width: 768px) {
  aside {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    position: sticky;
    top: 0;
    width: calc(2rem + 2rem);
    overflow-y: auto;
    height: 100vh;
    background-color: var(--primary-color);
    color: var(--white-color);
    transition: .4s;
  }

  .is-expanded {
    width: 300px;
  }



  .is-expanded .menu-toggle {
    top: -4.5rem;
  }

}
</style>
