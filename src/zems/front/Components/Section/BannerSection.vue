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
        <!-- <img
          src="https://images.pexels.com/photos/17796/christmas-xmas-gifts-presents.jpg"
          alt=""> -->
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
  background-image: url('https://cdn.pixabay.com/photo/2023/02/23/10/11/valentine-7808440_960_720.png');
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: auto 50%;
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

.hero .hero-title .highlight {
  font-size: 1.75rem;
 background-color: var(--alternative-color);
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
    border-bottom: 3px solid var(--alternative-color);
  }

  .hero .hero-title .font-big {
    font-size: 5.5rem;
  }
}
</style>
