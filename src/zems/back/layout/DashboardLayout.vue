<script setup>
import DashboardNavbar from '@/components/section/DashboardNavbar.vue';
import DashboardSidebar from '@/components/section/DashboardSidebar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="flex gap-1 container">
    <DashboardSidebar />
    <div class="width-full">
      <DashboardNavbar />
      <RouterView />
    </div>
  </div>
</template>
