<script setup>
import { useQuery } from '@tanstack/vue-query';
import HeroTwo from '../Components/Section/HeroTwo.vue';

import axios from 'axios';
import EndingSoon from '../Components/Section/EndingSoon.vue';
import CategorySection from '../Components/Section/CategorySection.vue';
import AboutUs from '../Components/Section/AboutUs.vue';
import FeaturedCoupon from '../Components/Section/FeaturedCoupon.vue';
import TimelineSection from '../Components/Section/TimelineSection.vue';
import ByCompany from '../Components/Section/ByCompany.vue';
import PricingSection from '../Components/Section/PricingSection.vue';
import TestimonialSection from '../Components/Section/TestimonialSection.vue';
import NewsLetterSection from '../Components/Section/NewsLetterSection.vue';
import StatisticsTwo from '../Components/Section/StatisticsTwo.vue';
import AboutTwo from '../Components/Section/AboutTwo.vue';
const { isLoading, data } = useQuery({
  queryKey: ['home'],
  queryFn: async () => {
    {
      const res = await axios.get('https://coupon.zems.uk/api/home')
      return res.data
    }
  }
})
</script>

<template>
  <HeroTwo/>
   <CategorySection :categories="data?.cat" :isLoading="isLoading" />
  <EndingSoon :handleOpenModal="handleOpenModal" :isModalOpen="isModalOpen" :handleCloseModal="handleCloseModal"
    :ending="data?.ending" :isLoading="isLoading" />
  <AboutUs />
  <AboutTwo/>
  <FeaturedCoupon :handleOpenModal="handleOpenModal" :isModalOpen="isModalOpen" :handleCloseModal="handleCloseModal"
  :featured="data?.featured" :isLoading="isLoading" />
  <TimelineSection />
  <ByCompany />

  <!-- <ExclusiveCoupon/> -->
  <PricingSection />
  <StatisticsTwo/>
  <TestimonialSection />
  <NewsLetterSection />
</template>
