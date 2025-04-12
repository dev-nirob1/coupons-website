<script setup>
import FooterSection from '@/components/section/FooterSection.vue';
import HeaderSection from '@/components/section/HeaderSection.vue';
import { onUpdated } from 'vue';
import { RouterView } from 'vue-router';
import { zems_animate } from '@/plugins/zems_animate';

onUpdated(()=>{
  zems_animate()
})
</script>

<template>
  <HeaderSection/>
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
