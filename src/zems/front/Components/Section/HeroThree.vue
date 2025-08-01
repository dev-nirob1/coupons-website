<template>
<section class="hero-three bg-primary">
      <div class="container medium-12">
        <div class="swiper-controls">
          <BaseButton class="button-next">
            Next <i class="fa-solid fa-arrow-right"></i>
          </BaseButton>
          <BaseButton class="button-prev">
            <i class="fa-solid fa-arrow-left"></i> Previous
          </BaseButton>
        </div>
        <div class="span-11 py-3">
          <div class="swiper mySwiper">
            <div class="swiper-wrapper span-11">
              <div class="swiper-slide">
                <div class="medium-2 gap-3 align-center relative">
                  <div class="swiper-content">
                    <div>
                      <HeroTitle>Huge Savings With</HeroTitle>
                      <HeroTitle>Exclusive Coupons</HeroTitle>
                    </div>
                    <BaseParagraph>
                      Unlock thousands of verified deals and save up to 80% at
                      your favorite retailers. New coupons added daily for
                      maximum savings!
                    </BaseParagraph>
                    <BaseButton class="bg-secondary text-white">
                      Explore Now
                    </BaseButton>
                  </div>
                  <div class="hero-three-img">
                    <BaseImage
                      class="img-full"
                      image="https://media.istockphoto.com/id/687572186/photo/handsome-young-man-in-shopping.jpg?s=612x612&w=0&k=20&c=P5__LphyJf3BZd4ha1SKHgzv1UC_7foYccB9L6-29Qo="
                      alt=""
                    />
                    <!-- discount card  -->
                    <div class="discount-card">
                      <BaseTitle>20</BaseTitle>
                      <div>
                        <BaseParagraph>%</BaseParagraph>
                        <BaseParagraph>off</BaseParagraph>
                      </div>
                    </div>
                    <!-- discount coupon card  -->
                    <div class="coupon-1">
                      <span>50% OFF</span>
                      <SubTitle>Amazon</SubTitle>
                    </div>
                    <!-- discount coupon card  -->
                    <div class="coupon-2">
                      <span>$20 OFF</span>
                      <SubTitle>Nike</SubTitle>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="medium-2 gap-3 align-center relative">
                  <div class="swiper-content">
                    <div>
                      <HeroTitle>Exclusive Coupons</HeroTitle>
                      <HeroTitle>Huge Savings</HeroTitle>
                    </div>
                    <BaseParagraph>
                      Unlock thousands of verified deals and save up to 80% at
                      your favorite retailers. New coupons added daily for
                      maximum savings!
                    </BaseParagraph>
                    <BaseButton class="bg-secondary text-white">
                      Explore Now
                    </BaseButton>
                  </div>
                  <div class="hero-three-img">
                    <BaseImage
                      class="img-full"
                      image="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <!-- discount card  -->
                    <div class="discount-card">
                      <BaseTitle>20</BaseTitle>
                      <div>
                        <BaseParagraph>%</BaseParagraph>
                        <BaseParagraph>off</BaseParagraph>
                      </div>
                    </div>
                    <!-- discount coupon card  -->
                    <div class="coupon-1">
                      <span>50% OFF</span>
                      <SubTitle>Amazon</SubTitle>
                    </div>
                    <!-- discount coupon card  -->
                    <div class="coupon-2">
                      <span>$20 OFF</span>
                      <SubTitle>Nike</SubTitle>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="medium-2 gap-3 align-center relative">
                  <div class="swiper-content">
                    <div>
                      <HeroTitle>Exclusive Coupons</HeroTitle>
                      <HeroTitle>Huge Savings</HeroTitle>
                    </div>
                    <BaseParagraph>
                      Unlock thousands of verified deals and save up to 80% at
                      your favorite retailers. New coupons added daily for
                      maximum savings!
                    </BaseParagraph>
                    <BaseButton class="bg-secondary text-white">
                      Explore Now
                    </BaseButton>
                  </div>
                  <div class="hero-three-img">
                    <BaseImage
                      class="img-full"
                      image="https://images.pexels.com/photos/12935094/pexels-photo-12935094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                    <!-- discount card  -->
                    <div class="discount-card">
                      <BaseTitle>20</BaseTitle>
                      <div>
                        <BaseParagraph>%</BaseParagraph>
                        <BaseParagraph>off</BaseParagraph>
                      </div>
                    </div>
                    <!-- discount coupon card  -->
                    <div class="coupon-1">
                      <span>50% OFF</span>
                      <SubTitle>Amazon</SubTitle>
                    </div>
                    <!-- discount coupon card  -->
                    <div class="coupon-2">
                      <span>$20 OFF</span>
                      <SubTitle>Nike</SubTitle>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
.hero-three {
  min-height: 100vh;
  background-color: var(--primary-color);
  padding: 3.75rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-three .swiper-controls {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
/* discount percentage tag  */
.hero-three .discount-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: var(--white-color);
  background-color: var(--secondary-color);
}
.hero-three .discount-card h1 {
  font-size: 1.5rem;
  font-weight: 900;
}
.hero-three .discount-card P {
  font-size: 0.75rem;
  font-weight: 600;
}
.hero-three .discount-card h1,
.hero-three .discount-card p {
  margin: 0;
}
/* discount coupon tag  */
.hero-three .coupon-1,
.hero-three .coupon-2 {
  position: absolute;
  background: var(--white-color);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
}
/* overlay cards  */
.hero-three .discount-card {
  rotate: -45deg;
  top: 65%;
  left: 0;
}
.hero-three .coupon-1 {
  border-top: 3px solid var(--danger-color);
  right: 0.25rem;
  top: 1rem;
}
.hero-three .coupon-2 {
  border-top: 3px solid var(--secondary-color);
  rotate: -10deg;
  right: 0.25rem;
  bottom: 1rem;
}
.hero-three .hero-three-img {
  position: relative;
  height: 280px;
  width: 280px;
  margin: 0 auto;
}
.hero-three .hero-three-img img {
  border-radius: 50%;
  display: block;
}
.img-full {
  width: 100%;
  min-height: 100%;
  object-fit: cover;
}
/* ========= swiper button styles ========= */
.hero-three .swiper-controls .button-next,
.hero-three .swiper-controls .button-prev {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--secondary-color);
  font-size: 1rem;
  position: relative;
}
.hero-three .swiper-controls .button-next::after,
.hero-three .swiper-controls .button-prev::before {
  content: "";
  position: absolute;
  border: 1px solid var(--secondary-color);
}
.hero-three .swiper-controls .button-prev::before {
  left: 0;
  height: 2.5rem;
  width: 3.75rem;
  border-right: 0;
}
.hero-three .swiper-controls .button-next::after {
  right: 0;
  height: 2.5rem;
  width: 2.75rem;
  border-left: 0;
}
.hero-three .swiper-controls {
  order: 2;
}
.hero-three .span-11 {
  order: 1;
}
@media (min-width: 576px){
  /*======= HERO SECTION - 3 SLIDER ======  */
  .hero-three-img {
    height: 400px;
    width: 400px;
  }
}
@media (min-width: 768px){
.hero-three .swiper-controls {
    flex-direction: column;
    gap: 2rem;
    order: 1;
  }
  /*swiper-controls  */
  .hero-three .swiper-controls .button-next,
  .hero-three .swiper-controls .button-prev {
    rotate: -90deg;
  }
  .hero-three .hero-three .span-11 {
    order: 2;
  }
  .hero-three .discount-card .title {
    font-size: 2rem;
  }
  .hero-three .discount-card {
    top: 50%;
    left: -3rem;
    padding: 0.75rem 1rem;
  }
  .hero-three .coupon-1,
  .hero-three .coupon-2 {
    padding: 1rem;
    width: 130px;
  }
  .hero-three .swiper-content {
    order: 1;
  }
  /* hero image  */
  .hero-three .hero-three-img {
    order: 2;
    width: 340px;
    height: 340px;
    margin: 0 auto;
  }
}
@media (min-width: 992px){
.hero-three .discount-card {
    padding: 1rem 2rem;
  }
  .hero-three .discount-card .title {
    font-size: 2.5rem;
  }
  .hero-three .coupon-1,
  .hero-three .coupon-2 {
    padding: 1.5rem;
  }
  .hero-three .coupon-1 {
    right: 1rem;
    top: 3rem;
  }
  .hero-three .coupon-2 {
    right: 1rem;
    bottom: 3rem;
  }
  /* hero image  */
  .hero-three .hero-three-img {
    width: 500px;
    height: 500px;
  }
}
</style>
