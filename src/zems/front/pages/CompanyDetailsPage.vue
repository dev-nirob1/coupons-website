<script setup>
import { useQuery } from '@tanstack/vue-query';
import CompanyBanner from '../Components/Section/CompanyBanner.vue';
import CouponCard from '../Components/Widgets/CouponCard.vue';
import axios from 'axios';
import { ref, watchEffect } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const currentPage = ref(1) //currentPage
const route = useRoute() //route

// fetch function with page number
const fetchData = async (pageNumber) => {
  const url = `https://coupon.zems.uk/api/coupon_list?page=${pageNumber}`
  const res = await axios.get(url)
  return res?.data
}

// fetch using tanstack query
const { data: couponsData = {} } = useQuery({
  queryKey: () => ['coupon_list', currentPage.value],
  queryFn: () => fetchData(currentPage.value)
})

watchEffect(() => {
  if (route?.query?.p) {
    currentPage.value = route?.query?.p
  }
  fetchData(currentPage.value)
  console.log(currentPage.value);
})

</script>

<template>
  <div class="company-details">
    <!-- Banner Section -->
    <CompanyBanner />
    <div class="container py-3">
      <div class="medium-2 large-3 gap-2">
        <CouponCard v-for="couponData in couponsData?.data" :key=couponData.id :couponData="couponData" />
      </div>

      <ul class="pagination">
        <li>
          <RouterLink
            :to="currentPage == 1 ? '' : `/coupon_list/${$route.params.type}?p=${parseInt(currentPage) - 1}`">&laquo; Prev
          </RouterLink>
        </li>
        <li v-for="(link, i) in couponsData?.last_page" :key="i">
          <RouterLink :class="link == currentPage && 'active'" :to="`/coupon_list/${route?.params?.type}?p=${link}`"> {{ i + 1 }}</RouterLink>
        </li>
        <li>
          <RouterLink
            :to="couponsData?.last_page == currentPage ? '' : `/coupon_list/${route?.params?.type}?p=${parseInt(currentPage) + 1}`">
            Next &raquo;</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
.pagination {
  font-size: .875rem;
  margin-top: 3rem;
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.pagination li {
  border-radius: 0.5rem;
  font-weight: 500;
  color: var(--primary-color);
  background-color: var(--white-color);
}
.pagination li a {
  display: inline-block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 0.5rem;
}
.pagination li a.active {
  background-color: var(--primary-color);
  color: var(--white-color);
}
</style>
