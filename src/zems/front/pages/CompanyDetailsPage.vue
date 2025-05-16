<script setup>
import { useQuery } from '@tanstack/vue-query';
import CompanyBanner from '../Components/Section/CompanyBanner.vue';
import CouponCard from '../Components/Widgets/CouponCard.vue';
import axios from 'axios';
import { ref, watchEffect } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const currentPage = ref(1) //currentPage

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
const route = useRoute()

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
    <div class="container">
      <div class="medium-2 large-3 gap-1 medium-gap-2 my-5">
        <CouponCard v-for="couponData in couponsData?.data" :key=couponData.id :couponData="couponData" />
      </div>

      <ul class="pagination">
        <li>
          <RouterLink :to="currentPage == 1 ? '' : `/companies/${$route.params.type}?p=${parseInt(currentPage) - 1}`">
            Prev</RouterLink>
        </li>

        <li v-for="(link, i) in couponsData?.last_page" :key="i">
          <RouterLink :class="link.active" :to="`/companies/${$route.params.type}?p=${i + 1}`">
            {{ i + 1 }}</RouterLink>
        </li>

        <li>
          <RouterLink
            :to="couponsData?.last_page == currentPage ? '' : `/companies/${$route.params.type}?p=${parseInt(currentPage) + 1}`">
            Next</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
.pagination {
  margin-bottom: 5rem;
  list-style: none;
  padding: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
}

.pagination li {
  padding: 1rem 2rem;
  border-radius: .5rem;
  font-weight: bold;
  color: var(--white-color);
  background-color: var(--primary-color);
}

.pagination li a {
  text-decoration: none;
}
</style>
