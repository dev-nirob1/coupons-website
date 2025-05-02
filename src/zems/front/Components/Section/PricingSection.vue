<script setup>
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

const { data: pricing = [] } = useQuery({
  queryKey: ['pricing'],
  queryFn: async () => {
    const res = await axios.get('https://coupon.zems.uk/api/package')
    return res?.data
  }
})

</script>

<template>
  <section class="container py-5">
  <BaseTitle class="flex">Simple <span class="text-secondary"> Pricing</span>
    <hr>
  </BaseTitle>
    <div class="medium-3 gap-1 medium-gap-2">
      <div v-for="data in pricing" :key=data.id class="pricing-card">
      <HeroTitle>{{ data.price }} <span>$</span></HeroTitle>
      <Subtitle>{{ data.name }}</Subtitle>
      <BaseParagraph>{{ data.details }}</BaseParagraph>
      <BaseButton class="width-full bg-secondary text-white">Explore</BaseButton>
    </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-card {
  border: 1px solid var(--border-color);
  background-color: var(--white-color);
  border-radius: .5rem;
  padding: 1rem;
  /* background-color: var(--secondary-color); */
}

.pricing-card .hero-title {
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
}

.pricing-card .hero-title span {
  font-size: 1.75rem;
  font-weight: bold;
}

hr {
  flex: 1;
  border: none;
  margin: 15px 0;
  border-bottom: 3px solid var(--primary-color);
}
</style>
