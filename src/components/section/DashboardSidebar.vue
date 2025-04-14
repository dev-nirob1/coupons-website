<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const collapsed = ref(true)
const toggleSidebar = () => {
  collapsed.value = !collapsed.value
}
</script>

<template>
  <div class="sidebar">
    <div class="toggle-btn" @click="toggleSidebar">
      <i class="fa-solid fa-bars"></i>
    </div>
    <hr>
    <ul>
      <li>
        <RouterLink>
          <i class="fa-solid fa-house-user"></i>
          <span v-if="!collapsed">Home</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink>
          <i class="fa-solid fa-ticket"></i>
          <span v-if="!collapsed">Coupons</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink>
          <i class="fa-solid fa-layer-group"></i>
          <span v-if="!collapsed">Categories</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink>
          <i class="fa-solid fa-users"></i>
          <span v-if="!collapsed">Users</span>
        </RouterLink>
      </li>
    </ul>
    <div class="profile">
      <RouterLink>
        <i class="fa-solid fa-user"></i>
          <span v-if="!collapsed">Users</span>
        </RouterLink>
      <div class="logout-btn">
        <button class="text-white">
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
          <span v-if="!collapsed">Logout</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  position: relative;
  max-width: 200px;
  min-height: 100vh;
  font-size: 1.5rem;
  background: var(--light-color);
  color: var(--white-color)
}
.sidebar hr{
  margin: 0;
}
.sidebar .toggle-btn{
  padding:1rem;
}
.sidebar ul{
  padding: 0;
  list-style: none;
}
.sidebar ul li a{
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: .5rem;
}
.sidebar ul li a:hover{
  background-color: var(--dark-color);
  border-radius: 2rem 0 0 2rem;
}
.sidebar a{
  display: inline-block;
  text-decoration: none;
}
.profile{
  position: absolute;
  left: 1rem;
  bottom: 2rem;
}
.profile a {
  margin-bottom: .75rem;
}
.logout-btn button{
  border: none;
  color: var(--white-color);
  font-size: 1.5rem;
  padding: 0;
}
.profile a,
.logout-btn {
  display: flex;
  align-items: center;
  gap: .5rem;
}
</style>
