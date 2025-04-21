<script setup>
import BreadcrumbSection from '@/components/widgets/BreadcrumbSection.vue';
import CouponCard from '@/components/widgets/CouponCard.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const couponsData = ref([])
const loading = ref(true)
const route = useRoute()
const routeName = route.name;
const type = route.params.type;

console.log(route);
const url = `https://coupon.zems.uk/api/${routeName}/${type}`
// console.log(url);
const fetchData = async () => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    couponsData.value = data?.data || data;
    loading.value = false
  } catch (error) {
    loading.value = false
    console.log('error while fetching data', error);
  }
}
onMounted(() => {
  fetchData()
})

</script>

<template>
  <section>
    <BreadcrumbSection :routeName="routeName"/>
    <div class="container py-2">
      <div class="flex justify-end mb-2">
        <div class="select">
          <select>
            <option value="sort" disabled>Sort By</option>
            <option value="sort">Newest</option>
            <option value="sort">Older</option>
            <option value="sort">Populer</option>
          </select>
        </div>
      </div>
      <div class=" medium-2 large-3 gap-2">
        <CouponCard v-for="couponData in couponsData" :couponData="couponData" :key="couponData.id" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.select select {
  background-color: var(--white-color);
  border: var(--border-color);
  box-shadow: var(--box-shadow);
}
</style>
