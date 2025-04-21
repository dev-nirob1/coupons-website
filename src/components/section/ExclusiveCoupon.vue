<script setup>
import { onMounted, ref } from 'vue';
import CouponCard from '../widgets/CouponCard.vue';

const exclusiveCoupon = ref([]);
const isLoading = ref(true);
const url = 'https://coupon.zems.uk/api/coupon_list/exclusive';

// fetch exclusive coupon

const fetchExclusiveCoupon = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data);
    exclusiveCoupon.value = data.data;
    // console.log(exclusiveCoupon);
    isLoading.value = false;
  } catch (error) {
    console.log('error while fetching exclusive data', error);
    isLoading.value = false;
  }
}
onMounted(() => {
  fetchExclusiveCoupon();
})

</script>

<template>
  <div class="container">
    <div class="mb-3">
      <BaseTitle class="flex">Exclusive
        <span class="text-secondary">Coupons</span>
        <hr>
      </BaseTitle>
      <div class="medium-3 gap-2">
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
      </div>
    </div>
  </div>
</template>

<style scoped>
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
