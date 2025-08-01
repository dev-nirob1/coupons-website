<script setup>
import CouponCard from '@zems/front/Components/Widgets/CouponCard.vue';
import CountDown from '@zems/front/Components/Widgets/CountDown.vue';
import ClockCompo from '@zems/front/Components/Widgets/ClockCompo.vue';
defineProps({
  ending: {
    type: Array
  },
  isLoading: {
    type: Boolean
  },
  isModalOpen: {
    type: Boolean
  },
  handleOpenModal: {
    type: Function
  }
})
</script>

<template>
  <section class="ending-soon bg-secondary">
    <div class="container relative">
      <div class="ending-image">
        <BaseImage src="/ending-soon.svg" alt="image"/>
      </div>

      <div class="large-3 gap-1 medium-gap-2 align-center">
        <div class="text-center large-span-1">
          <div>
            <BaseTitle>Ending Soon</BaseTitle>
            <SubTitle class="mb-2">Grab these deals before they expire!</SubTitle>
            <ClockCompo />
            <CountDown />
          </div>
        </div>
        <!-- Coupon Cards Grid -->
        <div class="large-span-2">
          <div class="masonry-grid">
            <div v-for="couponData in ending" :key="couponData.id" class="masonry-item">
              <CouponCard :couponData="couponData" :isModalOpen="isModalOpen" :handleOpenModal="handleOpenModal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ending-soon {
  padding: 3.5rem 0;
  color: var(--white-color);
  overflow: hidden;
}
.ending-soon .ending-image {
  position: absolute;
  opacity: 0.3;
  width: 500px;
  height: 500px;
  left: -10rem;
}
.ending-soon .sub-title {
  margin-top: 0.5rem;
}
.masonry-item {
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
.masonry-grid {
    columns: 2;
    row-gap: 2rem;
    column-gap: 2rem;
  }
  .masonry-item:nth-child(1) {
    margin-top: 5rem;
  }
}

@media (min-width: 992px) {
  .ending-image {
    bottom: -6rem;
  }
}
</style>
