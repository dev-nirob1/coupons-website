<script setup>
import BreadcrumbSection from '@/components/widgets/BreadcrumbSection.vue';
import { useQuery } from '@tanstack/vue-query';
import CompanyBanner from '../Components/Section/CompanyBanner.vue';
import CouponCard from '../Components/Widgets/CouponCard.vue';
import axios from 'axios';
import { computed, ref } from 'vue';

const currentPage = ref(1)

const fetchData = async (pageNumber) => {
  const url = `https://coupon.zems.uk/api/coupon_list?page=${pageNumber}`
  const res = await axios.get(url)
  return res?.data
}

const { data: couponsData } = useQuery({
  queryKey: () => ['coupon_list', currentPage.value],
  queryFn: () => fetchData(currentPage.value)
})

const paginationLinks = computed(() => {
  return couponsData.value?.links || [];
});

console.log((couponsData?.links));
</script>

<template>
  <div class="company-details">
    <BreadcrumbSection />
    <!-- Banner Section -->
    <CompanyBanner />
    <div class="container">
      <div class="medium-2 large-3 gap-1 medium-gap-2 my-5">
        <CouponCard v-for="couponData in couponsData?.data" :key=couponData.id :couponData="couponData"/>
      </div>
      <div class="btn-container">
        <BaseButton v-for="(link, i) in paginationLinks" :key="i">{{ link.label }}</BaseButton>
      </div>
    </div>
  </div>
</template>


<style scoped>
.btn-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
}

.btn-container button {
  background-color: #1976d2;
  color: white;
}
</style>
