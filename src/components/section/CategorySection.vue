<script setup>
import { ref } from 'vue';
import BaseTitle from '../element/BaseTitle.vue';
// import SubTitle from '../element/SubTitle.vue';
import CategoryCard from '../widgets/CategoryCard.vue';

// Sample categories data
const categories = ref([
  { id: 1, name: 'Fashion', image: '/categories/fashion.png', count: 245, },
  { id: 2, name: 'Electronics', image: '/categories/electronics.png', count: 189 },
  { id: 3, name: 'Home & Garden', image: '/categories/garden.png', count: 132 },
  { id: 4, name: 'Food & Grocery', image: '/categories/grocery.png', count: 98 },
  { id: 5, name: 'Travel', image: '/categories/travel.png', count: 76 },
  { id: 6, name: 'Health & Beauty', image: '/categories/health.png', count: 167 },
  { id: 7, name: 'Sports & Outdoors', image: '/categories/sports.png', count: 112 },
  { id: 8, name: 'Pet Supplies', image: '/categories/pet.png', count: 54 },
]);

</script>
<template>
  <section class="py-2">
    <div class="container">
      <BaseTitle class="text-dark flex">
        Browse <span class="text-secondary">Categories</span>
        <hr>
      </BaseTitle>
      <!-- Categories container -->
      <div data-zems="animate__fadeInUp" class="medium-2 large-4 gap-2 animate__animated">
        <CategoryCard v-for="category in categories" :category="category" :key="category.id" />
      </div>
    </div>
  </section>
</template>

<style scoped>
hr {
  flex: 1;
  border: none;
  margin: 15px 0;
  border-bottom: 3px solid var(--primary-color);
}
</style>
