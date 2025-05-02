<script setup>
import CompanyCard from '@/zems/front/Components/Widgets/CompanyCard.vue';
// import LoadingSkeleton from '../widgets/LoadingSkeleton.vue';
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
  <section class="company-section container">
    <BaseTitle class="flex">Company <span class="text-secondary"> Offer</span>
      <hr>
    </BaseTitle>
    <div class="medium-4 gap-1 medium-gap-2">
      <!-- loading skeleton  -->
      <!-- <LoadingSkeleton /> -->
      <!-- company data  -->
      <CompanyCard v-for="company in companies" :company="company" :key="company.id" />

      <div class="medium-span-2">
        <!-- link card/btn -->
        <RouterLink class="link-card" to="/company">
          <div class="all-4 gap-1 align-center">
            <div>
              <BaseImage image="/company/store.png" />
            </div>
            <div class="span-3">
              <SubTitle>Explore All Partner Companies</SubTitle>
              <BaseParagraph> Discover our full network of trusted partners and browse their exclusive offers. Click to
                view all available companies.</BaseParagraph>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.company-section {
  padding: 2rem .5rem;
}
.link-card {
  display: block;
  text-decoration: none;
  height: 100%;
  width: 100%;
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
  padding: 1rem;
  border-radius: 1rem;
  transition: all .3s ease-in-out;
}

.link-card:hover {
  transform: scale(1.02);
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
