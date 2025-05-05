<script setup>
defineProps({
  title: {
    type: String
  },
  to: {
    type: String
  },
  linkName: {
    type: String
  }
})
</script>

<template>
  <header class="flex justify-between align-center">
    <div>
      <BaseTitle>{{title}}</BaseTitle>
    </div>
    <RouterLink :to="to" class="btn bg-secondary text-white p-1">
      <i class="fa-solid fa-arrow-left"></i>
      <span>{{linkName}}</span>
    </RouterLink>
  </header>
</template>
