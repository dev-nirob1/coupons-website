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
        <!-- <BaseImage src="/price-list.png" /> -->
        <BaseTitle tag="h5">{{ data.name }}</BaseTitle>
        <HeroTitle>${{ data.price }} <span>/month</span></HeroTitle>
        <BaseParagraph>{{ data.details }}</BaseParagraph>
        <BaseButton class="bg-white">Buy Now</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-card {
  text-align: center;
  border: 1px solid var(--border-color);
  color: var(--white-color);
  border-radius: .75rem;
  padding: 2rem 1rem;
  background-color: var(--secondary-color);
  transition: all .5s;
}

.pricing-card:hover {
  background-color: var(--white-color);
  color: var(--light-color);
}

.pricing-card:hover .btn {
  background-color: var(--secondary-color);
  color: var(--white-color);
}

.pricing-card img {
  height: 100px;
  width: 100px;
}

.pricing-card .btn {
  border-radius: 1.5rem;
  width: 100%;
}

.pricing-card .hero-title {
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
