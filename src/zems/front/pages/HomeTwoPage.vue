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
import { useModalStore } from '@/stores/modalStore';
import CouponDetailsModal from '@zems/front/Components/Widgets/CouponDetailsModal.vue';

const { isLoading, data } = useQuery({
  queryKey: ['home'],
  queryFn: async () => {
    {
      const res = await axios.get('https://coupon.zems.uk/api/home')
      return res.data
    }
  }
})

const modalStore = useModalStore()

</script>

<template>
  <CouponDetailsModal :isModalOpen="modalStore.isModalOpen" :handleCloseModal="modalStore.handleCloseModal" />

  <HeroTwo />
  <CategorySection :categories="data?.cat" :isLoading="isLoading" />
  <EndingSoon :ending="data?.ending" :isLoading="isLoading" />
  <AboutUs />
  <AboutTwo />
  <FeaturedCoupon :featured="data?.featured" :isLoading="isLoading" />
  <TimelineSection />
  <ByCompany />
  <PricingSection />
  <StatisticsTwo />
  <TestimonialSection />
  <NewsLetterSection />
</template>
