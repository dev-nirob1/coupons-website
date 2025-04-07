<script setup>
import FooterSection from '@/components/section/FooterSection.vue';
import HeaderSection from '@/components/section/HeaderSection.vue';
import { RouterView } from 'vue-router';

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
