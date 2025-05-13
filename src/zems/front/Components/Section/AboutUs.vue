<template>
  <section class="about-us">
    <div class="container large-2 align-center gap-2">
      <!-- image div  -->
      <div class="image">
        <img class="height-full" src="https://cdn.pixabay.com/photo/2024/10/06/22/36/shipping-9101364_960_720.png"
          alt="image" />
      </div>
      <div>
        <div>
          <BaseTitle>
            Your Trusted Coupon & Savings Marketplace.
          </BaseTitle>
        </div>
        <BaseParagraph>
          We help over 500,000 shoppers save money daily, offering exclusive deals in
          more than 70 countries. Our global reach ensures you get the best discounts,
          anytime, anywhere.
        </BaseParagraph>

        <!-- icon + title container  -->
        <ul class="all-2 align-center gap-1">
          <li>
            <i class="fa-solid fa-tag"></i><span>Exclusive Discounts</span>
          </li>
          <li>
            <i class="fa-solid fa-globe"></i><span>Worldwide Offers</span>
          </li>
          <li>
            <i class="fa-solid fa-bolt"></i><span>Instant Savings</span>
          </li>
          <li>
            <i class="fa-solid fa-shield"></i><span>Verified Deals</span>
          </li>
        </ul>

        <!-- icon + title container ends  -->
        <BaseParagraph class="quote">
          "Why pay full price? Join millions of smart shoppers who unlock exclusive savings every day. Your next deal is
          just a click away!"
        </BaseParagraph>
        <BaseButton>OUR SERVICES</BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us {
  padding: 5rem 0.5rem;
  color: var(--secondary-color);
  background: var(--primary-lighten-color);
}

.about-us .title {
  margin-bottom: 1rem;
}
.about-us ul {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}
.about-us ul li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.about-us i {
  font-size: 1.25rem;
  padding: 0.5rem;
  border-radius: 50%;
  color: var(--primary-lighten-color);
  background-color: var(--primary-color);
}

.about-us .quote {
  position: relative;
  background-color: rgb(from var(--primary-color) r g b/ 15%);;
  width: 100%;
  padding: 1rem 1.5rem;
}

.about-us .quote::before {
  position: absolute;
  content: "";
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

.about-us .btn {
  background-color: var(--alternative-color);
  color: var(--white-color);
  padding: 1.25rem 2rem;
  font-size: 1.25rem;
}
.about-us .btn:hover {
  color: var(--alternative-color);
  background-color: var(--white-color);
}

@media (min-width: 768px) {
  .about-us .quote {
    width: 90%;
  }
}
</style>
