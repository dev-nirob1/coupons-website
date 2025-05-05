<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const routeName = computed(() => route.name)
const paramsName = computed(() => route.params.type)
</script>

<template>
  <section class="breadcrumb bg-light">
    <ul class="container flex align-center gap-1">
      <ListItem><RouterLink to="/">Home</RouterLink></ListItem>
      <ListItem>{{ routeName }}</ListItem>
      <ListItem v-if="paramsName">{{ paramsName}}</ListItem>
    </ul>
  </section>
</template>
<style scoped>
.breadcrumb{
  margin-top: 6rem;
  padding: 2rem .5rem;
}
.breadcrumb ul {
  list-style: none;
  font-size: 1rem;
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
@media (min-width: 768px){
  .breadcrumb ul {
  font-size: 1.5rem;
}
}
</style>
