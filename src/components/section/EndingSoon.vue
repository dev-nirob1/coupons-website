<script setup>
// import { ref } from 'vue';
import CountDown from '../widgets/CountDown.vue';
import BaseTitle from '../element/BaseTitle.vue';
import SubTitle from '../element/SubTitle.vue';
import CouponCard from '../widgets/CouponCard.vue';


</script>

<template>
  <section class="ending-soon mt-5">
    <div class="container">
      <div class="medium-3 gap-2">
        <div class=" flex flex-col justify-center align-center">
          <div class="text-center">
            <BaseTitle>Ending In</BaseTitle>
            <SubTitle>Grab these deals before they expire!</SubTitle>
            <CountDown />
          </div>
        </div>
        <!-- Coupon Cards Grid -->
        <div class="medium-span-2 medium-2 gap-2">
          <div class="left">
            <CouponCard />
            <CouponCard />
          </div>
          <div class="right">
            <CouponCard />
            <CouponCard />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.left { margin-top: 5rem;}
.left .coupon-card,
.right .coupon-card{
  margin-top: 1rem;
}
</style>
