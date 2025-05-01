<script setup>
import LoadingSkeleton from '@/components/Widgets/LoadingSkeleton.vue';
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';
import CategoryCard from '@/zems/front/Components/Widgets/CategoryCard.vue';
import BreadcrumbSection from '@/components/Widgets/BreadcrumbSection.vue';

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
      <template v-if="isLoading">
       <LoadingSkeleton v-for="(d, i) in 8" :key="i"/>
      </template>
      <template v-else>
        <CategoryCard v-for="category in categories" :category="category" :key="category.id" />
      </template>
    </section>
  </div>
</template>
