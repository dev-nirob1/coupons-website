<template>
  <section class="timeline container">
    <div class="large-3 gap-2 height-full relative">
      <div class="one">
        <div class="pb-2">
          <BaseTitle tag="h4">
            Save Money in <br> 3 Simple Steps
          </BaseTitle>
          <BaseParagraph>
            Get the best coupons and promo codes with zero hassle. We verify every deal so you don’t have to—just copy, apply, and save instantly at checkout.
          </BaseParagraph>
          <BaseButton class="btn bg-secondary text-white">Get Started</BaseButton>
        </div>
        <div class="timeline-card mt-2">
          <BaseTitle tag="h5">Find Amazing Deals</BaseTitle>
          <BaseParagraph>
            Browse thousands of verified coupons and discount codes from your favorite stores.
          </BaseParagraph>
        </div>
      </div>
      <div class="two">
        <div class="timeline-card">
          <BaseTitle tag="h5">Select & Copy</BaseTitle>
          <BaseParagraph>
            Choose your preferred offer and copy the code with one click or get direct store links.
          </BaseParagraph>
        </div>
      </div>
      <div class="three">
        <div class="timeline-card">
          <BaseTitle tag="h5">Enjoy Savings</BaseTitle>
          <BaseParagraph>
            Apply the code at checkout and watch your total drop! Share with friends for extra rewards.
          </BaseParagraph>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.timeline {
  padding: 5rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.timeline-card {
  padding: 2rem;
  box-shadow: box-shadow;
  background-color: var(--white-color);
  position: relative;
}

.two {
  align-self: self-end;
  margin-bottom: 8rem;
}

.timeline-card::before {
  content: '';
  position: absolute;
  top: -15px;
  left: 0;
  width: 30px;
  height: 30px;
  background-color: var(--alternative-color);
  border-radius: 50%;
}

.one .timeline-card::after {
  content: '';
  position: absolute;
  width: calc(100% + 4.5rem);
  height: 5px;
  left: 0;
  top: 0;
  transform-origin: left center;
  transform: rotate(-16deg);
  background-color: var(--alternative-color);
  z-index: 99;
}

.two .timeline-card::after {
  content: '';
  position: absolute;
  width: calc(100% + 4rem);
  height: 5px;
  left: 15px;
  top: -6px;
  transform-origin: left center;
  transform: rotate(-23deg);
  background-color: var(--alternative-color);
  z-index: 99;
}

.timeline h4 {
  margin: 0;
}
</style>
