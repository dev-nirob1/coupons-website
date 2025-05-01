<script setup>
import { RouterView } from 'vue-router';
import DashboardSidebar from '@/zems/back/Components/Widgets/DashboardSidebar.vue';
</script>

<template>
  <div class="dashboard">
    <DashboardSidebar class="aside"/>
    <div class="router-view">
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 768px){
  .dashboard {
    display: flex;
  }
  .dashboard .aside{
    max-width: 250px;
    flex: 0;
  }
  .dashboard .router-view {
    flex:1;
  }
}
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
