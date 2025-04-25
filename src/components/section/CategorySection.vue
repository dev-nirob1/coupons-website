<script setup>
import CategoryCard from '../widgets/CategoryCard.vue';
defineProps({
  categories:{
    type: Array
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
      <!-- Categories container -->
      <div data-zems="animate__fadeInUp" class="medium-2 large-5 gap-2 animate__animated animate__delay-2s">
        <CategoryCard v-for="category in categories" :category="category" :key="category.id" />
      </div>
    </div>
  </section>
</template>

<style scoped>
#category{
  transition: all .3s ease;
}
hr {
  flex: 1;
  border: none;
  margin: 15px 0;
  border-bottom: 3px solid var(--primary-color);
}
</style>
