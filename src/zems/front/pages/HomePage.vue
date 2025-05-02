<script setup>
import 'animate.css';
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';
import BannerSection from '@/zems/front/Components/Section/BannerSection.vue';
import CategorySection from '@/zems/front/Components/Section/CategorySection.vue';
import FeaturedCoupon from '@/zems/front/Components/Section/FeaturedCoupon.vue';
import ByCompany from '@/zems/front/Components/Section/ByCompany.vue';
import ExclusiveCoupon from '@/zems/front/Components/Section/ExclusiveCoupon.vue';
import TestimonialSection from '@/zems/front/Components/Section/TestimonialSection.vue';
import NewsLetterSection from '@/zems/front/Components/Section/NewsLetterSection.vue';
import TimelineSection from '@/zems/front/Components/Section/TimelineSection.vue';
import EndingSoon from '@/zems/front/Components/Section/EndingSoon.vue';

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
  <CategorySection :categories="data?.cat" :isLoading="isLoading"/>
  <FeaturedCoupon :featured="data?.featured" :isLoading="isLoading" />
  <ByCompany />
  <EndingSoon :ending="data?.ending" :isLoading="isLoading" />
  <ExclusiveCoupon/>
  <TimelineSection />
  <TestimonialSection />
  <NewsLetterSection />
</template>
