<script setup>
import DashboardSidebar from '@/components/section/DashboardSidebar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="flex gap-2">
    <DashboardSidebar />
    <div>
      <RouterView />
    </div>
  </div>
</template>
