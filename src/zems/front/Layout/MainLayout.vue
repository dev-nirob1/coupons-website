<script setup>
import FooterSection from '@/components/section/FooterSection.vue';
import HeaderSection from '@/components/section/HeaderSection.vue';
// import {  onMounted } from 'vue';
import { RouterView, useRoute } from 'vue-router';
// import { zems_animate } from '@/plugins/zems_animate';

// onMounted(()=>{
//   zems_animate()
// })

const route = useRoute();
// const routeName = route.name
</script>

<template>
  <HeaderSection v-if="route.name !=='login' && route.name !=='register'" />
  <main>
    <RouterView />
  </main>
  <FooterSection v-if="route.name !=='login' && route.name !=='register'"/>
</template>

<style scoped>
main {
  min-height: calc(100vh - 70px);
}
</style>
