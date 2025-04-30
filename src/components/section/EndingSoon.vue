<script setup>
// import { ref } from 'vue';
import CountDown from '../widgets/CountDown.vue';
import CouponCard from '../widgets/CouponCard.vue';
import { computed } from 'vue';
import LoadingCard from '../widgets/LoadingCard.vue';
const props = defineProps({
  ending: {
    type: Array
  },
  isLoading: {
    type: Boolean
  }
})
console.log(props.ending);
const leftCoupons = computed(() => props?.ending?.slice(0, 2) ?? []);
const rightCoupons = computed(() => props?.ending?.slice(2, 4) ?? []);
</script>

<template>
  <section class="ending-soon my-5">
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
        <div class="medium-span-2 medium-2 gap-2">
          <div class="left">
            <template v-if="isLoading">
              <LoadingCard v-for="(l, i) in 2" :key="i" />
            </template>
            <template v-else>
              <CouponCard v-for="couponData in leftCoupons" :couponData="couponData" :key="couponData.id" />
            </template>
          </div>

          <div class="right">
            <template v-if="isLoading">
              <LoadingCard v-for="(l, i) in 2" :key="i" />
            </template>
            <template v-else>
              <CouponCard v-for="couponData in rightCoupons" :couponData="couponData" :key="couponData.id" />
            </template>
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

/* hour hand */
.hour-hand {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4px;
  height: 40px;
  background: #333;
  transform-origin: bottom;
  transform: translate(-50%, -100%) rotate(30deg);
  /* Fixed at 1 o'clock position */
}

/* Rotating minute hand */
.minute-hand {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 3px;
  height: 60px;
  background: #333;
  transform-origin: bottom;
  transform: translate(-50%, -100%) rotate(0deg);
  animation: spin 10s linear infinite;
}

@keyframes spin {
  to {
    transform: translate(-50%, -100%) rotate(360deg);
  }
}

.left {
  margin-top: 5rem;
}

.left .coupon-card,
.right .coupon-card {
  margin-top: 1rem;
}
</style>
