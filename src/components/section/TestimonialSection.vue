<script setup>
import { onMounted } from 'vue';
import BaseTitle from '../element/BaseTitle.vue';
import SubTitle from '../element/SubTitle.vue';
import TestimonialsCard from '../widgets/TestimonialsCard.vue';

onMounted(() => {
  const owlCarousel = () => {
    const cardList = document.getElementsByClassName('testimonial');
    const cardContainer = document.querySelector('.cards-scroll-container')
    const prevBtn = document.getElementById('prev')
    const nextBtn = document.getElementById('next')

    const cardWidth = cardList[0].offsetWidth + 16
    let cardIndex = 0;
    // console.log(cardWidth);
    nextBtn.addEventListener('click', () => {
      if (cardIndex < cardList.length - 1) {
        cardIndex++;
        console.log(cardIndex);

        // cardContainer.style.transform = `translateX(-${cardIndex * cardWidth}px)`
        cardContainer.scrollTo({
          left: cardWidth * cardIndex,
          behavior: 'smooth'
        });
      } else {
        cardIndex = 0;
        cardContainer.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      }
    })
  }
  owlCarousel()
})
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
          <TestimonialsCard v-for="(item, i) in 6" :key="i" />
        </div>
        <button id="prev">Prev</button>
        <button id="next">Next</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonials h3 {
  margin-top: 0;
}

.cards-scroll-container {
  position: relative;
  width: 100%;
  overflow: auto;
  padding-bottom: 1rem;
  display: flex;
  gap: 1rem;
  transition: all .5s ease-in-out;
}

.cards-scroll-container::-webkit-scrollbar {
  display: none;
}
</style>
