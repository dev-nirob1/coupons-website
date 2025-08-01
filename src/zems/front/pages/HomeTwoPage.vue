<script setup>
import { useQuery } from '@tanstack/vue-query';
import HeroTwo from '@zems/front/Components/Section/HeroTwo.vue';

import axios from 'axios';
import EndingSoon from '@zems/front/Components/Section/EndingSoon.vue';
import CategorySection from '@zems/front/Components/Section/CategorySection.vue';
import AboutUs from '@zems/front/Components/Section/AboutUs.vue';
import FeaturedCoupon from '@zems/front/Components/Section/FeaturedCoupon.vue';
import TimelineSection from '@zems/front/Components/Section/TimelineSection.vue';
import ByCompany from '@zems/front/Components/Section/ByCompany.vue';
import PricingSection from '@zems/front/Components/Section/PricingSection.vue';
import TestimonialSection from '@zems/front/Components/Section/TestimonialSection.vue';
import NewsLetterSection from '@zems/front/Components/Section/NewsLetterSection.vue';
import StatisticsTwo from '@zems/front/Components/Section/StatisticsTwo.vue';
import AboutTwo from '@zems/front/Components/Section/AboutTwo.vue';

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
  <HeroTwo />
  <CategorySection :categories="data?.cat" :isLoading="isLoading" />
  <EndingSoon :handleOpenModal="handleOpenModal" :ending="data?.ending" :isLoading="isLoading" />
  <AboutUs />
  <AboutTwo />
  <FeaturedCoupon :handleOpenModal="handleOpenModal" :featured="data?.featured" :isLoading="isLoading" />
  <TimelineSection />
  <ByCompany />
  <PricingSection />
  <StatisticsTwo />
  <TestimonialSection />
  <NewsLetterSection />
</template>
