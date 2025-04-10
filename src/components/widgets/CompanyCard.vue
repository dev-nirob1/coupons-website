<script setup>
import { RouterLink } from 'vue-router';
import BaseImage from '../element/BaseImage.vue';
import BaseTitle from '../element/BaseTitle.vue';

defineProps({
  company: {
    type: Object
  }
})
</script>
<template>
  <RouterLink class="company-card" to="/">
    <BaseImage :image="company.logo"/>
    <BaseTitle>{{ company.name }}</BaseTitle>
  </RouterLink>
</template>
<style scoped>
.company-card{
  background-color: var(--white-color);
  display: inline-block;
  text-decoration: none;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  transition: all .3s ease-in-out;
}
.company-card:hover{
  transform: translateY(-10px);
}
.company-card h3 {
  margin: 10px;
}
.company-card img {
  height: 80px;
  width: 80px;
}
</style>
