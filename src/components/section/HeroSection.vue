<template>
  <section class="hero">
    <div class="hero-content container">
      <div class="hero-text">
        <h1>
          💸 Save Big with <span class="highlight">CouponCraze</span>
        </h1>
        <p>Get the hottest deals, latest promo codes, and exclusive coupons — all in one place.</p>

        <div class="hero-buttons">
          <button class="btn primary">Browse Coupons</button>
          <button class="btn secondary">Submit Your Coupon</button>
        </div>
      </div>

      <div class="hero-image">
        <img src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" alt="Coupon illustration" />
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed here for now
</script>

<style scoped>
.hero {
  background: linear-gradient(to right, #fff1f2, #ffe4e6);
  padding: 4rem 1.5rem;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  gap: 2rem;
}

.hero-text {
  flex: 1;
  max-width: 600px;
}

.hero-text h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.2;
}

.hero-text .highlight {
  color: #f43f5e;
}

.hero-text p {
  font-size: 1.125rem;
  color: #4b5563;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn.primary {
  background-color: #f43f5e;
  color: white;
}

.btn.primary:hover {
  background-color: #e11d48;
}

.btn.secondary {
  background-color: white;
  color: #f43f5e;
  border: 2px solid #f43f5e;
}

.btn.secondary:hover {
  background-color: #fef2f2;
}

.hero-image {
  flex: 1;
  text-align: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column-reverse;
    text-align: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-text h1 {
    font-size: 2rem;
  }
}
</style>
