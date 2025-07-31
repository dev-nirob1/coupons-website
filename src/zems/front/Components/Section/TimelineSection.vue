<template>
  <section class="timeline-section bg-lighten">
    <div class="container">
      <div class="large-3 how-it-works">
        <div class="timeline">
          <BaseImage image="/all.png" alt="image" />
        </div>
        <div>
          <div class="pb-5">
            <BaseTitle tag="h4">
              Save Money in <br> 3 Simple Steps
            </BaseTitle>
            <BaseParagraph>
              Get the best coupons and promo codes with zero hassle. We verify every deal so you don’t have to—just
              copy,
              apply, and save instantly at checkout.
            </BaseParagraph>
            <BaseButton class="bg-secondary text-white">Get Started</BaseButton>
          </div>
          <div class="one">
            <div class="timeline-card">
              <div class="number">1</div>
              <BaseTitle tag="h5">Find Amazing Deals</BaseTitle>
              <BaseParagraph>
                Browse thousands of verified coupons and discount codes from your favorite stores.
              </BaseParagraph>
            </div>
          </div>
        </div>
        <div class="middle align-center">
          <div class="two">
            <div class="timeline-card">
              <div class="number">2</div>
              <BaseTitle tag="h5">Select & Copy</BaseTitle>
              <BaseParagraph>
                Choose your preferred offer and copy the code with one click or get direct store links.
              </BaseParagraph>
            </div>
          </div>
        </div>
        <div>
          <div class="three">
            <div class="timeline-card">
              <div class="number">3</div>
              <BaseTitle tag="h5">Enjoy Savings</BaseTitle>
              <BaseParagraph>
                Apply the code at checkout and watch your total drop! Share with friends for extra rewards.
              </BaseParagraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-section {
  padding: 3.75rem 0;
}
.timeline-section .btn {
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
}
.timeline-section .btn:hover {
  background-color: rgb(from var(--secondary-color) r g b / 90%);
}
.how-it-works {
  position: relative;
  width: 100%;
}
.middle {
  display: flex;
}
.timeline {
  display: none;
}
.timeline img {
  width: 100%;
}
.one,
.two,
.three {
  position: relative;
}
.timeline-card {
  padding: 2rem;
}
/* Step number indicators */
.number {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  text-align: center;
  color: var(--white-color);
  background-color: var(--alternative-color);
  margin: 0 auto;
  font-size: 5rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
}

@media (min-width: 992px) {
  .timeline {
    display: block;
    position: absolute;
    width: 100%;
    top: 3.5rem;
  }
  .number {
    margin-bottom: 3rem;
  }
}
@media (min-width: 1200px) {
  .timeline {
    top: 1.5rem;
  }
}
@media (min-width: 1400px){
   .timeline {
    top: -1.5rem;
  }
}
</style>
