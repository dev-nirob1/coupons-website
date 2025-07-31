<script setup>
import SectionTitle from '@/components/widgets/SectionTitle.vue';
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
  <section class="company-section">
    <div class="container">
      <SectionTitle>Company Offer</SectionTitle>

      <div class="medium-2 large-4 gap-1 medium-gap-2">
        <CompanyCard v-for="company in companies" :company="company" :key="company.id" />
        <div class="medium-span-2">
          <!-- link card/btn -->
          <RouterLink class="link-card" to="/companies">
            <div class="medium-4 gap-1 align-center">
              <div>
                <BaseImage image="/company/store.png" />
              </div>
              <div class="span-3">
                <SubTitle>Explore All Partner Companies</SubTitle>
                <BaseParagraph> Discover our full network of trusted partners and browse their exclusive offers. Click
                  to
                  view all available companies.</BaseParagraph>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.company-section {
  padding: 3.75rem 0;
}
.company-section .link-card {
  text-align: center;
  text-decoration: none;
  color: var(--white-color);
  background: linear-gradient(
    to bottom,
    rgb(from var(--secondary-color) r g b / 75%),
    var(--secondary-color)
  );
  box-shadow: var(--box-shadow);
  padding: 1rem 2rem;
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;
  z-index: 1;
}
.company-section .link-card:hover {
  transform: scale(1.02);
}
.company-section .link-card p {
  margin-top: 0.5rem;
  margin-bottom: 0;
}
.company-section .link-card img {
  height: 100px;
  width: 100px;
}

@media (min-width: 768px) {
 .company-section .link-card {
    text-align: left;
  }
  .company-section .link-card img {
    height: 150px;
    width: 150px;
  }
}
</style>
