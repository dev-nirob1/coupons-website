<script setup>
import BreadcrumbSection from '@/components/widgets/BreadcrumbSection.vue';
import LoadingCard from '@/components/widgets/LoadingCard.vue';
import CouponCard from '@/zems/front/Components/Widgets/CouponCard.vue';
import { RouterLink, useRoute } from 'vue-router';
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';
import { ref, watchEffect } from 'vue';
// const url = `https://coupon.zems.uk/api/${route.name}${route.params.type ? '/' + route.params.type : ''}`;

const currentPage = ref(1)
const route = useRoute();

const fetchData = async (pageNumber) => {
  const url = `https://coupon.zems.uk/api/${route.name}${route.params.type ? '/' + route.params.type : ''}?page=${pageNumber}`;
  const res = await axios.get(url)
  console.log(url);
  return res?.data
}

const { isPending: isLoading, data: couponsData = {} } = useQuery({
  queryKey: () => [route?.name, route?.params?.type, currentPage?.value],
  queryFn: async () => await fetchData(currentPage.value)
});

watchEffect(() => {
  if (route?.query?.p) {
    currentPage.value = route?.query?.p
  }else{
    currentPage.value = 1
  }
  fetchData(currentPage?.value)
})

</script>

<template>
  <section>
    <BreadcrumbSection />
    <div class="container py-2 pb-5">
      <div class="flex justify-end mb-2 pr-1">
        <div class="select">
          <select>
            <option value="sort" disabled>Sort By</option>
            <option value="sort">Newest</option>
            <option value="sort">Older</option>
            <option value="sort">Populer</option>
          </select>
        </div>
      </div>

      <div v-if="!isLoading && couponsData.length < 1">
        <BaseTitle class="text-center">Opps! No Data Found</BaseTitle>
      </div>

      <div class="medium-2 large-3 gap-2">
        <template v-if="isLoading">
          <LoadingCard v-for="(data, i) in 6" :key="i"></LoadingCard>
        </template>

        <template v-else>
          <CouponCard v-for="couponData in couponsData?.data" :couponData="couponData" :key="couponData.id" />
        </template>
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

      {{ couponsData?.links[0].url }}

    </div>
  </section>
</template>

<style scoped>
.select select {
  background-color: var(--white-color);
  border: var(--border-color);
  box-shadow: var(--box-shadow);
}

.pagination {
  margin-top: 3rem;
  list-style: none;
  padding: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
}

.pagination li {
  border-radius: .5rem;
  font-weight: bold;
  color: var(--primary-color);
  background-color: var(--white-color);
}

.pagination li a {
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
}

.pagination li a.active {
  background-color: var(--primary-color);
  color: var(--white-color);
  border-radius: .5rem;
}
</style>
