<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const routeName = computed(() => route.name)
const paramsName = computed(() => route.params.type)
</script>

<template>
  <section class="breadcrumb bg-primary text-white">
    <ul class="container flex align-center gap-1">
      <ListItem>
        <RouterLink to="/">Home</RouterLink>
      </ListItem>
      <ListItem>{{ routeName }}</ListItem>
      <ListItem v-if="paramsName">{{ paramsName }}</ListItem>
    </ul>
  </section>
</template>


<style scoped>
.breadcrumb {
  padding: 8rem 0 3rem 0;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1733503747506-773e56e4078f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      no-repeat center / 100%;
  /* background: var(--secondary-color); */
}
.breadcrumb ul {
  list-style: none;
  font-size: 1rem;
  padding: 0;
}
.breadcrumb ul li a {
  color: var(--primary-color);
  text-decoration: none;
}
.breadcrumb ul li:hover a {
  text-decoration: underline;
}
.breadcrumb ul li:not(:last-child)::after {
  content: "/";
  font-family: monospace;
  padding-left: 1rem;
}

@media (min-width: 768px) {
  .breadcrumb ul {
    font-size: 1.5rem;
  }
}
</style>
