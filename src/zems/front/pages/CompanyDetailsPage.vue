<script setup>
import { useQuery } from '@tanstack/vue-query';
import CompanyBanner from '../Components/Section/CompanyBanner.vue';
import CouponCard from '../Components/Widgets/CouponCard.vue';
import axios from 'axios';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import PaginationButtons from '@/components/widgets/PaginationButtons.vue';

const currentPage = ref(1) //currentPage
const route = useRoute() //route

// fetch function with page number
const fetchData = async (pageNumber) => {
  const url = `https://coupon.zems.uk/api/coupon_list?page=${pageNumber}`
  const res = await axios.get(url)
  return res?.data
}

// fetch using tanstack query
const { data: couponsData = {} } = useQuery({
  queryKey: () => ['coupon_list', currentPage.value],
  queryFn: () => fetchData(currentPage.value)
})

watchEffect(() => {
  if (route?.query?.p) {
    currentPage.value = route?.query?.p
  }
  fetchData(currentPage.value)
  console.log(currentPage.value);
})

</script>

<template>
  <div class="company-details">
    <!-- Banner Section -->
    <CompanyBanner />
    <div class="container py-3">
      <div class="medium-2 large-3 gap-2">
        <CouponCard v-for="couponData in couponsData?.data" :key=couponData.id :couponData="couponData" />
      </div>
      <PaginationButtons :currentPage="currentPage" :couponsData="couponsData" :route="route"/>
    </div>
  </div>
</template>

