<script setup>
import 'animate.css';
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';
import { ref } from 'vue'
import BannerSection from '@/zems/front/Components/Section/BannerSection.vue';
import CategorySection from '@/zems/front/Components/Section/CategorySection.vue';
import FeaturedCoupon from '@/zems/front/Components/Section/FeaturedCoupon.vue';
import ByCompany from '@/zems/front/Components/Section/ByCompany.vue';
// import ExclusiveCoupon from '@/zems/front/Components/Section/ExclusiveCoupon.vue';
import TestimonialSection from '@/zems/front/Components/Section/TestimonialSection.vue';
import NewsLetterSection from '@/zems/front/Components/Section/NewsLetterSection.vue';
import TimelineSection from '@/zems/front/Components/Section/TimelineSection.vue';
import EndingSoon from '@/zems/front/Components/Section/EndingSoon.vue';
import PricingSection from '../Components/Section/PricingSection.vue';
import AboutUs from '../Components/Section/AboutUs.vue';
import StatisticsSection from '../Components/Section/StatisticsSection.vue';
import ModalDetailsModal from '../Components/Widgets/ModalDetailsModal.vue';

const { isLoading, data } = useQuery({
  queryKey: ['home'],
  queryFn: async () => {
    {
      const res = await axios.get('https://coupon.zems.uk/api/home')
      return res.data
    }
  }
})
// popup logic
const isModalOpen = ref(false)
const handleCloseModal = () => {
  isModalOpen.value = false;
  console.log(isModalOpen.value);

}
const handleOpenModal = () => {
  isModalOpen.value = true
  console.log(isModalOpen.value);
}

</script>

<template>
  <ModalDetailsModal :isModalOpen="isModalOpen" :handleCloseModal="handleCloseModal"/>
  <BannerSection />
  <CategorySection :categories="data?.cat" :isLoading="isLoading" />
  <EndingSoon :ending="data?.ending" :isLoading="isLoading" :handleOpenModal="handleOpenModal" />
  <AboutUs />
  <FeaturedCoupon :handleOpenModal="handleOpenModal"
  :featured="data?.featured" :isLoading="isLoading" />
  <TimelineSection />
  <ByCompany />
  <PricingSection />
  <StatisticsSection/>
  <TestimonialSection />
  <NewsLetterSection />
</template>
