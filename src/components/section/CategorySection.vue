<script setup>
import CategoryCard from '../widgets/CategoryCard.vue';
import LoadingSkeleton from '../widgets/LoadingSkeleton.vue';
defineProps({
  categories: {
    type: Array
  },
  isLoading: {
    type: Boolean
  }
})
</script>

<template>
  <section id="category" class="py-2">
    <div class="container">
      <BaseTitle class="text-dark flex">
        Browse <span class="text-secondary">Categories</span>
        <hr>
      </BaseTitle>
      <!-- loading skeleton  -->
      <div v-if="isLoading" class="medium-2 large-5 gap-2">
        <LoadingSkeleton v-for="(load, i) in 5" :key="i" />
      </div>
      <!-- Categories container -->
      <div v-else class="medium-2 large-5 gap-2">
        <CategoryCard v-for="category in categories" :category="category" :key="category.id" />
      </div>
    </div>
  </section>
</template>

<style scoped>
#category {
  transition: all .3s ease;
}

hr {
  flex: 1;
  border: none;
  margin: 15px 0;
  border-bottom: 3px solid var(--primary-color);
}
</style>
