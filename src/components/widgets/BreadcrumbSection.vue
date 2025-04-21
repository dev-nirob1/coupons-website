<script setup>
import { useRoute } from 'vue-router';

// defineProps({
//   routeName: {
//     type: String
//   }
// })
const route = useRoute()
const routeName = route?.name;
const paramsName =  route?.params?.type
console.log(route);
</script>

<template>
  <section class="breadcrumb bg-light py-2">
    <ul class="container flex align-center gap-1">
      <ListItem><RouterLink to="/">Home</RouterLink></ListItem>
      <ListItem>{{ routeName }}</ListItem>
      <ListItem v-if="paramsName">{{ paramsName}}</ListItem>
    </ul>
  </section>
</template>
<style scoped>
.breadcrumb ul {
  list-style: none;
  font-size: 1.5rem;
  padding: 0;
}
.breadcrumb ul li a{
  color: var(--secondary-color);
  text-decoration: none;
}
.breadcrumb ul li:hover a{
  text-decoration: underline;
}
.breadcrumb ul li:not(:last-child)::after{
  content: '/';
  padding-left: 1rem;
}
</style>
