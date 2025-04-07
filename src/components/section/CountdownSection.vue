<template>
  <section class="countdown-section">
    <h2 class="section-title">⏳ Coupons Expiring Soon</h2>

    <div class="coupon-grid">
      <div
        v-for="coupon in coupons"
        :key="coupon.id"
        class="coupon-card"
      >
        <h3>{{ coupon.title }}</h3>
        <p class="store">{{ coupon.store }}</p>
        <p class="discount">{{ coupon.discount }} OFF</p>

        <p v-if="coupon.remaining > 0" class="countdown">
          Time Left: {{ formatCountdown(coupon.remaining) }}
        </p>
        <p v-else class="expired">Expired</p>

        <button
          class="btn-claim"
          :disabled="coupon.remaining <= 0"
        >
          {{ coupon.remaining > 0 ? 'Claim Now' : 'Unavailable' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const coupons = ref([
  {
    id: 1,
    title: '50% Off Electronics',
    store: 'TechLand',
    discount: '50%',
    expiresAt: new Date(Date.now() + 3600 * 1000), // 1 hour from now
    remaining: 0
  },
  {
    id: 2,
    title: '30% Off Groceries',
    store: 'FreshMart',
    discount: '30%',
    expiresAt: new Date(Date.now() + 7200 * 1000), // 2 hours
    remaining: 0
  },
  {
    id: 3,
    title: 'Buy 1 Get 1 Free Pizza',
    store: 'PizzaRush',
    discount: 'BOGO',
    expiresAt: new Date(Date.now() + 1800 * 1000), // 30 mins
    remaining: 0
  }
])

function updateCountdowns() {
  const now = new Date()
  coupons.value.forEach(coupon => {
    const timeLeft = coupon.expiresAt - now
    coupon.remaining = timeLeft > 0 ? timeLeft : 0
  })
}

function formatCountdown(ms) {
  const totalSeconds = Math.floor(ms / 1000)
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')
  const seconds = String(totalSeconds % 60).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}

let interval

onMounted(() => {
  updateCountdowns()
  interval = setInterval(updateCountdowns, 1000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.countdown-section {
  padding: 3rem 1rem;
  background: #fef2f2;
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
  background: #fff;
  border: 1px solid #fecaca;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.coupon-card:hover {
  transform: translateY(-5px);
}

h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.store {
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.discount {
  font-size: 1.3rem;
  color: #dc2626;
  font-weight: bold;
  margin-bottom: 1rem;
}

.countdown {
  font-size: 0.95rem;
  font-weight: 500;
  color: #b91c1c;
  margin-bottom: 1rem;
}

.expired {
  color: #9ca3af;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.btn-claim {
  background: #ef4444;
  color: #fff;
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

.btn-claim:disabled {
  background: #f3f4f6;
  color: #9ca3af;
  cursor: not-allowed;
}
</style>
