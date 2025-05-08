<script setup>
import 'animate.css';
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';
import { ref } from 'vue'
import PopUp from '@/components/widgets/PopUp.vue'
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
}
const handleOpenModal = () => {
  isModalOpen.value = true
}

</script>

<template>
  <PopUp :handleCloseModal="handleCloseModal" :isModalOpen="isModalOpen">
    <div class="coupon-details">
    <div class="bg-secondary relative">
      <BaseTitle>Ramadan Offer</BaseTitle>
      <div class="discount">
        <BaseTitle tag="h5">20% OFF</BaseTitle>
      </div>
    </div>
    <div>
      <div class="flex align-center">
        <i class="fa-solid fa-stopwatch text-secondary"></i> &nbsp; Exprie date: &nbsp; <p>2025-04-28</p>
      </div>
      <div class="flex align-center">
        <i class="fa-solid fa-tag text-secondary"></i> &nbsp; Category: &nbsp; Ramadan
      </div>
      <div>
        <BaseParagraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates et iusto fuga quidem veniam accusamus pariatur voluptatibus doloribus, soluta necessitatibus suscipit exercitationem libero commodi dignissimos? Voluptate facere nemo tenetur consequuntur!</BaseParagraph>
      </div>
      <BaseParagraph class="text-danger">TODO: Add button for logged-in users (show everywhere except dashboard)</BaseParagraph>
      <BaseButton class="btn bg-secondary width-full text-white">Get Code</BaseButton>
    </div>
    <BaseParagraph class="text-center text-light">
      Terms & Conditions Apply
    </BaseParagraph>
  </div>
  </PopUp>

  <BannerSection />
  <CategorySection :categories="data?.cat" :isLoading="isLoading" />
  <FeaturedCoupon :handleOpenModal="handleOpenModal" :isModalOpen="isModalOpen" :handleCloseModal="handleCloseModal"
    :featured="data?.featured" :isLoading="isLoading" />
  <ByCompany />
  <EndingSoon :handleOpenModal="handleOpenModal" :isModalOpen="isModalOpen" :handleCloseModal="handleCloseModal"
    :ending="data?.ending" :isLoading="isLoading" />
  <!-- <ExclusiveCoupon/> -->
  <PricingSection />
  <AboutUs/>
  <TimelineSection />
  <TestimonialSection />
  <NewsLetterSection />
</template>

<style scoped>
.coupon-details {
  padding: 1.5rem;
}

.coupon-details h3 {
  padding: 2.5rem;
  /* margin: 0; */
  text-align: center;
  color: var(--white-color);
}
.discount {
  position: absolute;
  right: 20px;
  bottom: -50px;
  background-color: var(--alternative-color);
  color: var(--white-color);
  padding: 0 .5rem;
  border-radius: 50%;
}
</style>
