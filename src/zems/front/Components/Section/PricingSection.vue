<script setup>
import SectionTitle from '@/components/widgets/SectionTitle.vue';
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
  <section class="pricing">
    <div class="container">
      <SectionTitle title="Simple Pricing" class="justify-center text-secondary"></SectionTitle>

      <div class="medium-3 gap-1 align-center medium-gap-2">
        <div v-for="data in pricing" :key=data.id>
          <div class="pricing-card">
            <p v-if="data.is_featured" class="bg-alternative p-1 text-white">Exclusive</p>
            <span class="icon">
              <i class="fa-solid fa-circle-dollar-to-slot"></i>
            </span>
            <!-- <BaseImage src="/price-list.png" /> -->
            <BaseTitle tag="h5">{{ data.name }}</BaseTitle>
            <HeroTitle>${{ data.price }} <span>/month</span></HeroTitle>
            <BaseParagraph>{{ data.details }}</BaseParagraph>
            <BaseButton>Buy Now</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing {
  padding: 5rem .5rem;
  background: var(--primary-lighten-color);
}

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

.pricing h5 {
  margin: .5rem 0;
}

.pricing-card .hero-title {
  margin: 0 0 .5rem 0;
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
