<script setup>
import { ref } from 'vue';
import BaseTitle from '../element/BaseTitle.vue';
import SubTitle from '../element/SubTitle.vue';
import BaseButton from '../element/BaseButton.vue';
import CategoryCard from '../widgets/CategoryCard.vue';
import InputField from '../element/InputField.vue';

// Sample categories data
const categories = ref([
  { id: 1, name: 'Fashion', icon: '👗', count: 245, },
  { id: 2, name: 'Electronics', icon: '📱', count: 189 },
  { id: 3, name: 'Home & Garden', icon: '🏠', count: 132 },
  { id: 4, name: 'Food & Grocery', icon: '🍎', count: 98 },
  { id: 5, name: 'Travel', icon: '✈️', count: 76 },
  { id: 6, name: 'Health & Beauty', icon: '💄', count: 167 },
  { id: 7, name: 'Sports & Outdoors', icon: '⚽', count: 112 },
  { id: 8, name: 'Pet Supplies', icon: '🐶', count: 54 },
]);

</script>
<template>
  <section class="bg-light py-2 my-5">
    <div class="container">
      <BaseTitle class="text-center text-dark">Browse Categories</BaseTitle>
      <SubTitle class="text-center text-light">Find the best deals in your favorite categories</SubTitle>

      <!-- Filter Controls -->
      <div class="filter-controls">
        <div class="flex align-center gap-1">
          <BaseButton>All Categories</BaseButton>
          <BaseButton>Most Popular</BaseButton>
          <BaseButton>Newest</BaseButton>
        </div>

        <!-- search input field  -->
        <div class="search-box">
          <InputField type="text" placeholder="Search categories..." />
          <BaseButton class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></BaseButton>
        </div>
      </div>

      <!-- Categories container -->
      <div class="medium-2 large-4 gap-2">
        <CategoryCard v-for="category in categories" :category="category" :key="category.id" />
      </div>
    </div>
  </section>
</template>



<style scoped>
/* Filter Controls */
.filter-controls {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.filter-controls button {
  background-color: var(--white-color);
  border-radius: 1.25rem;
  border: none;
}

/* .search-box {
  position:
} */
.search-box input {
  outline: none;
  border: none;
  border-radius: 1.5rem;
  background-color: var(--white-color);
}

.search-box button {
  position: absolute;
  top: 0;
  right: 0;
}

.search-box {
  position: relative;
  max-width: 350px;
}

.search-btn i {
  width: 15px;
  height: 15px;
}

@media (min-width: 768px) {
  .filter-controls {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
