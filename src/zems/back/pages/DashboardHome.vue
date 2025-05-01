<script setup>
import BaseTitle from '@/components/element/BaseTitle.vue';
import NewCoupon from '../Components/Section/NewCoupon.vue';

</script>

<template>
  <div class="dashboard-home">
    <div class="all-2 medium-4 gap-1 mt-1">
      <div class="stats-card">
        <BaseTitle tag="h5">Users</BaseTitle>
        <BaseTitle>341</BaseTitle>
      </div>
      <div class="stats-card">
        <BaseTitle tag="h5">Categories</BaseTitle>
        <BaseTitle>8</BaseTitle>
      </div>
      <div class="stats-card">
        <BaseTitle tag="h5">Active Coupon</BaseTitle>
        <BaseTitle>23</BaseTitle>
      </div>
      <div class="stats-card">
        <BaseTitle tag="h5">Company</BaseTitle>
        <BaseTitle>14</BaseTitle>
      </div>
    </div>
    <!-- new coupons  -->

    <NewCoupon/>
    <CompanyList/>
  </div>

</template>
<style scoped>
.dashboard-home {
  padding: 1.5rem;
}

.stats-card {
  background-color: var(--white-color);
  border: 1px solid var(--border-color);
  box-shadow: box-shadow;
  border-radius: .5rem;
  padding: 1.5rem;
}

.stats-card h3 {
  margin: 0;
}

.stats-card h5 {
  margin: 0 0 15px 0;
}
</style>
