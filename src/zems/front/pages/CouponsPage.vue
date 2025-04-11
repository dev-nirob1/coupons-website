<script setup lang="ts">
import InputField from '@/components/element/InputField.vue';
import CouponCard from '@/components/widgets/CouponCard.vue';

</script>

<template>
  <section class="container py-2 medium-py-3 large-py-5">
    <div class="flex justify-between mb-2">
      <div class="span-6">
        <InputField placeholder="Search Coupon"/>
      </div>
      <div class="span-4">
        <select>
          <option value="sort" disabled>Sort By</option>
          <option value="sort">Newest</option>
          <option value="sort">Older</option>
          <option value="sort">Populer</option>
        </select>
      </div>
    </div>
    <div class=" medium-2 large-3 gap-2">
      <CouponCard />
      <CouponCard />
      <CouponCard />
      <CouponCard />
      <CouponCard />
      <CouponCard />
      <CouponCard />
      <CouponCard />
      <CouponCard />
    </div>
  </section>
</template>
