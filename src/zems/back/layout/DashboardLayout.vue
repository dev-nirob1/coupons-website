<script setup>
import DashboardNavbar from '@/components/section/DashboardNavbar.vue';
import DashboardSidebar from '@/components/section/DashboardSidebar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex">
    <DashboardSidebar />
    <div class="width-full router-view">
      <DashboardNavbar />
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
.router-view{
  max-height: 100vh;
  overflow-y: auto;
}
</style>
