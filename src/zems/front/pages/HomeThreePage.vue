<script setup>
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';
import HeroThree from '@zems/front/Components/Section/HeroThree.vue';
import CategorySection from '@zems/front/Components/Section/CategorySection.vue';
import EndingSoon from '@zems/front/Components/Section/EndingSoon.vue';
import AboutUs from '@zems/front/Components/Section/AboutUs.vue';
import FeaturedCoupon from '@zems/front/Components/Section/FeaturedCoupon.vue';
import TimelineSection from '@zems/front/Components/Section/TimelineSection.vue';
import ByCompany from '@zems/front/Components/Section/ByCompany.vue';
import PricingSection from '@zems/front/Components/Section/PricingSection.vue';
import StatisticsSection from '@zems/front/Components/Section/StatisticsSection.vue';
import TestimonialSection from '@zems/front/Components/Section/TestimonialSection.vue';
import NewsLetterSection from '@zems/front/Components/Section/NewsLetterSection.vue';
import AboutThree from '@zems/front/Components/Section/AboutThree.vue';

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
  <HeroThree />
  <CategorySection :categories="data?.cat" :isLoading="isLoading" />
  <AboutThree />
  <FeaturedCoupon :handleOpenModal="handleOpenModal" :featured="data?.featured" :isLoading="isLoading" />
  <EndingSoon :handleOpenModal="handleOpenModal" :ending="data?.ending" :isLoading="isLoading" />
  <AboutUs />
  <TimelineSection />
  <ByCompany />
  <PricingSection />
  <StatisticsSection />
  <TestimonialSection />
  <NewsLetterSection />
</template>
