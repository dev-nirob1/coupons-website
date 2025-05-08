<script setup>

</script>

<template>
  <section class="hero bg-light">
    <div class="content container medium-2 align-center justify-between">
      <div class="text-content">
        <HeroTitle class="text-white">
          <span>
            Exclusive Coupons
          </span>
          <br>
          <span class="highlight">
            Huge Savings
          </span>
          <br>
          <span class="font-big">
            GRAB NOW!
          </span>
        </HeroTitle>
        <BaseParagraph class="text-white">
          Unlock thousands of deals and save up to 80% at top retailers -
          verified coupons updated daily for maximum savings
        </BaseParagraph>
        <BaseButton class="bg-alternative text-white">
          Explore Now
        </BaseButton>
      </div>
      <div class="img">
        <img
          src="https://images.unsplash.com/photo-1674620213535-9b2a2553ef40?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="">
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--primary-color);
}
/* todo make margin-top 5-6rem for mobile */
.hero .content {
  margin-top: 3rem;
  width: 100%;
  text-align: left;
  z-index: 990;
}
.hero .hero-title {
    margin: 0;
  }
.hero .hero-title .highlight {
  padding: .5rem;
  font-size: 1.75rem;
  border-bottom: 3px solid var(--alternative-color);
  /* background-color: var(--alternative-color); */
}

.hero .hero-title .font-big {
  font-size: 3.5rem;
}

.hero .btn {
  font-size: 1.25rem;
  padding: 1rem 1.75rem;
}

.hero .btn:hover {
  background-color: var(--white-color);
  color: var(--secondary-color);
}

.hero .content .img {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero .content .img img {
  width: 100%;
  height: 100%;
  mix-blend-mode: color-dodge;
  /* border-radius: 50%; */
}


@media (min-width: 768px) {
  .text-content {
    width: 80%;
    /* margin-top: 2rem; */
  }


  .hero p {
    font-size: 1.15rem;
    margin-top: 0;
  }

  .hero .hero-title .highlight {
    padding: .5rem;
    font-size: 2rem;
    border-bottom: 3px solid var(--alternative-color);
    /* background-color: var(--alternative-color); */
  }

  .hero .hero-title .font-big {
    font-size: 5.5rem;
  }
}
</style>
