<template>
    <section class="about-two bg-lighten">
      <div class="large-2 gap-2 align-center container">
        <div class="about-two-content">
          <h3 class="title mb-2">
            Join Millions Of Smart Shoppers Who Save With Us.
          </h3>
          <ul>
            <li>
              <div>
                <i class="icon fa-solid fa-hand-holding-heart fa-2xl"></i>
              </div>
              <div>
                <h5 class="sub-title">Who We Are</h5>
                <p>
                  Deal-hunters helping you save time and money. We find the
                  coupons so you don't have to.
                </p>
              </div>
            </li>
            <li>
              <div class="icon">
                <i class="icon fa-solid fa-hand-holding-heart fa-2xl"></i>
              </div>
              <div>
                <h5 class="sub-title">Why Trust Us?</h5>
                <p>
                  Every coupon is tested. We partner with brands to bring you
                  exclusive, working discounts.
                </p>
              </div>
            </li>
            <li>
              <div>
                <i class="icon fa-solid fa-hand-holding-heart fa-2xl"></i>
              </div>
              <div>
                <h5 class="sub-title">Our Promise</h5>
                <p>
                  We’re not just a coupon site—we’re your savings ally.
                  Questions? Our team responds in under 5 minutes.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div class="image-container relative">
          <img
            src="https://images.unsplash.com/photo-1740419014058-aa7e39329ced?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
          />
          <div class="about-card">
            <h3>20</h3>
            <div>
              <p>%</p>
              <p>off</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<style scoped>
.about-two {
  padding: 3.75rem 0;
}
.about-two .image-container {
  height: 80vh;
}
.about-two .image-container img {
  width: 100%;
  height: 100%;
  border-radius: 50% 50% 0 0;
}
.about-two p {
  margin: 0.5rem 0 0 0;
}
.about-two .icon {
  height: 80px;
  width: 80px;
  color: var(--white-color);
  background-color: var(--secondary-color);
  border-radius: 0.5rem;
  display: grid;
  place-content: center;
}
.about-two .about-two-content ul {
  list-style: none;
  padding: 0;
}
.about-two .about-two-content ul li {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.about-two .about-two-content ul li:not(:last-child) {
  margin-bottom: 1rem;
}
.about-two .about-card {
  position: absolute;
  left: 38%;
  top: -2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
  background-color: var(--white-color);
}
.about-two .about-card h3 {
  font-size: 2.5rem;
  font-weight: 900;
}
.about-two .about-card P {
  font-size: 0.75rem;
  font-weight: 600;
}
.about-two .about-card h3,
.about-two .about-card p {
  margin: 0;
}
@media (min-width: 992px){
  .about-two .image-container img {
    border-radius: 50% 0 0 50%;
  }
  .about-two .about-two-content ul li {
    flex-direction: row;
  }
  .about-two .about-card {
    left: -2.5rem;
    top: 45%;
    rotate: 40deg;
  }
}
</style>
