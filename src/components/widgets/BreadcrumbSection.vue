<script setup>
defineProps({
  routeName: {
    type: String
  }
})
</script>

<template>
  <section class="breadcrumb bg-light py-2">
    <ul class="container flex align-center gap-1">
      <ListItem><RouterLink>Home</RouterLink></ListItem>
      <ListItem>{{ routeName }}</ListItem>
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
