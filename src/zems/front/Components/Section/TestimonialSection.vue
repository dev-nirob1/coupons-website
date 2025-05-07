<script setup>
import { onMounted } from 'vue';
import TestimonialsCard from '@/zems/front/Components/Widgets/TestimonialsCard.vue';

onMounted(() => {
  const owlCarousel = () => {
    const cardList = document.getElementsByClassName('testimonial');
    const cardContainer = document.querySelector('.cards-scroll-container')
    const prevBtn = document.getElementById('prev')
    const nextBtn = document.getElementById('next')

    const cardWidth = cardList[0].offsetWidth + 16
    let cardIndex = 0;
    console.log(cardList.length);
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
  <div class="testimonials bg-white">
    <div class="medium-8 align-center container">
      <div class="span-3 text-center">

        <BaseTitle>Feedback &
          <br> Testimonials
        </BaseTitle>
        <BaseParagraph>
          Real savings from real people. See how our community saves big every day.
        </BaseParagraph>
      </div>
      <div class="span-5">
        <div class="cards-scroll-container">
          <TestimonialsCard v-for="(item, i) in 6" :key="i" :i="i" />
        </div>
        <div class="flex gap-1">
          <button class="btn bg-white" id="prev">Prev</button>
          <button class="btn bg-white" id="next">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonials {
  padding: 5rem .5rem;
}

.testimonials h3 {
  margin-top: 0;
}

.cards-scroll-container {
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
