<script setup>
import BreadcrumbSection from '@/components/widgets/BreadcrumbSection.vue';
import { useQuery } from '@tanstack/vue-query';
import CompanyBanner from '../Components/Section/CompanyBanner.vue';
import CouponCard from '../Components/Widgets/CouponCard.vue';
import axios from 'axios';
const {data: couponsData = []} = useQuery({
  queryKey: ['coupon'],
  queryFn: async()=> {
    const res = await axios.get('https://coupon.zems.uk/api/coupon');
    return res?.data
  }
})
</script>

<template>
  <div class="company-details">
    <BreadcrumbSection/>
    <!-- Banner Section -->
    <CompanyBanner />
    <div class="container">
      <div class="medium-2 large-3 gap-1 medium-gap-2 my-5">
        <CouponCard v-for="couponData in couponsData" :key=couponData.id :couponData="couponData"/>
      </div>
    </div>
  </div>
</template>


<style></style>
