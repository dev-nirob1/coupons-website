<script setup>
import HeroTitle from '../element/HeroTitle.vue';
import SubTitle from '../element/SubTitle.vue';
import InputField from '../element/InputField.vue';
import BaseButton from '../element/BaseButton.vue';
import BaseTitle from '../element/BaseTitle.vue';
</script>

<template>
  <section class="hero bg-secondary mb-1 py-2 medium-py-3 large-py-5">
    <div class="container medium-2 gap-2">
      <div>
        <HeroTitle>
          Save Big with <br>
          Exclusive Coupons
        </HeroTitle>
        <SubTitle class="text-white">
          Unlock <span class="highlight">thousands of deals</span> from your favorite brands
        </SubTitle>
        <div class="input-field flex align-center relative">
          <InputField placeholder="Search Stores, Categories">
          </InputField>
          <BaseButton>Find Deals</BaseButton>
        </div>
      </div>
      <div class="card-content relative">
        <div class="hero-card card-1">
          <BaseTitle tag="h3">$20 OFF</BaseTitle>
          <BaseTitle class="text-light" tag="h6">Amazon</BaseTitle>
          <small class="text-light">Expires in 2days</small>
        </div>
        <div class="hero-card card-2">
          <BaseTitle tag="h3">$50 OFF</BaseTitle>
          <BaseTitle class="text-light" tag="h6">Nike</BaseTitle>
          <small class="text-light">Expires in 2days</small>
        </div>
        <div class="hero-card card-3">
          <BaseTitle tag="h3">Free Shipping</BaseTitle>
          <BaseTitle class="text-light" tag="h6">Amazon</BaseTitle>
          <small class="text-light">Expires in 2days</small>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>

/* my one */
.hero {
  min-height: 100Vh;
  display: flex;
  align-items: center;
}
.input-field input {
  background-color: var(--white-color);
  border-radius: 1.5rem;
  padding: 1.25rem;
  outline: none;
  border: none;
}
.input-field button {
  background-color: var(--alternative-color);
  color: var(--white-color);
  border-radius: 0 1.5rem 1.5rem 0;
  border: none;
  outline: none;
  position: absolute;
  right: 0;
  top: 0;
  padding: 1.18rem 1.75rem;
}
.hero-card{
  position: static;
  background-color: var(--white-color);
  border-top: 5px solid ;
  width: fit-content;
  padding: 1.5rem 2rem;
  border-radius: .75rem;
  box-shadow: var(--card-shadow);
}
.hero-card h3 {
  margin: 10px 0;
  color: var(--dark-color)
}
.hero-card.card-1{
  top: 0%;
  left: 0%;
  transform: translateX(60%) rotate(-5deg);
  border-color: var(--alternative-color);
}
.hero-card.card-2{
  top: 20%;
  left: 35%;
  transform: translateX(50%) rotate(2deg);
  border-color: var(--primary-color);
}
.hero-card.card-3{
  top:50%;
  left: 20%;
  transform: translateY(20%) rotate(2deg);
  border-color: var(--secondary-color);
}

@media (min-width: 768px){
  .hero-card{
    position: absolute;
  }
}

</style>
