<script setup lang="ts">
import BaseParagraph from '../element/BaseParagraph.vue';
import BaseTitle from '../element/BaseTitle.vue';
import CouponCard from '../widgets/CouponCard.vue';

</script>

<template>
  <section class="container py-5">
    <!-- Section Header -->
    <div class="text-center mb-3">
      <BaseTitle>Featured Coupons</BaseTitle>
      <BaseParagraph>Exclusive discounts for you</BaseParagraph>
    </div>
    <!-- Coupon Grid -->
    <div class="medium-3 gap-2">
      <CouponCard/>
      <CouponCard/>
      <CouponCard/>

    </div>
  </section>
</template>



<style scoped>

</style>
