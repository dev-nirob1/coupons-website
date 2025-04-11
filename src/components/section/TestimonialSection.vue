<script setup lang="ts">
import BaseTitle from '../element/BaseTitle.vue';
import SubTitle from '../element/SubTitle.vue';
import TestimonialsCard from '../widgets/TestimonialsCard.vue';
</script>

<template>
  <div class="testimonials bg-secondary py-2 medium-py-3 large-py-5">
    <div class="medium-8 container">
      <div class="span-3 text-center text-white">
        <SubTitle>Our Clients</SubTitle>
        <BaseTitle>Testimonials</BaseTitle>
      </div>
      <div class="span-5">
        <div class="cards-scroll-container">
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonials h3 {
  margin-top: 0;
}
.cards-scroll-container {
  width: 100%;
  overflow-x: scroll;
  padding-bottom: 1rem;
  display: flex;
  gap: 1.5rem;
}

.cards-scroll-container::-webkit-scrollbar {
  height: 10px;
}

.cards-scroll-container::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}
</style>
