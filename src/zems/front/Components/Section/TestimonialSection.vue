<script setup>
import { onMounted } from 'vue';
import TestimonialsCard from '@/zems/front/Components/Widgets/TestimonialsCard.vue';

onMounted(() => {
  const owlCarousel = () => {
    const cardList = document.getElementsByClassName('testimonial-card');
    const cardContainer = document.querySelector('.cards-container')
    const prevBtn = document.getElementById('prev')
    const nextBtn = document.getElementById('next')

    const cardWidth = cardList[0].offsetWidth + 32
    let cardIndex = 0;

    // console.log(cardList.length);
    nextBtn.addEventListener('click', () => {
      // todo: nextBtn logic in individual function
      if (cardIndex < cardList.length - 1) {
        console.log(cardIndex);
        let lastIndex = cardList.length - 3

        cardContainer.scrollTo({
          left: cardWidth * (cardIndex + 1),
          behavior: 'smooth'
        });
        if (cardIndex == lastIndex) {
          cardIndex = -2;
          console.log(cardIndex, lastIndex);
        }

        cardIndex++;
      }
    })
    prevBtn.addEventListener('click', () => {
      // todo: prevBtn logic in individual function
      if (cardIndex > 0) {
        cardIndex--;
        console.log(cardIndex);

        cardContainer.scrollTo({
          left: cardWidth * cardIndex,
          behavior: 'smooth'
        });
      }
    })
  }
  owlCarousel()

})
</script>

<template>
  <div class="testimonials">
    <div class="medium-8 gap-1 medium-gap-2">
      <div class="span-3 text-content ">
        <BaseTitle>Feedback &
          <br> Testimonials
        </BaseTitle>
        <BaseParagraph>
          Real savings from real people. See how our community saves big every day.
        </BaseParagraph>
      </div>
      <div class="span-5 height-full">
        <div class="cards-container">
          <TestimonialsCard v-for="i in 6" :key="i"/>
        </div>
        <div class="flex gap-1">
          <button class="bg-white" id="prev">Prev</button>
          <button class="bg-white" id="next">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.testimonials {
  position: relative;
}

.text-content{
  position: relative;
  padding: 10rem 0;
  padding-left: 3rem;
  background-color: var(--secondary-color);
  color: var(--white-color);
}

.text-content::after{
  content: 'dfdf';
  position: absolute;
  height: 100%;
  width: 100%;
  right: -100%;
  top: 0;
  padding-right: 5rem;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: var(--secondary-color);
  border-right: 5px solid red;
  z-index: -1;
}

.cards-container {
  width: 100%;
  overflow: auto;
  padding: 1rem;
  display: flex;
  gap: 2rem;
  transition: all .5s ease-in-out;
}

.cards-container::-webkit-scrollbar {
  display: none;
}
</style>
