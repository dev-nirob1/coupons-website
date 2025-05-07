<script setup>
import LoadingCard from '@/components/Widgets/LoadingCard.vue';
import { computed } from 'vue';
import CouponCard from '@/zems/front/Components/Widgets/CouponCard.vue';
import CountDown from './CountDown.vue';
const props = defineProps({
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
const leftCoupons = computed(() => props?.ending?.slice(0, 2) ?? []);
const rightCoupons = computed(() => props?.ending?.slice(2, 4) ?? []);
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
        <div class="medium-span-2 medium-2 gap-1 medium-gap-2">
          <div class="left flex flex-col gap-1">
            <template v-if="isLoading">
              <LoadingCard v-for="(l, i) in 2" :key="i" />
            </template>
            <template v-else>
              <CouponCard v-for="couponData in leftCoupons" :couponData="couponData" :key="couponData.id"
                :handleOpenModal="handleOpenModal" :isModalOpen="isModalOpen" />
            </template>
          </div>

          <div class="right flex flex-col gap-1">
            <template v-if="isLoading">
              <LoadingCard v-for="(l, i) in 2" :key="i" />
            </template>
            <template v-else>
              <CouponCard v-for="couponData in rightCoupons" :couponData="couponData" :key="couponData.id"
                :handleOpenModal="handleOpenModal" :isModalOpen="isModalOpen" />
            </template>
          </div>
        </div>


        <div style="border: 1px solid red;" class="medium-span-2 medium-2 gap-1 medium-gap-2">
         <div>
          <h2>Colums</h2>
         </div>
         <div style="height: 200px; border: 5px solid green">
          <h2>Colums 2</h2>
         </div>
         <div style="height: 200px; border: 5px solid green">
          <h2>Colums 2</h2>
         </div>
         <div style="height: 200px; border: 5px solid green">
          <h2>Colums 2</h2>
         </div>
         <div style="height: 200px; border: 5px solid green">
          <h2>Colums 2</h2>
         </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.ending-soon {
  padding: 2rem .5rem;
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

@media (min-width: 768px){
  .ending-soon {
  padding: 4rem .5rem;
}
  .left {
  margin-top: 5rem;
}
}
</style>
