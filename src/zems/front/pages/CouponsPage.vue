<script setup>
import BreadcrumbSection from '@/components/widgets/BreadcrumbSection.vue';
import LoadingCard from '@/components/widgets/LoadingCard.vue';
import CouponCard from '@/zems/front/Components/Widgets/CouponCard.vue';
import { useRoute } from 'vue-router';
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';
const route = useRoute();

const { isPending: isLoading, data: couponsData = [] } = useQuery({
  queryKey: () => [route.name, route.params.type],
  queryFn: async () => {
    const url = `https://coupon.zems.uk/api/${route.name}${route.params.type ? '/' + route.params.type : ''}`;
    const res = await axios.get(url);
    return res.data.data;
  }
});
</script>


<template>
  <section>
    <BreadcrumbSection />
    <div class="container py-2 medium-py-3 large-py-5">
      <div class="flex justify-end mb-2 pr-1">
        <div class="select">
          <select>
            <option value="sort" disabled>Sort By</option>
            <option value="sort">Newest</option>
            <option value="sort">Older</option>
            <option value="sort">Populer</option>
          </select>
        </div>
      </div>

      <div v-if="!isLoading && couponsData.length < 1">
        <BaseTitle class="text-center">Opps! No Data Found</BaseTitle>
      </div>

      <div class="medium-2 large-3 gap-2">
        <template v-if="isLoading">
          <LoadingCard v-for="(data, i) in 6" :key="i"></LoadingCard>
        </template>

        <template v-else>
          <CouponCard v-for="couponData in couponsData" :couponData="couponData" :key="couponData.id" />
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.select select {
  background-color: var(--white-color);
  border: var(--border-color);
  box-shadow: var(--box-shadow);
}
</style>
