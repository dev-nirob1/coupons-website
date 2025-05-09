<template>
  <section class="about-us">
    <div class="container large-2 align-center gap-2">
      <!-- image div  -->
      <div class="image">
        <img class="height-full" src="https://cdn.pixabay.com/photo/2023/06/05/17/19/shopping-8042865_960_720.png" alt="image" />
      </div>
      <div>
        <div>
          <BaseTitle>
            Your Trusted Coupon & Savings Marketplace.
          </BaseTitle>
        </div>
        <!-- section header div ends -->
        <BaseParagraph>
          We help over 500,000 shoppers save money daily, offering exclusive deals in
    more than 70 countries. Our global reach ensures you get the best discounts,
    anytime, anywhere.
        </BaseParagraph>

        <!-- icon + title container  -->
        <div class="all-2 align-center gap-1">
          <div>
            <i class="fa-solid fa-tag"></i>&nbsp;<span>Exclusive Discounts</span>
          </div>
          <div>
            <i class="fa-solid fa-globe"></i>&nbsp;<span>Worldwide Offers</span>
          </div>
          <div>
            <i class="fa-solid fa-bolt"></i>&nbsp;<span>Instant Savings</span>
          </div>
          <div>
            <i class="fa-solid fa-shield"></i>&nbsp;<span>Verified Deals</span>
          </div>
        </div>

        <!-- icon + title container ends  -->
        <BaseParagraph class="quote">
          "Why pay full price? Join millions of smart shoppers who unlock exclusive savings every day. Your next deal is just a click away!"
        </BaseParagraph>
        <BaseButton class="bg-alternative text-white">OUR SERVICES</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us {
  padding: 3rem .5rem;
  color: var(--secondary-color);
  background: var(--primary-light-black-color);
}
.about-us h3{
  margin-bottom: 1rem;
}
.about-us i {
  padding:  var(--primary-lighten-color);
  color: var(--primary-color);
}
.about-us .quote{
  position: relative;
  background-color: var(--primary-lighten-color);
  width: 100%;
  padding: 1rem 1.5rem;
}
.about-us .quote::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 5px;
  background: var(--alternative-color);
}
.about-us .image {
  /* width: 100%; */
  height: 70vh;
}
.btn {
  padding: 1.25rem 2rem;
  font-size: 1.25rem;
}
@media (min-width: 768px){
  .about-us .quote{
  width: 80%;
}
}
</style>
