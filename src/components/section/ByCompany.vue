<script setup>
import BaseButton from '../element/BaseButton.vue';
import BaseTitle from '../element/BaseTitle.vue';
import CompanyCard from '../widgets/CompanyCard.vue';
const companies = [
  { id: 1, name: "Nike", logo: "/nike.png", discount: "20% OFF" },
  { id: 2, name: "Adidas", logo: "/adidas.png", discount: "15% OFF" },
  { id: 3, name: "Apple", logo: "/apple.png", discount: "10% OFF" },
  { id: 4, name: "Samsung", logo: "/samsung.png", discount: "25% OFF" },
  { id: 5, name: "Zara", logo: "/zara.png", discount: "30% OFF" },
  { id: 6, name: "Amazon", logo: "/amazon.png", discount: "40% OFF" }
];
</script>

<template>
  <section class="company-section container py-3">
    <BaseTitle class="text-center">Offer From Company</BaseTitle>
    <div class="medium-4 gap-2">
      <CompanyCard v-for="company in companies" :company="company" :key="company.id" />
      <div class="button span-2">
        <BaseButton class="bg-secondary width-full">Show more</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
