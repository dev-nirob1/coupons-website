<script setup>
import BreadcrumbSection from '@/components/widgets/BreadcrumbSection.vue';
import CategoryCard from '@/components/widgets/CategoryCard.vue';
import { onMounted, ref } from 'vue';

const categories = ref([])

const url = 'https://coupon.zems.uk/api/category'; //url
// fetch function
const fetchCategory = async()=> {
  const res = await fetch(url);
  const data = await res.json();
  categories.value = data
}
onMounted(()=> {
  fetchCategory()
})

</script>

<template>
  <div>
    <BreadcrumbSection />
    <section class="container py-2 medium-3 large-4 gap-2">
      <CategoryCard v-for="category in categories" :category="category" :key="category.id"/>
    </section>
  </div>
</template>
