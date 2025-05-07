<script setup>
import BreadcrumbSection from '@/components/widgets/BreadcrumbSection.vue';
import CompanyCard from '../Components/Widgets/CompanyCard.vue';
const companies = [
  { id: 1, name: "Nike", logo: "/company/nike.png", discount: "20% OFF" },
  { id: 2, name: "Adidas", logo: "/company/adidas.png", discount: "15% OFF" },
  { id: 3, name: "Apple", logo: "/company/apple.png", discount: "10% OFF" },
  { id: 4, name: "Samsung", logo: "/company/samsung.png", discount: "25% OFF" },
  { id: 5, name: "Zara", logo: "/company/zara.png", discount: "30% OFF" },
  { id: 6, name: "Amazon", logo: "/company/amazon.png", discount: "40% OFF" }
];
</script>
<template>
  <section>
    <BreadcrumbSection />
    <div class="container medium-2 large-4 gap-1 large-gap-2 py-3">
      <CompanyCard v-for="company in companies" :company="company" :key="company.id" />
    </div>
  </section>
</template>
