<script setup>
import BaseTitle from '@/components/element/BaseTitle.vue';

</script>

<template>
<div class="container">
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
</div>

</template>
<style scoped>
  .stats-card{
    background-color: var(--white-color);
    border: 1px solid var(--light-color);
    border-radius: .5rem;
    padding: 1.5rem;
  }
  .stats-card h3{
    margin: 0;
  }
  .stats-card h5{
    margin: 0 0 15px 0 ;
  }
</style>
