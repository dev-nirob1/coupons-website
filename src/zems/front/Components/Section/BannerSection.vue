<template>
  <section class="hero bg-light">
    <div class="container">
      <div class="content medium-2 align-center justify-between">
          <div class="star-1">
            <BaseImage image="/star-1.png" alt="image"/>
          </div>
          <div class="star-2">
            <BaseImage image="/star-2.png" alt="image"/>
          </div>
          <div class="star-3">
            <BaseImage image="/angle-1.png" alt="image"/>
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
          <BaseImage image="https://cdn.pixabay.com/photo/2023/02/23/10/11/valentine-7808440_960_720.png" alt="image" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 2rem 0;
  min-height: 100vh;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero .content {
  position: relative;
  margin-top: 5rem;
  z-index: 5;
}
.hero .hero-title.highlight {
  display: inline-block;
  font-size: 1.75rem;
  padding: 1rem;
  margin: 0.5rem 0;
  color: var(--primary-color);
  background-color: var(--primary-lighten-color);
}
.hero .hero-title.font-big {
  font-size: 3.5rem;
}
.hero .btn {
  font-size: 1rem;
  padding: 1rem 1.5rem;
  color: var(--white-color);
  background-color: var(--alternative-color);
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
.star-1,
.star-2,
.star-3 {
  position: absolute;
  height: 60px;
  width: 60px;
  animation: float 3s ease-in-out infinite;
}
.star-1 {
  left: 0;
  top: 65%;
  z-index: -1;
}
.star-2 {
  right: 0;
  top: 60%;
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
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-1rem);
    opacity: 0.5;
  }
}


@media (min-width: 768px) {
  .hero .content {
    margin-top: 3rem;
  }
  .hero .btn {
    font-size: 1.25rem;
    padding: 1.25rem 2rem;
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

  /* Star positioning adjustments */
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
}
</style>
