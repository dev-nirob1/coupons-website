<script setup lang="ts">
import BaseParagraph from '../element/BaseParagraph.vue';
import BaseTitle from '../element/BaseTitle.vue';
import HeroTitle from '../element/HeroTitle.vue';

</script>

<template>
  <div class="coupon-card">
    <div class="flex justify-between align-center gap-1">
      <div>
        <BaseTitle tag="h5">Medical Care Coupon</BaseTitle>
        <BaseParagraph>Support free consultation all inquery fee is less then or equal to $5000</BaseParagraph>
      </div>
      <div>
        <BaseParagraph>Over $300 minus</BaseParagraph>
        <HeroTitle>$50</HeroTitle>
      </div>
    </div>
    <div class="card-footer">
      <BaseParagraph>Validity Period: 2025 - 06 - 02</BaseParagraph>
      <div class="circle-1"></div>
      <div class="circle-2"></div>
    </div>
  </div>
</template>

<style scoped>
.coupon-card {
  background-color: var(--secondary-color);
  color: var(--white-color);
  padding: 1rem;
  border-radius: .75rem;
  overflow: hidden;
}

.coupon-card h5 {
  margin: 0 0 10px 0;
}

.coupon-card h1 {
  margin-top: 10px;
}
.card-footer {
  position: relative;
  border-top: 5px dashed #fff;
}
.card-footer .circle-1,.circle-2 {
  position: absolute;
  top: -25px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: var(--white-color);
}
.circle-1 {
  left: -45px;
}

/* Right circle */
.circle-2 {
  right: -45px;
}


</style>
