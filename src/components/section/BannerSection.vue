<template>
  <section class="hero">
    <div class="hero-container container">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-part-1">Save Big with</span>
          <span class="title-part-2">Exclusive Coupons</span>
        </h1>

        <p class="hero-subtitle">
          Unlock <span class="highlight">thousands of deals</span> from your favorite brands
        </p>

        <div class="search-container">
          <input
            type="text"
            placeholder="Search stores, categories..."
            class="search-input"
            v-model="searchQuery"
            @keyup.enter="searchCoupons"
          >
          <button class="search-button" @click="searchCoupons">
            <span>Find Deals</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>
        </div>

        <div class="trust-badges">
          <div class="badge">
            <div class="badge-icon">🏆</div>
            <span>Verified Coupons</span>
          </div>
          <div class="badge">
            <div class="badge-icon">🔒</div>
            <span>Secure Savings</span>
          </div>
          <div class="badge">
            <div class="badge-icon">🚀</div>
            <span>Instant Apply</span>
          </div>
        </div>
      </div>

      <div class="hero-image">
        <div class="coupon-card coupon-1">
          <div class="coupon-discount">50% OFF</div>
          <div class="coupon-brand">Amazon</div>
          <div class="coupon-expiry">Expires in 2 days</div>
        </div>
        <div class="coupon-card coupon-2">
          <div class="coupon-discount">$20 OFF</div>
          <div class="coupon-brand">Nike</div>
          <div class="coupon-expiry">Expires in 5 days</div>
        </div>
        <div class="coupon-card coupon-3">
          <div class="coupon-discount">FREE Shipping</div>
          <div class="coupon-brand">Walmart</div>
          <div class="coupon-expiry">Expires in 7 days</div>
        </div>
      </div>
    </div>

    <div class="scroll-indicator" @click="scrollToContent">
      <div class="chevron"></div>
      <div class="chevron"></div>
      <div class="chevron"></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');

const searchCoupons = () => {
  if (searchQuery.value.trim()) {
    // Implement search functionality
    console.log('Searching for:', searchQuery.value);
  }
};

const scrollToContent = () => {
  window.scrollTo({
    top: document.querySelector('.hero').offsetHeight,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
/* Base Styles */
.hero {
  position: relative;
  background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
  color: white;
  padding: 4rem 1rem 6rem;
  overflow: hidden;
}

.hero-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.hero-content {
  text-align: center;
  z-index: 2;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
}

.title-part-1 {
  display: block;
  color: rgba(255, 255, 255, 0.9);
}

.title-part-2 {
  display: block;
  background: linear-gradient(to right, #fff, #fdcbf1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out 0.2s forwards;
}

.highlight {
  font-weight: 700;
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 4px;
  text-decoration-color: #fdcbf1;
}

/* Search Section */
.search-container {
  display: flex;
  max-width: 600px;
  margin: 0 auto 2rem;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
}

.search-input {
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  font-size: 1rem;
  outline: none;
}

.search-input::placeholder {
  color: #a1a1aa;
}

.search-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1.5rem;
  background: #f43f5e;
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-button:hover {
  background: #e11d48;
}

.search-button svg {
  width: 20px;
  height: 20px;
}

/* Trust Badges */
.trust-badges {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.6s forwards;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
}

.badge-icon {
  font-size: 1.2rem;
}

/* Coupon Cards */
.hero-image {
  position: relative;
  min-height: 300px;
  margin-top: 2rem;
}

.coupon-card {
  position: absolute;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  color: #111827;
  width: 220px;
  opacity: 0;
}

.coupon-1 {
  top: 0;
  left: 50%;
  transform: translateX(-120%) rotate(-5deg);
  animation: slideInLeft 0.8s ease-out 0.8s forwards;
  border-top: 5px solid #f43f5e;
}

.coupon-2 {
  top: 50px;
  left: 50%;
  transform: translateX(-50%) rotate(2deg);
  animation: slideInUp 0.8s ease-out 1s forwards;
  border-top: 5px solid #6c5ce7;
}

.coupon-3 {
  top: 0;
  left: 50%;
  transform: translateX(20%) rotate(5deg);
  animation: slideInRight 0.8s ease-out 1.2s forwards;
  border-top: 5px solid #10b981;
}

.coupon-discount {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.coupon-brand {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.coupon-expiry {
  font-size: 0.8rem;
  color: #6b7280;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  animation: fadeIn 1s ease-out 1.5s forwards;
}

.chevron {
  width: 12px;
  height: 12px;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
  transform: rotate(45deg);
  margin: -4px 0;
  animation: pulse 2s infinite;
}

.chevron:nth-child(1) {
  animation-delay: 0s;
}
.chevron:nth-child(2) {
  animation-delay: 0.2s;
}
.chevron:nth-child(3) {
  animation-delay: 0.4s;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-120%) rotate(-5deg);
  }
  to {
    opacity: 1;
    transform: translateX(-120%) rotate(-5deg);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20%) rotate(5deg);
  }
  to {
    opacity: 1;
    transform: translateX(20%) rotate(5deg);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateX(-50%) rotate(2deg);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) rotate(2deg);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
}

/* Responsive Design */
@media (min-width: 768px) {
  .hero {
    padding: 6rem 1rem 8rem;
  }

  .hero-container {
    flex-direction: row;
    align-items: center;
  }

  .hero-content {
    text-align: left;
    flex: 1;
  }

  .hero-title {
    font-size: 3.5rem;
  }

  .hero-subtitle {
    margin-left: 0;
  }

  .search-container {
    margin-left: 0;
  }

  .trust-badges {
    justify-content: flex-start;
  }

  .hero-image {
    flex: 1;
    min-height: 400px;
  }

  .coupon-1 {
    top: 50px;
    left: 0;
    transform: rotate(-5deg);
    animation: slideInLeft 0.8s ease-out 0.8s forwards;
  }

  .coupon-2 {
    top: 150px;
    left: 50%;
    transform: translateX(-50%) rotate(2deg);
    animation: slideInUp 0.8s ease-out 1s forwards;
  }

  .coupon-3 {
    top: 50px;
    right: 0;
    transform: rotate(5deg);
    animation: slideInRight 0.8s ease-out 1.2s forwards;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 4rem;
  }
}
</style>
