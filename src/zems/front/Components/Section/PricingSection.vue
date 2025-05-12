<script setup>
import SectionTitle from '@/components/widgets/SectionTitle.vue';
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';
import PricingCard from '../Widgets/PricingCard.vue';

const { data: pricing = [] } = useQuery({
  queryKey: ['pricing'],
  queryFn: async () => {
    const res = await axios.get('https://coupon.zems.uk/api/package')
    return res?.data
  }
})
</script>

<template>
  <section class="pricing bg-lighten">
    <div class="container">
      <SectionTitle title="Simple Pricing"></SectionTitle>
      <div class="medium-3 gap-1 align-center medium-gap-2">
        <div v-for="data in pricing" :key=data.id>
          <PricingCard :price="data" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.pricing {
  padding: 3rem .5rem;
  /* background: var(--primary-lighten-color); */
}

@media (min-width: 768px) {
  .pricing {
    padding: 4rem .5rem;
  }
}

@media (min-width: 768px) {
  .pricing {
    padding: 5rem .5rem;
  }
}
</style>
