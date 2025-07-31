<script setup>
import { useQuery } from '@tanstack/vue-query';
import HeroThree from '../Components/Section/HeroThree.vue';
import axios from 'axios';
import CategorySection from '../Components/Section/CategorySection.vue';
import EndingSoon from '../Components/Section/EndingSoon.vue';
import AboutUs from '../Components/Section/AboutUs.vue';
import FeaturedCoupon from '../Components/Section/FeaturedCoupon.vue';
import TimelineSection from '../Components/Section/TimelineSection.vue';
import ByCompany from '../Components/Section/ByCompany.vue';
import PricingSection from '../Components/Section/PricingSection.vue';
import StatisticsSection from '../Components/Section/StatisticsSection.vue';
import TestimonialSection from '../Components/Section/TestimonialSection.vue';
import NewsLetterSection from '../Components/Section/NewsLetterSection.vue';
import AboutThree from '../Components/Section/AboutThree.vue';

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
  <HeroThree/>
  <CategorySection :categories="data?.cat" :isLoading="isLoading" />
  <AboutThree/>
    <FeaturedCoupon :handleOpenModal="handleOpenModal" :isModalOpen="isModalOpen" :handleCloseModal="handleCloseModal"
  :featured="data?.featured" :isLoading="isLoading" />
  <EndingSoon :handleOpenModal="handleOpenModal" :isModalOpen="isModalOpen" :handleCloseModal="handleCloseModal"
    :ending="data?.ending" :isLoading="isLoading" />
  <AboutUs />

  <TimelineSection />
  <ByCompany />

  <!-- <ExclusiveCoupon/> -->
  <PricingSection />
  <StatisticsSection/>
  <TestimonialSection />
  <NewsLetterSection />
</template>
