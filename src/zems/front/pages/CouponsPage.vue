<script setup>
import { useRoute } from 'vue-router';
import { useQuery } from '@tanstack/vue-query';
import BreadcrumbSection from '@/components/widgets/BreadcrumbSection.vue';
import CouponCard from '@/components/widgets/CouponCard.vue';

const route = useRoute();

const { isPending, isError, data: couponsData, error } = useQuery({
  queryKey: ()=> ['coupon_list', route.params.type],
  queryFn: async () => {
    const url = `https://coupon.zems.uk/api/coupon_list${route.params.type ? '/' + route.params.type : ''}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.data || [];
  }
});
</script>


<template>
  <section>
    <div v-if="isPending">loading</div>
    <BreadcrumbSection />
    <div class="container py-2">
      <div class="flex justify-end mb-2">
        <div class="select">
          <select>
            <option value="sort" disabled>Sort By</option>
            <option value="sort">Newest</option>
            <option value="sort">Older</option>
            <option value="sort">Populer</option>
          </select>
        </div>
      </div>
      <div class=" medium-2 large-3 gap-2">
        <CouponCard v-for="couponData in couponsData" :couponData="couponData" :key="couponData.id" />
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
