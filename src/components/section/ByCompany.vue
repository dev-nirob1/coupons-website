<script setup>
import BaseImage from '../element/BaseImage.vue';
import BaseParagraph from '../element/BaseParagraph.vue';
import BaseTitle from '../element/BaseTitle.vue';
import SubTitle from '../element/SubTitle.vue';
import CompanyCard from '../widgets/CompanyCard.vue';
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
  <section class="company-section container py-3">
    <BaseTitle class="flex">Company <span class="text-secondary"> Offer</span> <hr></BaseTitle>
    <div class="medium-4 gap-2">
      <CompanyCard v-for="company in companies" :company="company" :key="company.id" />
      <div class="span-2">
        <RouterLink class="link-card" to="/">
          <div class="all-4 gap-1 align-center">
            <div>
            <BaseImage image="/company/store.png" />
          </div>
          <div class="span-3">
            <SubTitle>More Offer From Us</SubTitle>
            <BaseParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate officia exercitationem sint iure sunt porro molestiae.</BaseParagraph>
          </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.link-card {
  display: inline-block;
  text-decoration: none;
  height: 100%;
  width: 100%;
  background-color: var(--secondary-color);
  color: var(--white-color);
  padding: 1rem;
  border-radius: 1rem;
}

.link-card img {
  height: 100%;
  width: 100%;
}
hr {
  flex: 1;
  border: none;
  margin: 15px 0;
  border-bottom: 3px solid var(--primary-color);
}
</style>
