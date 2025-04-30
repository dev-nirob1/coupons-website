<script setup>
import DashboardSidebar from '@/components/section/DashboardSidebar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="medium-12">
    <DashboardSidebar class="medium-span-2" />
    <!-- <DashboardNavbar /> -->
    <div class="medium-span-10">
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
/* .sidebar {
  max-width: 300px;
} */
/*
.router-view {
  padding-left: 4rem;
  height: 100vh;
  overflow-y: auto;
} */
</style>
