<script setup>
import { ref } from 'vue';
import CountDown from '../widgets/CountDown.vue';
import BaseTitle from '../element/BaseTitle.vue';
import SubTitle from '../element/SubTitle.vue';
import BaseParagraph from '../element/BaseParagraph.vue';
import BaseButton from '../element/BaseButton.vue';

// Sample data for expiring coupons
const endingSoonCoupons = ref([
  {
    id: 1,
    storeName: 'Amazon',
    storeLogo: 'https://logo.clearbit.com/amazon.com',
    title: 'Prime Member Exclusive',
    description: 'Extra 15% off already discounted items',
    discount: '15% OFF',
    code: 'PRIME15',
    expiresIn: '3 hours',
    isCodeRevealed: false,
    isHotDeal: true,
    url: 'https://amazon.com'
  },
  {
    id: 2,
    storeName: 'Nike',
    storeLogo: 'https://logo.clearbit.com/nike.com',
    title: 'Flash Sale',
    description: '$30 off orders over $100',
    discount: '$30 OFF',
    code: 'FLASH30',
    expiresIn: '8 hours',
    isCodeRevealed: false,
    url: 'https://nike.com'
  },
  {
    id: 3,
    storeName: 'Uber Eats',
    storeLogo: 'https://logo.clearbit.com/ubereats.com',
    title: 'First Order Discount',
    description: 'Get 40% off up to $20',
    discount: '40% OFF',
    code: 'HUNGRY40',
    expiresIn: '1 day',
    isCodeRevealed: false,
    url: 'https://ubereats.com'
  },
  {
    id: 4,
    storeName: 'Target',
    storeLogo: 'https://logo.clearbit.com/target.com',
    title: 'Weekend Special',
    description: '25% off home essentials',
    discount: '25% OFF',
    code: 'HOME25',
    expiresIn: '2 days',
    isCodeRevealed: false,
    isHotDeal: true,
    url: 'https://target.com'
  }
]);

</script>

<template>
  <section class="ending-soon">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class=" flex flex-col justify-center align-center">
          <div class="text-center">
            <BaseTitle>Ending In</BaseTitle>
            <SubTitle>Grab these deals before they expire!</SubTitle>
            <CountDown />
          </div>
        </div>

        <!-- Coupon Cards Grid -->
        <div class="medium-2 gap-2">
          <div class="coupon-card" v-for="coupon in endingSoonCoupons" :key="coupon.id">
            <div class="flex justify-between align-center p-1">
              <span class="store-logo">
                <img :src="coupon.storeLogo" :alt="coupon.storeName">
              </span>
              <span class="expiry-badge">
                ⏳ Ends in {{ coupon.expiresIn }}
              </span>
            </div>

            <div class="coupon-body">
              <BaseTitle tag="h5">{{ coupon.title }}</BaseTitle>
              <BaseParagraph>{{ coupon.description }}</BaseParagraph>

              <div class="discount-tag">
                {{ coupon.discount }}
              </div>
            </div>
            <div class="flex p-1">
              <BaseButton>Reveal Code</BaseButton>
              <BaseButton> Shop Now →</BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
/* Section Styling */
.ending-soon {
  min-height: 100vh;
}

.coupon-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #f1f1f1;
}

.coupon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.store-logo img {
  height: 30px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
}

.expiry-badge {
  background: #fff4f4;
  color: #f43f5e;
  padding: 0.3rem 0.6rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
}

.coupon-body {
  border-top: 1px dashed #e2e8f0;
  border-bottom: 1px dashed #e2e8f0;
  padding: 1.2rem;
}

.discount-tag {
  display: inline-block;
  background: linear-gradient(to right, #f43f5e, #f97316);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.9rem;
}
</style>
