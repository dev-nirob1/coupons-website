<template>
<section class="relative">
      <div class="container about-three large-2 align-center">
        <div class="about-image">
          <BaseImage
            Image="https://images.unsplash.com/photo-1740419014058-aa7e39329ced?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Happy shoppers using coupons"
          />
        </div>
        <div class="about-three-content">
          <div>
            <BaseTitle>About Our Coupons</BaseTitle>
            <BaseParagraph>
              We partner with top brands to bring you exclusive discounts and
              deals you won't find anywhere else. Our team carefully verifies
              every coupon to ensure you get working, legitimate offers that
              actually save you money. Whether you're shopping online or
              in-store, we've got the best deals to help you stretch your budget
              further.
            </BaseParagraph>
          </div>
          <div>
            <BaseTitle>Our Services</BaseTitle>
            <div>
              Beyond just listing coupons, we provide valuable services to
              enhance your savings experience:
              <ul>
                <ListItem>Daily deal alerts for limited-time offers</ListItem>
                <ListItem>Price comparison tools to ensure you get the best deal</ListItem>
                <ListItem>Exclusive member-only discounts</ListItem>
              </ul>
              We're committed to helping you save money without compromising on
              quality or convenience.
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
.about-three {
  min-height: 90vh;
}
.about-three .about-image {
  height: 80vh;
  width: 100%;
  z-index: 5;
}
.about-three .about-image img {
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  z-index: 5;
}

.about-three-content::after {
  content: "";
  position: absolute;
  top: 25%;
  right: 0;
  width: 100vw;
  height: calc(100% - 25%);
  background-color: var(--primary-lighten-color);
  z-index: -1;
}
.about-three .about-three-content {
  height: 100%;
  padding: 3.75rem 0.75rem;
  z-index: 1;
}
@media (min-width: 768px){
  .about-three .about-three-content {
    padding: 9rem 0.75rem 3.75rem 0.75rem;
  }
  .about-three-content::after {
    top: 40%;
    right: 0;
    width: 100vw;
    height: calc(100% - 40%);
  }
}
@media (min-width: 992px){
  .about-three .about-three-content {
    padding: 3.75rem;
  }
  .about-three-content::after {
    top: 0;
    right: 0;
    width: 55vw;
    height: 100%;
    background-color: var(--primary-lighten-color);
    z-index: -1;
  }
}
</style>
