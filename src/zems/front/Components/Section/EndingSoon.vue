<script setup>
import CouponCard from '@/zems/front/Components/Widgets/CouponCard.vue';
import CountDown from './CountDown.vue';
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
// console.log(props);
// console.log(props.ending);
// const leftCoupons = computed(() => props?.ending?.slice(0, 2) ?? []);
// const rightCoupons = computed(() => props?.ending?.slice(2, 4) ?? []);
</script>

<template>
  <section class="ending-soon ">
    <div class="container">
      <div class="medium-3 gap-2">
        <div class=" flex flex-col justify-center align-center">
          <div class="text-center">
            <BaseTitle>Ending In</BaseTitle>
            <SubTitle>Grab these deals before they expire!</SubTitle>
            <div class="clock">
              <div class="hour-hand"></div>
              <div class="minute-hand"></div>
            </div>
            <CountDown />
          </div>
        </div>
        <!-- Coupon Cards Grid -->
        <div class="medium-span-2">
          <div class="masonry-grid">
            <CouponCard v-for="couponData in ending" :key="couponData.id" :couponData="couponData"
              class="masonry-item" :isModalOpen="isModalOpen" :handleOpenModal="handleOpenModal" />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.masonry-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: masonry;
  align-items: start;
  grid-auto-flow: dense;
  grid-template-columns: repeat(2, 1fr);
}

.masonry-item {
  width: 100%;
}

.first-col {
  margin-top: 3rem;
}

.ending-soon {
  padding: 5rem .5rem;
  background-color: var(--secondary-color);
}
.ending-soon .card-footer .circle-1,
.ending-soon .card-footer .circle-2{
  background-color: var(--secondary-color);
}
.ending-soon h3 {
  margin-bottom: 0;
}

.ending-soon h5 {
  margin-top: 15px;
}

.clock {
  width: 150px;
  height: 150px;
  border: 6px solid #333;
  border-radius: 50%;
  position: relative;
  margin: 0 auto;
}

.clock::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  background: #333;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hour-hand {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4px;
  height: 40px;
  background: var(--light-color);
  transform-origin: bottom;
  transform: translate(-50%, -100%) rotate(30deg);
}

.minute-hand {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 3px;
  height: 60px;
  background: var(--light-color);
  transform-origin: bottom;
  transform: translate(-50%, -100%) rotate(0deg);
  animation: spin 10s linear infinite;
}

@keyframes spin {
  to {
    transform: translate(-50%, -100%) rotate(360deg);
  }
}

@media (min-width: 768px) {
  .ending-soon {
    padding: 4rem .5rem;
  }

  .left {
    margin-top: 5rem;
  }
}
</style>
