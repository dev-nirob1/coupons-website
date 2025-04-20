<script setup>
import { onMounted, ref } from 'vue';
import BaseTitle from '../element/BaseTitle.vue';
import CategoryCard from '../widgets/CategoryCard.vue';
const categories = ref([]);
const isLoading = ref(true);

// data fetching function
const fetchCategories = async () => {
  try {
    const res = await fetch('https://coupon.zems.uk/api/category');
    const jsonData = await res.json()
    categories.value = jsonData;
    isLoading.value = false;
    // console.log(categories.value);
  } catch (error) {
    isLoading.value = false;
    console.log('Error while fetching Categories', error);
  }
}
onMounted(() => {
  fetchCategories()
})

</script>

<template>
  <section class="py-2">
    <div class="container">
      <BaseTitle class="text-dark flex">
        Browse <span class="text-secondary">Categories</span>
        <hr>
      </BaseTitle>
      <!-- Categories container -->
      <div data-zems="animate__fadeInUp" class="medium-2 large-4 gap-2 animate__animated animate__delay-2s">
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
