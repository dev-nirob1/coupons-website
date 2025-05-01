<script setup>
import LoadingCard from '@/components/Widgets/LoadingCard.vue';
import CouponCard from '@/zems/front/Components/Widgets/CouponCard.vue';

defineProps({
  featured: {
    type: Array
  },
  isLoading: {
    type: Boolean
  }
})
</script>

<template>
  <section class="featured-coupon container">
    <!-- Section Header -->
    <div class="mb-3">
      <BaseTitle class="flex">Featured
        <span class="text-secondary">Coupons</span>
        <hr>
      </BaseTitle>
    </div>
    <!-- Coupon Grid -->
    <div class="medium-3 gap-2">
      <template v-if="isLoading">
        <LoadingCard v-for="(l, i) in 6" :key="i"/>
      </template>
      <template v-else>
        <CouponCard v-for="couponData in featured" :couponData="couponData" :key="couponData.id"/>
        <!-- link button-->
        <RouterLink class="link-card" to="/category_list/featured">
          <div class="flex flex-col justify-center align-center text-center">
            <div>
              <BaseImage image="/company/store.png" />
            </div>
            <div>
              <SubTitle>All Featured Coupons</SubTitle>
              <BaseParagraph>Limited-time offers! Click to view exclusive deals and special discounts.</BaseParagraph>
            </div>
          </div>
        </RouterLink>
      </template>
    </div>
  </section>
</template>
<style scoped>
.featured-coupon{
  padding: 2rem .5rem;
}
.featured-coupon h3 {
  margin-bottom: 10px;
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
