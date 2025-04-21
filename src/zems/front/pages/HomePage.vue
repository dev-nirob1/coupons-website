<script setup>
import 'animate.css';
import BannerSection from '@/components/section/BannerSection.vue';
import ByCompany from '@/components/section/ByCompany.vue';
import CallToAction from '@/components/section/CallToAction.vue';
import CategorySection from '@/components/section/CategorySection.vue';
import EndingSoon from '@/components/section/EndingSoon.vue';
import FeaturedCoupon from '@/components/section/FeaturedCoupon.vue';
import NewsLetterSection from '@/components/section/NewsLetterSection.vue';
import TestimonialSection from '@/components/section/TestimonialSection.vue';
import TimelineSection from '@/components/section/TimelineSection.vue';
import { onMounted, ref } from 'vue';
import ExclusiveCoupon from '@/components/section/ExclusiveCoupon.vue';
const isLoading = ref(true)
const categories = ref([]);
const featured = ref([]);
const ending = ref([]);

const fetchHomeData = async () => {
  try {
    const res = await fetch('https://coupon.zems.uk/api/home');
    const data = await res.json();
    // console.log(data);
    // console.log(data?.cat);
    categories.value = data.cat;
    featured.value = data.featured;
    ending.value = data.ending;
    // set loading value to false
    isLoading.value = false;
  } catch (error) {
    // set loading value to false
    isLoading.value = false;
    console.log('error while fetching home page data', error);
  }
}
onMounted(() => {
  fetchHomeData()
})
</script>

<template>
  <BannerSection />
  <CategorySection :categories="categories" />
  <FeaturedCoupon :featured="featured" />
  <ByCompany />
  <EndingSoon :ending="ending" />
  <ExclusiveCoupon/>
  <TimelineSection />
  <TestimonialSection />
  <NewsLetterSection />
  <CallToAction />
</template>
