<script setup>
import CouponCard from '@/components/widgets/CouponCard.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
// console.log(route);
// const category = route.params.slug;
const coupons = ref([])
// console.log(category);
const isLoading = ref(true)

const fetchCategoryData = async (slug) => {
  try {
    const res = await fetch(`https://coupon.zems.uk/api/category_list/${slug}`);
    console.log('res',res);

    const data = await res.json();
    console.log('data',data);
    coupons.value = data.data;
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    console.log('error while fetching ', error);
  }
}
onMounted(() => {
  fetchCategoryData(route.params.slug)
})
</script>

<template>
  <div class="container py-2 medium-py-3 large-py-5">
  <section class="medium-2 large-3 gap-2">
    <CouponCard v-for="couponData in coupons" :couponData="couponData" :key="couponData.id" />
  </section>
  </div>
</template>
