<template>
  <section class="hero-two">
      <div class="video-bg">
        <video
          muted
          autoplay
          loop
          playsinline
          src="/online-shopping.mp4"></video>
      </div>
      <div class="banner-content">
        <div>
          <h1 class="hero-title">Guaranteed Working Coupon Codes</h1>
          <p>
            We thoroughly test all our promo codes to ensure they work—so you
            save time and money at checkout. Enjoy a 95% success rate on all our
            offers!
          </p>
          <div class="flex gap-1 justify-center">
            <button class="btn bg-secondary text-white">GET DEALS</button>
            <button class="btn bg-alternative text-white">LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
.hero-two {
  position: relative;
  text-align: center;
  color: var(--white-color);
  width: 100vw;
  min-height: 100vh;
  padding: 3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-two .banner-content {
  width: 100%;
  height: 100%;
  margin: 5rem 0;
  z-index: 5;
}

.hero-two .banner-content p {
  font-size: 1.25rem;
  margin-top: 1.4rem;
}
.hero-two .video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
}
.hero-two .video-bg video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
@media (min-width: 768px) {
 .hero-two {
    min-height: 100vh;
  }
  .hero-two .banner-content {
    width: 80%;
  }
}
@media (min-width: 992px){
  .hero-two .banner-content {
    max-width: 70%;
  }
  .hero-two .banner-content .btn {
    font-size: 1rem;
    font-weight: 600;
    padding: 1.25rem 2rem;
    border-radius: 0.5rem;
  }
}
</style>
