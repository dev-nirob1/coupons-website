<script setup>
import BaseTitle from '../element/BaseTitle.vue';
import CouponCard from '../widgets/CouponCard.vue';

</script>

<template>
  <section class="featured-coupon container py-2">
    <!-- Section Header -->
    <div class="mb-3">
      <BaseTitle class="flex">Featured
        <span class="text-secondary">Coupons</span>
        <hr>
      </BaseTitle>
    </div>
    <!-- Coupon Grid -->
    <div class="medium-3 gap-2">
      <CouponCard />
      <CouponCard />
      <CouponCard />
      <CouponCard />
      <CouponCard />
      <CouponCard />

    </div>
  </section>
</template>
<style scoped>
.featured-coupon h3 {
  margin-bottom: 10px;
}

hr {
  flex: 1;
  border: none;
  margin: 15px 0;
  border-bottom: 3px solid var(--primary-color);
}
</style>
