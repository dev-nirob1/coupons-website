<script setup>
import BreadcrumbSection from '@/components/widgets/BreadcrumbSection.vue';
import LoadingCard from '@/components/widgets/LoadingCard.vue';
import CouponCard from '@zems/front/Components/Widgets/CouponCard.vue';
import { useRoute } from 'vue-router';
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';
import { ref, watchEffect } from 'vue';
import PaginationButtons from '@/components/widgets/PaginationButtons.vue';
import SelectComponent from '@/components/widgets/SelectComponent.vue';
import { useModalStore } from '@/stores/modalStore';
import CouponDetailsModal from '@zems/front/Components/Widgets/CouponDetailsModal.vue';

// const url = `https://coupon.zems.uk/api/${route.name}${route.params.type ? '/' + route.params.type : ''}`;

const currentPage = ref(1)
const route = useRoute();

const fetchData = async (pageNumber) => {
  const url = `https://coupon.zems.uk/api/${route.name}${route.params.type ? '/' + route.params.type : ''}?page=${pageNumber}`;
  const res = await axios.get(url)
  // console.log(url);
  return res?.data
}

const { isPending: isLoading, data: couponsData = [] } = useQuery({
  queryKey: () => [route?.name, route?.params?.type, currentPage?.value],
  queryFn: async () => await fetchData(currentPage.value)
});

// console.log(couponsData);
watchEffect(() => {
  if (route?.query?.p) {
    currentPage.value = route?.query?.p
  } else {
    currentPage.value = 1
  }
  fetchData(currentPage?.value)
})

const modalStore = useModalStore()

</script>

<template>
  <section>
    <BreadcrumbSection />
    <div class="container py-3">
      <SelectComponent/>
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
      <PaginationButtons :currentPage="currentPage" :couponsData="couponsData" :route="route" />

  <CouponDetailsModal :isModalOpen="modalStore.isModalOpen" :handleCloseModal="modalStore.handleCloseModal" />
    </div>
  </section>
</template>

