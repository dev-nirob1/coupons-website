<script setup>
defineProps({
  price: {
    type: Object
  }
})
</script>
<template>
  <div class="pricing-card">
    <p v-if="price.is_featured" class="bg-alternative p-1 text-white">Exclusive</p>
    <span class="icon">
      <i class="fa-solid fa-circle-dollar-to-slot"></i>
    </span>
    <SubTitle>{{ price.name }}</SubTitle>
    <HeroTitle>${{ price.price }} <span>/month</span></HeroTitle>
    <BaseParagraph>{{ price.details }}</BaseParagraph>
    <BaseButton>Buy Now</BaseButton>
  </div>
</template>
<style scoped>
.pricing-card {
  text-align: center;
  border-radius: .75rem;
  padding: 3rem 2rem;
  transition: all .5s;
  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
  cursor: pointer;
}

.pricing-card .icon {
  font-size: 5rem;
  color: var(--primary-color);
}

.pricing-card:hover {
  transform: translateY(-.5rem);
}

.pricing-card .btn {
  border: 1px solid transparent;
  background: var(--primary-color);
  color: var(--white-color);
  border-radius: 1.5rem;
  width: 100%;
}

.pricing-card .btn:hover {
  background-color: var(--white-color);
  color: var(--secondary-color);
  border: 1px solid var(--primary-color);
}

.pricing-card .sub-title {
  margin: .5rem 0;
}

.pricing-card .hero-title {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pricing-card .hero-title span {
  font-size: 1.75rem;
  font-weight: bold;
}
</style>
