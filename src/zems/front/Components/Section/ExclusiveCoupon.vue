<script setup>
import axios from 'axios';
import { useQuery } from '@tanstack/vue-query';
import CouponCard from '@zems/front/Components/Widgets/CouponCard.vue';
import LoadingCard from '@/components/widgets/LoadingCard.vue';

const { isLoading, data: exclusiveCoupon = [] } = useQuery({
  queryKey: ['exclusive'],
  queryFn: async () => {
    const res = await axios.get('https://coupon.zems.uk/api/coupon_list/exclusive');
    return res?.data?.data
  }
})

</script>

<template>
  <div class="container">
    <div class="exclusive-coupon">
      <BaseTitle class="flex">Exclusive
        <span class="text-secondary">Coupons</span>
        <hr>
      </BaseTitle>
      <div class="medium-3 gap-1 medium-gap-2">
        <template v-if="isLoading">
          <LoadingCard v-for="(l, i) in 6" :key="i" />
        </template>
        <template v-else>
          <CouponCard v-for="couponData in exclusiveCoupon" :couponData="couponData" :key="couponData.id" />
          <!-- link card  -->
          <RouterLink class="link-card" to="/category_list/featured">
            <div class="flex flex-col justify-center align-center text-center">
              <div>
                <BaseImage image="/company/store.png" />
              </div>
              <div>
                <SubTitle>All Exclusive Coupons</SubTitle>
                <BaseParagraph>Limited-time offers! Click to view exclusive deals and special discounts.</BaseParagraph>
              </div>
            </div>
          </RouterLink>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.exclusive-coupon{
  padding: 2rem .5rem;
}
.link-card {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 100%;
  width: 100%;
  background-color: var(--secondary-color);
  box-shadow: var(--box-shadow);
  color: var(--white-color);
  padding: 1rem;
  border-radius: 1rem;
  transition: all .3s ease-in-out;
}

.link-card:hover {
  transform: scale(1.02);
}

.link-card img {
  height: 100%;
  width: 100%;
}

hr {
  flex: 1;
  border: none;
  margin: 15px 0;
  border-bottom: 3px solid var(--primary-color);
}
</style>
