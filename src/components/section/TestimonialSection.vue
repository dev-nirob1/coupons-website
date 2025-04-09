<script setup lang="ts">
import BaseTitle from '../element/BaseTitle.vue';
import SubTitle from '../element/SubTitle.vue';

</script>

<template>
  <div class="container py-5">
    <div class="medium-7">
      <div class="span-3">
        <SubTitle>Our Clients</SubTitle>
        <BaseTitle>Testimonials</BaseTitle>
      </div>
      <div class="span-4">
        <!-- Horizontal scroll container -->
        <div class="cards-scroll-container">
          <div class="cards-wrapper">
            <div class="button testimonial-card">
              
            </div>
            <div class="button card">card 2</div>
            <div class="button card">card 3</div>
            <div class="button card">card 4</div>
            <div class="button card">card 5</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards-scroll-container {
  width: 100%;
  overflow-x: scroll;
  padding-bottom: 1rem;
  /* -webkit-overflow-scrolling: touch; */
}

.cards-wrapper {
  display: flex;
  gap: 1rem;
  width: max-content;
}

.card {
  flex: 0 0 auto;
  width: 300px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffff;
  border-radius: 8px;
}

.cards-scroll-container::-webkit-scrollbar {
  height: 5px;
}

.cards-scroll-container::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}
</style>
