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
// import PopUp from '@/components/widgets/PopUp.vue';

</script>

<template>
  <!-- <PopUp/> -->
  <BannerSection />
  <CategorySection />
  <FeaturedCoupon />
  <ByCompany />
  <EndingSoon />
  <TestimonialSection/>
  <NewsLetterSection/>
  <CallToAction/>
</template>
