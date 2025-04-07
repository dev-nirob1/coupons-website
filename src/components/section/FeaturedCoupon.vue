<template>
  <section class="featured-section">
    <h2 class="section-title">🌟 Featured Coupons</h2>

    <div class="featured-grid container">
      <div v-for="coupon in featuredCoupons" :key="coupon.id" class="coupon-card">
        <div class="ribbon">{{ coupon.discount }} OFF</div>
        <img :src="coupon.image" :alt="coupon.store" class="store-logo" />
        <h3 class="title">{{ coupon.title }}</h3>
        <p class="store-name">{{ coupon.store }}</p>
        <button class="btn-redeem">Redeem Now</button>
      </div>
    </div>
  </section>
</template>

<script setup>
const featuredCoupons = [
  {
    id: 1,
    title: "50% Off on All Shoes",
    store: "Footwear Hub",
    discount: "50%",
    image: "https://i.ibb.co/NK79cXM/shoe-store.png"
  },
  {
    id: 2,
    title: "20% Off on Electronics",
    store: "TechMarket",
    discount: "20%",
    image: "https://i.ibb.co/n8VtjkP/tech-store.png"
  },
  {
    id: 3,
    title: "Flat 30% on Fashion",
    store: "TrendyLook",
    discount: "30%",
    image: "https://i.ibb.co/JR8KgQc/fashion.png"
  }
]
</script>

<style scoped>
.featured-section {
  padding: 3rem 1rem;
  background: #f9fafb;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1f2937;
}

.featured-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.coupon-card {
  position: relative;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 1.25rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.08);
  transition: transform 0.2s ease;
}

.coupon-card:hover {
  transform: translateY(-5px);
}

.ribbon {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #f43f5e;
  color: white;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.85rem;
  transform: rotate(8deg);
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.store-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}

.title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #111827;
}

.store-name {
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.btn-redeem {
  background: #f43f5e;
  color: white;
  border: none;
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn-redeem:hover {
  background: #e11d48;
}
</style>
