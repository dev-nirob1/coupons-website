<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// const collapsed = ref(true)
const dropdownCollapse = ref(false)

const toggleDropdown = () => {
  dropdownCollapse.value = !dropdownCollapse.value;
  console.log(dropdownCollapse);
}

</script>

<template>
  <div class="sidebar">
    <div class="toggle-btn" @click="toggleSidebar">
      <i class="fa-solid fa-bars"></i>
    </div>
    <!-- <hr> -->
    <ul class="nav-links">
      <li>
        <RouterLink to="/dashboard">
          <i class="fa-solid fa-house-user"></i>
          <span>Home</span>
        </RouterLink>
      </li>
      <li class="dropdown-parent">
        <div @click="toggleDropdown" class="flex align-center justify-between pl-1">
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
    <!-- <ul class="profile">
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
    </ul> -->
  </div>
</template>

<style scoped>
.sidebar {
  position: relative;
  height: 95px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: var(--white-color);
}

.toggle-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.sidebar .nav-links {
  color: var(--light-color);
  background-color: var(--white-color);
  position: absolute;
  width: 80vw;
  left: -80vw;
  top: 0;
  z-index: 999;
}

</style>
