<script setup>
import { heroSectionAnimation } from '@/Plugins/animation';
import { onMounted } from 'vue';

onMounted(() => {
  heroSectionAnimation()
});
</script>

<template>
  <section id="hero" class="hero text-center">
    <div class="overlay"></div>
    <div class="banner-image">
      <img src="/banner.jpg" />
    </div>
    <div id="content" class="content">
      <div>
        <HeroTitle>
          Save Big with
          Exclusive Coupons
        </HeroTitle>
        <SubTitle class="text-white">
          Unlock thousands of deals and save up to 80% at top retailers - <br />
          verified coupons updated daily for maximum savings
        </SubTitle>
        <div class="input-field flex align-center relative">
          <InputField placeholder="Search Stores, Categories">
          </InputField>
          <BaseButton>Find Deals</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#hero {
  transition: opacity 0.3s ease, transform 0.3s ease;
  will-change: opacity, transform;
  overflow-y: hidden;
}

#content {
  transition: all 0.3s ease, transform 0.3s ease;
}

.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
}

.hero .banner-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero .banner-image img {
  object-fit: 100% 100%;
  width: 100%;
  height: 100%;
}

.hero .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  z-index: 111;
}

.hero .content {
  padding: 0 .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 999;
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
</style>
