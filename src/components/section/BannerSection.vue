<script setup>
import { heroSectionAnimation } from '@/plugins/animation';
import { onMounted } from 'vue';

onMounted(() => {
  heroSectionAnimation()
});
</script>

<template>
  <section id="hero" class="hero bg-secondary text-center">
    <div id="content" class="container">
      <div>
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
      </div>
  </section>
</template>
<style scoped>
#hero{
  transition: opacity 0.3s ease, transform 0.3s ease;
  will-change: opacity, transform;
  overflow-y: hidden;
}
#content{
  transition: all 0.3s ease, transform 0.3s ease;
}
.hero {
  height: 100Vh;
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


@media (min-width: 768px) {
  .hero-card {
    position: absolute;
  }
}
</style>
