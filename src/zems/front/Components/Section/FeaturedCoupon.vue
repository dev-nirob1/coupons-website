<script setup>
import LoadingCard from '@/components/widgets/LoadingCard.vue';
import SectionTitle from '@/components/widgets/SectionTitle.vue';
import CouponCard from '@zems/front/Components/Widgets/CouponCard.vue';
defineProps({
  featured: {
    type: Array
  },
  isLoading: {
    type: Boolean
  },
  isModalOpen: {
    type: Boolean
  },
  handleOpenModal: {
    type: Function
  }
})

</script>

<template>
  <section class="featured-coupon">
    <div class="container">
      <!-- Section Header -->
      <SectionTitle>Featured Coupon</SectionTitle>
      <!-- Coupon Grid -->
      <div class="medium-2 large-3 gap-1 large-gap-2">
        <template v-if="isLoading">
          <LoadingCard v-for="(l, i) in 6" :key="i" />
        </template>

        <template v-else>
          <CouponCard v-for="couponData in featured" :couponData="couponData" :key="couponData.id"
            :handleOpenModal="handleOpenModal" />
          <!-- link button-->
          <RouterLink class="link-card" to="/coupon_list/exclusive">
            <div class="flex flex-col justify-center align-center">
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
  </section>
</template>
<style scoped>
.featured-coupon {
  padding: 3.75rem 0;
}

.featured-coupon .link-card {
  text-align: center;
  text-decoration: none;
  background: linear-gradient(
    to bottom,
    rgb(from var(--secondary-color) r g b / 75%),
    var(--secondary-color)
  );
  box-shadow: var(--box-shadow);
  color: var(--white-color);
  padding: 1rem 2rem;
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;
  z-index: 1;
}

.featured-coupon .link-card p {
  margin-top: 0.5rem;
}

.featured-coupon .link-card img {
  height: 100px;
  width: 100px;
}
.featured-coupon .link-card:hover {
  transform: scale(1.02);
}

</style>
