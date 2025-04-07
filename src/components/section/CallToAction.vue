<template>
  <section class="cta-section mb-5">
    <div class="cta-container">
      <h2 class="cta-title">🎉 Don't Miss Out on the Best Coupons!</h2>
      <p class="cta-description">Sign up today to get exclusive offers and discounts delivered straight to your inbox!</p>

      <!-- Action Buttons -->
      <div class="cta-buttons">
        <button class="cta-btn cta-signup">Sign Up Now</button>
        <button class="cta-btn cta-browse">Browse Offers</button>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.cta-section {
  background-color: #1f2937;
  color: white;
  padding: 4rem 1rem;
  text-align: center;
}

.cta-container {
  max-width: 1200px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fbbf24; /* Accent color */
}

.cta-description {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: #e5e7eb;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.cta-btn {
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.cta-signup {
  background-color: #f43f5e;
  color: white;
}

.cta-signup:hover {
  background-color: #e11d48;
}

.cta-browse {
  background-color: #3b82f6;
  color: white;
}

.cta-browse:hover {
  background-color: #2563eb;
}
</style>
