<template>
  <section class="new-offers-section">
    <h2 class="section-title">🆕 New Offers</h2>

    <!-- Country Filter Dropdown -->
    <div class="filter-container">
      <label for="country" class="filter-label">Choose your country:</label>
      <select v-model="selectedCountry" id="country" class="filter-select">
        <option value="all">All</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="India">India</option>
        <option value="Canada">Canada</option>
      </select>
    </div>

    <!-- Offer Cards Display -->
    <div class="offer-list">
      <div v-for="offer in filteredOffers" :key="offer.id" :class="['offer-card', offer.cardClass]">
        <div class="offer-top">
          <div class="icon-box" :style="{ backgroundColor: offer.iconBg }">
            <span class="icon">{{ offer.icon }}</span>
          </div>
          <img :src="offer.image" :alt="offer.store" class="offer-img" />
        </div>
        <div class="offer-content">
          <h3 class="offer-title">{{ offer.title }}</h3>
          <p class="offer-desc">{{ offer.description }}</p>
          <button class="btn-claim" :style="{ backgroundColor: offer.buttonColor }">Claim Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// Sample new offers with country info
const newOffers = [
  {
    id: 1,
    title: "15% Off on First Purchase",
    description: "New users get instant 15% off. No code needed.",
    image: "https://i.ibb.co/0FK6mNq/shopping-bag.png",
    store: "ShopEase",
    country: "USA",
    icon: "🛍️",
    iconBg: "#fef9c3",
    buttonColor: "#facc15",
    cardClass: "card-yellow"
  },
  {
    id: 2,
    title: "10% Cashback on Groceries",
    description: "Pay with mobile wallet & earn cashback instantly.",
    image: "https://i.ibb.co/5FStbNs/grocery.png",
    store: "GroceryBay",
    country: "India",
    icon: "🛒",
    iconBg: "#d1fae5",
    buttonColor: "#34d399",
    cardClass: "card-green"
  },
  {
    id: 3,
    title: "Buy 1 Get 1 Pizza",
    description: "Weekend blast! BOGO available on all pizzas.",
    image: "https://i.ibb.co/yQXMNt6/pizza.png",
    store: "PizzaFun",
    country: "UK",
    icon: "🍕",
    iconBg: "#fde68a",
    buttonColor: "#f97316",
    cardClass: "card-orange"
  },
  {
    id: 4,
    title: "10% Off on Electronics",
    description: "Special discount for all users in Canada.",
    image: "https://i.ibb.co/yQXMNt6/pizza.png",
    store: "ElectroShop",
    country: "Canada",
    icon: "🔌",
    iconBg: "#bfdbfe",
    buttonColor: "#2563eb",
    cardClass: "card-blue"
  }
];

// Country filter model
const selectedCountry = ref('all');

// Computed property to filter offers by selected country
const filteredOffers = computed(() => {
  if (selectedCountry.value === 'all') {
    return newOffers;
  }
  return newOffers.filter(offer => offer.country === selectedCountry.value);
});
</script>

<style scoped>
.new-offers-section {
  padding: 3rem 1rem;
  background-color: #fff;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  color: #111827;
  margin-bottom: 2rem;
}

.filter-container {
  margin-bottom: 2rem;
}

.filter-label {
  font-size: 1rem;
  font-weight: 500;
  color: #374151;
}

.filter-select {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  margin-left: 0.5rem;
}

.offer-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .offer-list {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.offer-card {
  background: #f9fafb;
  border-radius: 1.25rem;
  padding: 1.5rem;
  box-shadow: 0 8px 16px rgba(0,0,0,0.06);
  max-width: 320px;
  margin: 0 auto;
  transition: transform 0.3s ease;
  text-align: left;
}

.offer-card:hover {
  transform: translateY(-6px);
}

.offer-top {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.icon-box {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  font-size: 1.5rem;
}

.offer-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.offer-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #1f2937;
}

.offer-desc {
  font-size: 0.95rem;
  color: #6b7280;
  margin: 0.4rem 0 1rem;
}

.btn-claim {
  color: white;
  border: none;
  padding: 0.45rem 1.2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
}
</style>

