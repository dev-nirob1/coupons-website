<script setup>
import BreadcrumbSection from '@/components/widgets/BreadcrumbSection.vue';
import CategoryCard from '@/components/widgets/CategoryCard.vue';
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

const { isLoading, data: categories = [] } = useQuery({
  queryKey: () => ['category'],
  queryFn: async () => {
    const url = 'https://coupon.zems.uk/api/category'
    const res = await axios.get(url);
    return res?.data
  }
})

</script>

<template>
  <div>
    <BreadcrumbSection />
    <section class="container py-2 medium-3 large-4 gap-2">
      <div v-if="isLoading">loading...</div>
      <CategoryCard v-else v-for="category in categories" :category="category" :key="category.id" />
    </section>
  </div>
</template>
