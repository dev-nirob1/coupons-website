<script setup>
defineProps({
  price: {
    type: Object
  }
})
</script>
<template>
  <div class="pricing-card">
    <div v-if="price.is_featured == 1" class="flex justify-end">
      <div class="exclusive-badge">
      <p class="badge"> <i class="fa-solid fa-crown"></i> Exclusive</p>
      </div>
    </div>

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
  position: relative;
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
.pricing-card .btn {
  border: 1px solid transparent;
  background: var(--secondary-color);
  color: var(--white-color);
  border-radius: 1.5rem;
  width: 100%;
}

.pricing-card .btn:hover {
  background-color: var(--white-color);
  color: var(--secondary-color);
  border: 1px solid var(--primary-color);
}

.pricing-card .exclusive-badge {
  width: 280px;
  position: relative;
  margin-right: -2rem;
  margin-top: -1.5rem;
  overflow: hidden;
}

.badge {
  background-color: var(--alternative-color);
  color: var(--white-color);
  padding: 1rem 1rem 1rem 3rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
}

.pricing-card .badge::before {
  content: '';
  position: absolute;
  top: 1.1rem;
  left: -1.75rem;
  height: 3.5rem;
  width: 3.5rem;
  rotate: 45deg;
  background: var(--white-color);
}

</style>
