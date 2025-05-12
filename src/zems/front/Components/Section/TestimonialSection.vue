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
    <div class="medium-8 container">
      <div class="span-3 text-content">
        <div>
          <BaseTitle>Feedback &
            <br> Testimonials
          </BaseTitle>
          <BaseParagraph>
            Real savings from real people. See how our community saves big every day.
          </BaseParagraph>
        </div>
      </div>
      <div class="span-5 height-full">
        <div class="cards-container">
          <TestimonialsCard v-for="i in 6" :key="i" />
        </div>
        <div class="btn-container flex gap-1">
          <BaseButton id="prev">Prev</BaseButton>
          <BaseButton id="next">Next</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonials {
  padding-left: 6rem;
  position: relative;
  background-color: var(--secondary-color)
}

.text-content {
  position: relative;
  padding: 12rem 0;
  padding-left: 3rem;
  background-color: var(--secondary-color);
  color: var(--white-color);
}
.span-5{
  background-color: white;
  position: relative;
}

.text-content::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  right: -100%;
  top: 0;
  padding-right: 5rem;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: var(--secondary-color);
  z-index: 1;
}

.cards-container {
  margin-top: 5rem;
  width: 100%;
  overflow: auto;
  padding: 1rem;
  padding-left: 0;
  display: flex;
  gap: 2rem;
  transition: all .5s ease-in-out;
   position: relative;
  z-index: 3;
}

.btn-container {
  z-index: 3;
  position: relative;
}
.btn-container .btn {
  padding: .75rem 1.5rem;
  background-color: var(--white-color);
}
.cards-container::-webkit-scrollbar {
  display: none;
}
</style>
