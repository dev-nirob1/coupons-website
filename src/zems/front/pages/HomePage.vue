<script setup>
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';
import BannerSection from '@zems/front/Components/Section/BannerSection.vue';
import CategorySection from '@zems/front/Components/Section/CategorySection.vue';
import FeaturedCoupon from '@zems/front/Components/Section/FeaturedCoupon.vue';
import ByCompany from '@zems/front/Components/Section/ByCompany.vue';
import TestimonialSection from '@zems/front/Components/Section/TestimonialSection.vue';
import NewsLetterSection from '@zems/front/Components/Section/NewsLetterSection.vue';
import TimelineSection from '@zems/front/Components/Section/TimelineSection.vue';
import EndingSoon from '@zems/front/Components/Section/EndingSoon.vue';
import PricingSection from '@zems/front/Components/Section/PricingSection.vue';
import AboutUs from '@zems/front/Components/Section/AboutUs.vue';
import StatisticsSection from '@zems/front/Components/Section/StatisticsSection.vue';
import CouponDetailsModal from '@zems/front/Components/Widgets/CouponDetailsModal.vue';
import { useModalStore } from '@/stores/modalStore';

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
  <BannerSection />
  <CategorySection :categories="data?.cat" :isLoading="isLoading" />
  <EndingSoon :ending="data?.ending" :isLoading="isLoading" />
  <AboutUs />
  <FeaturedCoupon :featured="data?.featured" :isLoading="isLoading" />
  <TimelineSection />
  <ByCompany />
  <PricingSection />
  <StatisticsSection />
  <TestimonialSection />
  <NewsLetterSection />
</template>
