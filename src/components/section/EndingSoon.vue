<!-- <template>
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
</style> -->
<template>
  <section class="ending-soon">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">🔥 Ending Soon</h2>
        <p class="section-subtitle">Grab these deals before they expire!</p>
      </div>

      <!-- Countdown Timer (Optional) -->
      <div class="countdown-timer">
        <div class="timer-box">
          <span class="timer-value">{{ hours }}</span>
          <span class="timer-label">Hours</span>
        </div>
        <div class="timer-box">
          <span class="timer-value">{{ minutes }}</span>
          <span class="timer-label">Minutes</span>
        </div>
        <div class="timer-box">
          <span class="timer-value">{{ seconds }}</span>
          <span class="timer-label">Seconds</span>
        </div>
      </div>

      <!-- Coupon Cards Grid -->
      <div class="coupons-grid">
        <div
          class="coupon-card"
          v-for="coupon in endingSoonCoupons"
          :key="coupon.id"
          :class="{ 'highlight': coupon.isHotDeal }"
        >
          <div class="coupon-header">
            <span class="store-logo">
              <img :src="coupon.storeLogo" :alt="coupon.storeName">
            </span>
            <span class="expiry-badge">
              ⏳ Ends in {{ coupon.expiresIn }}
            </span>
          </div>

          <div class="coupon-body">
            <h3 class="deal-title">{{ coupon.title }}</h3>
            <div class="deal-description">{{ coupon.description }}</div>

            <div class="discount-tag">
              {{ coupon.discount }}
            </div>
          </div>

          <div class="coupon-footer">
            <button class="reveal-code-btn" @click="revealCode(coupon.id)">
              {{ coupon.isCodeRevealed ? coupon.code : 'Reveal Code' }}
            </button>
            <button class="shop-now-btn" @click="goToDeal(coupon.url)">
              Shop Now →
            </button>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="view-all-container">
        <button class="view-all-btn">View All Expiring Deals</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

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

// Countdown timer logic
const hours = ref('12');
const minutes = ref('45');
const seconds = ref('30');
let timerInterval;

const updateTimer = () => {
  // In a real app, calculate time until midnight or next deal batch
  let sec = parseInt(seconds.value);
  let min = parseInt(minutes.value);
  let hr = parseInt(hours.value);

  if (sec > 0) sec--;
  else {
    sec = 59;
    if (min > 0) min--;
    else {
      min = 59;
      if (hr > 0) hr--;
    }
  }

  hours.value = hr.toString().padStart(2, '0');
  minutes.value = min.toString().padStart(2, '0');
  seconds.value = sec.toString().padStart(2, '0');
};

// Reveal coupon code
const revealCode = (couponId) => {
  const coupon = endingSoonCoupons.value.find(c => c.id === couponId);
  if (coupon) coupon.isCodeRevealed = true;
};

// Navigate to deal
const goToDeal = (url) => {
  window.open(url, '_blank');
};

// Start/stop timer
onMounted(() => {
  timerInterval = setInterval(updateTimer, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timerInterval);
});
</script>

<style scoped>
/* Section Styling */
.ending-soon {
  padding: 3rem 1rem;
  /* background: linear-gradient(to bottom, #fff8f8, #ffffff); */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #f43f5e;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1rem;
  color: #64748b;
}

/* Countdown Timer */
.countdown-timer {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
}

.timer-box {
  background: #f43f5e;
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  text-align: center;
  min-width: 80px;
  box-shadow: 0 4px 12px rgba(244, 63, 94, 0.2);
}

.timer-value {
  font-size: 1.8rem;
  font-weight: 700;
  display: block;
  line-height: 1;
}

.timer-label {
  font-size: 0.7rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Coupons Grid */
.coupons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
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

.coupon-card.highlight {
  border-left: 4px solid #f43f5e;
}

.coupon-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px dashed #e2e8f0;
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
  padding: 1.2rem;
}

.deal-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.deal-description {
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 1rem;
  line-height: 1.5;
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

.coupon-footer {
  display: flex;
  border-top: 1px dashed #e2e8f0;
  padding: 0.8rem;
}

.reveal-code-btn, .shop-now-btn {
  flex: 1;
  padding: 0.6rem;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.reveal-code-btn {
  background: #f8fafc;
  color: #6c5ce7;
  border-radius: 6px 0 0 6px;
}

.reveal-code-btn:hover {
  background: #f1f5f9;
}

.shop-now-btn {
  background: #6c5ce7;
  color: white;
  border-radius: 0 6px 6px 0;
}

.shop-now-btn:hover {
  background: #5a4bd1;
}

/* View All Button */
.view-all-container {
  text-align: center;
  margin-top: 2rem;
}

.view-all-btn {
  padding: 0.8rem 2rem;
  background: #6c5ce7;
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(108, 92, 231, 0.3);
}

.view-all-btn:hover {
  background: #5a4bd1;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(108, 92, 231, 0.4);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .coupons-grid {
    grid-template-columns: 1fr;
  }

  .countdown-timer {
    gap: 1rem;
  }

  .timer-box {
    min-width: 70px;
    padding: 0.6rem 1rem;
  }

  .timer-value {
    font-size: 1.5rem;
  }
}
</style>
