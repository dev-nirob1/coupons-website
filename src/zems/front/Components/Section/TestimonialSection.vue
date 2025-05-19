<script setup>
import { onMounted, ref } from 'vue';
import TestimonialsCard from '@/zems/front/Components/Widgets/TestimonialsCard.vue';
const reviews = ref([
  {
    "name": "Adam Josheph",
    "role": "Frequent Shopper",
    "quote": "I've saved over $500 this month using coupons from this site! The deals are always verified and the interface makes it easy to find discounts for my favorite stores."
  },
  {
    "name": "Sarah Williams",
    "role": "Budget Mom",
    "quote": "This website helps me stretch our family budget further. The grocery coupons alone save us $100+ every week. I recommend it to all my mom friends!"
  },
  {
    "name": "Michael Chen",
    "role": "College Student",
    "quote": "As a student on tight budget, these coupon codes are lifesavers. I get discounts on everything from textbooks to pizza delivery. 10/10 would recommend!"
  },
  {
    "name": "Emily Rodriguez",
    "role": "Small Business Owner",
    "quote": "We use this site to find deals on office supplies and software subscriptions. The business category coupons have saved our startup thousands this year."
  },
  {
    "name": "David Kim",
    "role": "Travel Enthusiast",
    "quote": "Booked 3 vacations this year using travel deals from here. Got 40% off hotels and discounted airfare. The travel section is my favorite!"
  },
  {
    "name": "Jessica Patel",
    "role": "Fashion Blogger",
    "quote": "I share coupon codes with my followers daily. This site has the most up-to-date fashion deals and exclusive discounts you won't find elsewhere."
  }
])
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

    <div class="container">
      <div class="medium-8 align-center gap-2">
        <div class="medium-span-3 text-content flex flex-col justify-center">
          <BaseTitle>Feedback &
            Testimonials
          </BaseTitle>
          <BaseParagraph>
            Real savings from real people. See how our community saves big every day.
          </BaseParagraph>
        </div>
        <div class="medium-span-5 medium-py-4">
          <div class="cards-container">
            <TestimonialsCard v-for="(data, i) in reviews" :data="data" :key="i" />
          </div>
          <div class="btn-container">
            <BaseButton id="prev">Prev</BaseButton>
            <BaseButton id="next">Next</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonials {
  position: relative;
}

.text-content {
  position: relative;
  padding: 3rem .5rem;
  height: 100%;
  background-color: var(--primary-color);
  color: var(--white-color);
}

.text-content::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: -100%;
  background: var(--primary-color);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
}

.cards-container {
  padding: 1rem;
  padding-left: 0;
  width: 100%;
  overflow: auto;
  display: flex;
  gap: 2rem;
  transition: all .5s ease-in-out;
  z-index: 3;
}

.btn-container {
  z-index: 3;
  display: flex;
  gap: 1rem;
}

.btn-container .btn {
  padding: .75rem 1.5rem;
  border-radius: .5rem;
  background-color: var(--secondary-color);
  color: var(--white-color);
}

.cards-container::-webkit-scrollbar {
  display: none;
}

@media (min-width: 768px) {
  .testimonials {
    background: linear-gradient(to right, var(--primary-color), var(--primary-color), var(--white-color), var(--white-color));
  }

  .text-content::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    left: 100%;
    top: 0;
    padding-right: 5rem;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 0;
    background-color: var(--primary-color);
    z-index: 1;
  }
}

@media(min-width: 992px) {
  .testimonials {
    padding-left: 6rem;
  }
}
</style>
