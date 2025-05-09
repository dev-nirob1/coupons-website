<script setup>
import LoadingCard from '@/components/widgets/LoadingCard.vue';
import SectionTitle from '@/components/widgets/SectionTitle.vue';
import CouponCard from '@/zems/front/Components/Widgets/CouponCard.vue';
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
      <SectionTitle title="Featured Coupon" class="text-secondary" />

      <!-- Coupon Grid -->
      <div class="medium-3 gap-2">
        <template v-if="isLoading">
          <LoadingCard v-for="(l, i) in 6" :key="i" />
        </template>

        <template v-else>
          <CouponCard v-for="couponData in featured" :couponData="couponData" :key="couponData.id"
            :handleOpenModal="handleOpenModal" :isModalOpen="isModalOpen" />

          <!-- link button-->
          <RouterLink class="link-card" to="/coupon_list/exclusive">
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
  </section>
</template>
<style scoped>
.featured-coupon {
  padding: 5rem .5rem;
}

.link-card {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
  box-shadow: var(--box-shadow);
  color: var(--white-color);
  padding: 2rem;
  border-radius: 1rem;
  transition: all .3s ease-in-out;
}

.link-card:hover {
  transform: scale(1.02);
}

.link-card .subtitle {
  margin: 0;
}

.link-card p {
  margin-top: .5rem;
}

.link-card img {
  height: 100%;
  width: 100%;
}
</style>
