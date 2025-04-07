<template>
  <section class="ending-soon-section">
    <h2 class="section-title">⏰ Ending Soon</h2>

    <div class="coupon-grid container">
      <div
        v-for="coupon in endingSoonCoupons"
        :key="coupon.id"
        class="coupon-card"
      >
        <div class="coupon-content">
          <h3>{{ coupon.title }}</h3>
          <p class="store">{{ coupon.store }}</p>
          <p class="discount">{{ coupon.discount }} OFF</p>
          <p class="expires">Expires: {{ formatDate(coupon.expiresAt) }}</p>
          <button class="btn-claim">Claim Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const endingSoonCoupons = ref([
  {
    id: 1,
    title: '20% Off on All Electronics',
    store: 'TechMart',
    discount: '20%',
    expiresAt: '2025-04-08',
  },
  {
    id: 2,
    title: 'Free Shipping + 10% Off',
    store: 'FashionFiesta',
    discount: '10%',
    expiresAt: '2025-04-08',
  },
  {
    id: 3,
    title: 'Buy 1 Get 1 Free Pizza',
    store: 'YummyBites',
    discount: 'BOGO',
    expiresAt: '2025-04-07',
  }
])

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
}
</script>

<style scoped>
.ending-soon-section {
  background-color: #fff;
  padding: 3rem 1.5rem;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #dc2626;
}

.coupon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.coupon-card {
  background: #fff0f1;
  border: 1px solid #fecdd3;
  border-left: 5px solid #ef4444;
  border-radius: 1rem;
  padding: 1.25rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.coupon-card:hover {
  transform: translateY(-5px);
}

.coupon-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.store {
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.discount {
  font-size: 1.2rem;
  font-weight: bold;
  color: #dc2626;
  margin-bottom: 0.5rem;
}

.expires {
  font-size: 0.85rem;
  color: #9ca3af;
  margin-bottom: 1rem;
}

.btn-claim {
  background: #ef4444;
  color: white;
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 999px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn-claim:hover {
  background: #dc2626;
}
</style>
