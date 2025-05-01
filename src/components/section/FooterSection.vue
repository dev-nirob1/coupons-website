<script setup>
import { RouterLink } from 'vue-router'
const currentYear = new Date().getFullYear();

</script>
<template>
  <footer class="coupon-footer">
    <div class="container medium-2 large-4 gap-2 p-2">
      <div>
        <div class="logo">
          <BaseImage src="/logo.png" />
          <span>CouponSavings</span>
        </div>
        <BaseParagraph>Your gateway to exclusive discounts and savings</BaseParagraph>
        <div class="social-links">
          <RouterLink to="#"><i class="fab fa-facebook-f"></i></RouterLink>
          <RouterLink to="#"><i class="fab fa-twitter"></i></RouterLink>
          <RouterLink to="#"><i class="fab fa-instagram"></i></RouterLink>
          <RouterLink to="#"><i class="fab fa-pinterest-p"></i></RouterLink>
        </div>
      </div>
      <div>
        <BaseTitle tag="h5" class="section-title">Quick Links</BaseTitle>
        <ul class="footer-links">
          <ListItem>
            <RouterLink to="/">Home</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/">All Coupons</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/">Stores</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/">Categories</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/">Savings Tips</RouterLink>
          </ListItem>
        </ul>
      </div>

      <div>
        <BaseTitle tag="h5" class="section-title">Coupon Policies</BaseTitle>
        <ul class="footer-links">
          <ListItem>
            <RouterLink to="/">How it Works</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/">FAQ</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/">Terms of Services</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/">Privacy Policy</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="/">Contact Us</RouterLink>
          </ListItem>
        </ul>
      </div>

      <div class="newsletter">
        <BaseTitle tag="h5" class="section-title">Get Exclusive Deals</BaseTitle>
        <BaseParagraph>Subscribe to receive special offers before anyone else</BaseParagraph>
        <form class="subscribe-form">
            <InputField type="email" placeholder="Your email address" required class="email-input" />
            <button type="submit" class="subscribe-btn">
              <i class="fas fa-paper-plane"></i>
            </button>
        </form>
      </div>
    </div>

    <!-- Copyright & Bottom Bar -->
    <div class="footer-bottom">
      &copy; {{ currentYear }} CouponSavings. All rights reserved.
    </div>
  </footer>
</template>



<style scoped>
.coupon-footer {
  background: var(--dark-color);
  color: var(--white-color);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.logo img {
  height: 50px;
  width: 50px;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  display: inline-block;
  text-decoration: none;
  font-size: 1.25rem;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light-color);
}

.social-links a:hover i,
.payment-methods a:hover i {
  transform: scale(1.2);
  transition: all 0.3s ease;
}

.section-title {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
  color: var(--white-color);
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 70px;
  height: 2px;
  background: var(--secondary-color);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-links a {
  color: #ecf0f1;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-links a::before {
  content: '→';
  color: var(--secondary-color);
  opacity: 0;
  display: none;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  color: var(--secondary-color);
  padding-left: 5px;
}

.footer-links a:hover::before {
  opacity: 1;
  display: block;
}

.subscribe-form {
  display: flex;
}

.subscribe-form input {
  flex: 1;
  padding: 0.8rem 1.2rem;
  border: none;
  outline: none;
  font-size: 0.95rem;
  background-color: var(--white-color);
}

.subscribe-form button {
  padding: 1rem 2rem;;
  background-color: var(--secondary-color);
  color: var(--white-color);
  border: none;
}

.subscribe-form button:hover {
  background-color: var(--primary-color);
}

.footer-bottom {
  background: var(--light-color);
  padding: 1.5rem;
  text-align: center;
}

</style>
