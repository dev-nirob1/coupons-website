<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  company: {
    type: Object,
    required: false,
    // default: null
  }
})
</script>
<template>
  <RouterLink class="company-card" :to="`/companies/${company.name}`">
    <BaseImage :image="company.logo" />
    <BaseTitle>{{ company.name }}</BaseTitle>
  </RouterLink>
</template>

<style scoped>
.company-card {
  background-color: var(--white-color);
  display: inline-block;
  text-decoration: none;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease-in-out;
}
.company-card h3 {
  margin: 0.5rem;
}
.company-card img {
  height: 80px;
  width: 80px;
}
.company-card:hover {
  transform: translateY(-10px);
}
</style>
