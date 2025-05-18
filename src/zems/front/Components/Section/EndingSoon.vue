<script setup>
import CouponCard from '@/zems/front/Components/Widgets/CouponCard.vue';
import CountDown from './CountDown.vue';
import ClockCompo from '../Widgets/ClockCompo.vue';
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
    <div class="container">
      <div class="medium-2 large-3 gap-2">
        <div class="ending-timer">
          <div class="text">
            <BaseTitle>Ending In</BaseTitle>
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
  position:relative;
  padding: 3rem .5rem;
  color: var(--white-color);
}
.ending-soon .ending-timer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.text{
  z-index: 3;
}

.ending-soon .sub-title {
  margin-top: .5rem;
}

.masonry-item {
  margin-bottom: 2rem;
}
.ending-soon .card-footer .circle-1,
.ending-soon .card-footer .circle-2 {
  background-color: var(--secondary-color);
}

@media (min-width: 768px) {
  .ending-soon {
    padding: 4rem .5rem;
  }
}

@media (min-width: 992px) {
  .ending-soon {
    padding: 5rem .5rem;
  }

  .masonry-grid {
    columns: 2;
    row-gap: 2rem;
    column-gap: 2rem;
  }

  .masonry-item:nth-child(1) {
    margin-top: 5rem;
  }
}
</style>
