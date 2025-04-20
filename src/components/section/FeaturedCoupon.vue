<script setup>
import CouponCard from '../widgets/CouponCard.vue';

defineProps({
  featured:{
    type: Array
  }
})
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
    <div class="medium-3 gap-2 animate__animated animate__fadeInUp" data-zems="animate__fadeInUp">
      <CouponCard v-for="couponData in featured" :couponData="couponData" :key="couponData.id"/>

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
