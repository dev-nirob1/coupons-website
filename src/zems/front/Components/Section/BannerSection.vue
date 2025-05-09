<script setup>

</script>

<template>
  <section class="hero bg-light">
    <div class="content container medium-2 align-center justify-between">
      <div class="text-content">
        <div class="text-white">
          <HeroTitle>Exclusive Coupons</HeroTitle>
          <HeroTitle class="highlight">Huge Savings</HeroTitle>
          <HeroTitle class="font-big">GRAB NOW!</HeroTitle>
        </div>
        <!-- <HeroTitle class="text-white">
          <span>

          </span>
          <br>
          <span class="highlight">

          </span>
          <br>
          <span>
            GRAB NOW!
          </span>
        </HeroTitle> -->
        <BaseParagraph class="text-white">
          Unlock thousands of deals and save up to 80% at top retailers -
          verified coupons updated daily for maximum savings
        </BaseParagraph>
        <BaseButton>
          Explore Now
        </BaseButton>
      </div>
      <div class="img">
        <img src="https://cdn.pixabay.com/photo/2023/02/23/10/11/valentine-7808440_960_720.png" alt="">
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--primary-color);
  /* background-blend-mode: darken; */
}

.hero .content {
  padding: .5rem;
  margin-top: 5rem;
  width: 100%;
  text-align: left;
  z-index: 990;
}

.hero .hero-title {
  margin: 0;
}

.hero .hero-title.highlight {
  display: inline-block;
  font-size: 1.75rem;
  padding: 1rem;
  margin: .5rem 0;
  background-color: var(--primary-lighten-color);
  color: var(--primary-color);
}

.hero .hero-title.font-big {
  font-size: 3.5rem;
}

.hero .btn {
  background-color: var(--alternative-color);
  color: var(--white-color);
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
  width: 80%;
  height: 100%;
}

@media (min-width: 768px) {
  .hero .content {
    margin-top: 3rem;
  }

  .hero p {
    font-size: 1.15rem;
    margin-top: 0;
  }

  .hero .text-content {
    width: 80%;
  }

  .hero .hero-title .highlight {
    font-size: 2rem;
  }

  .hero .hero-title .font-big {
    font-size: 5.5rem;
  }
}
</style>
