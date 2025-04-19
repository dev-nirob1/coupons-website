<script setup>
import HeroTitle from '../element/HeroTitle.vue';
import SubTitle from '../element/SubTitle.vue';
import InputField from '../element/InputField.vue';
import BaseButton from '../element/BaseButton.vue';
import BaseTitle from '../element/BaseTitle.vue';
</script>

<template>
  <section class="hero bg-secondary">
    <div class="container medium-2 gap-2">
      <div data-zems="animate__slideInLeft" class="animate__animated">
        <HeroTitle>
          Save Big with
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
      <div data-zems="animate__slideInRight" class="relative animate__animated">
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
.hero {
  min-height: 100Vh;
  display: flex;
  align-items: center;
}

.hero .highlight {
  border-bottom: 5px solid var(--alternative-color);
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

.hero-card {
  position: absolute;
  background-color: var(--white-color);
  border-top: 5px solid;
  width: fit-content;
  padding: 1.5rem 2rem;
  border-radius: 0.75rem;
  box-shadow: var(--box-shadow);
  /* transition: transform 0.5s ease-in-out; */
}
.hero-card h3 {
  margin: 10px 0;
  color: var(--dark-color)
}
.card-1, .card-2, .card-3 {
  animation: moveTrain 9s infinite ease-in-out;
}
.card-1 {
  border-color: var(--alternative-color);
  animation-delay: 0s;
}
.card-2 {
  border-color: var(--primary-color);
  animation-delay: 3s;
}
.card-3 {
  border-color: var(--secondary-color);
  animation-delay: -3s;
}
/* @keyframes moveTrain {
  0% {
    top: 0;
    left: 0;
    transform: translate(0, 0);
    opacity: .5;
  }
  33.33% {
    top: 120%;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 1;
  }
  66.66% {
    top: 0;
    left: 120%;
    transform: translate(-100%, 0);
    opacity: .5;
  }
  100% {
    top: 0;
    left: 0;
    transform: translate(0, 0);
  }
} */


@media (min-width: 768px) {
  .hero-card {
    position: absolute;
  }
}
</style>
