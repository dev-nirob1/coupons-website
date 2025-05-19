<script setup>
</script>

<template>
  <section class="hero bg-light">
    <div class="content container medium-2 align-center justify-between">

      <div class="star-1">
        <img src="/star-1.png" alt="">
      </div>
      <div class="star-2">
        <img src="/star-2.png" alt="">
      </div>
      <div class="star-3">
        <img src="/angle-1.png" alt="">
      </div>

      <div class="text-content text-white">
        <div>
          <HeroTitle>Exclusive Coupons</HeroTitle>
          <HeroTitle class="highlight">Huge Savings</HeroTitle>
          <HeroTitle class="font-big">GRAB NOW!</HeroTitle>
        </div>

        <BaseParagraph>
          Unlock thousands of deals and save up to 80% at top retailers -
          verified coupons updated daily for maximum savings
        </BaseParagraph>
        <BaseButton>
          Explore Now
        </BaseButton>
      </div>
      <div class="img">
        <BaseImage src="https://cdn.pixabay.com/photo/2023/02/23/10/11/valentine-7808440_960_720.png" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.star-1,
.star-2,
.star-3 {
  position: absolute;
  height: 130px;
  width: 130px;
  transition: all .5s ease-in-out;
  animation: stars 2s infinite;
}

.star-1 {
  left: 15%;
  top: 55%;
  z-index: -1;
}

.star-2 {
  left: 70%;
  top: 65%;
  z-index: -1;
}

.star-3 {
  right: 10%;
  top: 5%;
  z-index: -1;
}

.star-1 img,
.star-2 img,
.star-3 img {
  width: 100%;
  height: 100%;
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--primary-color);
  position: relative;
  overflow: hidden;
}

.hero .content {
  position: relative;
  padding: .75rem;
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

@keyframes stars {
  0% {
    opacity: 1;
    height: 130px;
    width: 130px;
  }

  50% {
    opacity: .5;
    height: 110px;
    width: 110px;
  }

  100% {
    opacity: 1;
    height: 130px;
    width: 130px;
  }
}

@media (min-width: 768px) {
  .star-1 {
    left: 50%;
    top: 20%;
  }

  .star-2 {
    left: 60%;
    top: 65%;
  }

  .star-3 {
    right: 8%;
    top: 5%;
    z-index: -1;
  }


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
