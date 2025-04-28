<script setup>
import FooterSection from '@/components/section/FooterSection.vue';
import HeaderSection from '@/components/section/HeaderSection.vue';
import NavbarSection from '@/components/section/NavbarSection.vue';
// import {  onMounted } from 'vue';
import { RouterView } from 'vue-router';
// import { zems_animate } from '@/plugins/zems_animate';

// onMounted(()=>{
//   zems_animate()
// })

</script>

<template>
  <HeaderSection />
  <!-- <NavbarSection/> -->
  <main>
    <RouterView />
  </main>
  <FooterSection/>
</template>

<style scoped>
main {
  min-height: calc(100vh - 70px);
}
</style>
