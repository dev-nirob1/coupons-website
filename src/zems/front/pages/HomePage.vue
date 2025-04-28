<script setup>
import 'animate.css';
import BannerSection from '@/components/section/BannerSection.vue';
import ByCompany from '@/components/section/ByCompany.vue';
import CategorySection from '@/components/section/CategorySection.vue';
import EndingSoon from '@/components/section/EndingSoon.vue';
import FeaturedCoupon from '@/components/section/FeaturedCoupon.vue';
import NewsLetterSection from '@/components/section/NewsLetterSection.vue';
import TestimonialSection from '@/components/section/TestimonialSection.vue';
import TimelineSection from '@/components/section/TimelineSection.vue';
import ExclusiveCoupon from '@/components/section/ExclusiveCoupon.vue';
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

const {isLoading, data } = useQuery ({
  queryKey: ['home'],
  queryFn: async()=> {{
    const res = await axios.get('https://coupon.zems.uk/api/home')
    return res.data
  }}
})

</script>

<template>
  <BannerSection />
  <CategorySection :categories="data?.cat" :isLoading="isLoading" />
  <FeaturedCoupon :featured="data?.featured" :isLoading="isLoading" />
  <ByCompany />
  <EndingSoon :ending="data?.ending" :isLoading="isLoading" />
  <ExclusiveCoupon/>
  <TimelineSection />
  <TestimonialSection />
  <NewsLetterSection />
  <!-- <CallToAction /> -->
</template>
