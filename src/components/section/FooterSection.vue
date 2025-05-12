<script setup>
import { RouterLink } from 'vue-router'
const currentYear = new Date().getFullYear();

</script>
<template>
  <footer class="footer">
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
        <BaseTitle tag="h5">Quick Links</BaseTitle>
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
        <BaseTitle tag="h5">Coupon Policies</BaseTitle>
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

      <div>
        <BaseTitle tag="h5">Get Exclusive Deals</BaseTitle>
        <BaseParagraph>Subscribe to receive special offers before anyone else</BaseParagraph>

        <form class="subscribe-form">
          <InputField type="email" placeholder="Your email address" required />
          <BaseButton type="submit">
            <i class="fas fa-paper-plane"></i>
          </BaseButton>
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
.footer {
  background-color: var(--secondary-color);
  color: var(--white-color);
}

.footer h5 {
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
}

.footer .logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.footer .logo img {
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
  background-color: var(--alternative-color);
}

.social-links a:hover i {
  transform: scale(1.2);
  transition: all 0.3s ease;
}

.footer h5::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 70px;
  height: 3px;
  background-color: var(--primary-color);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

ul a {
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

ul a::before {
  content: '→';
  color: var(--primary-color);
  opacity: 0;
  display: none;
  transition: all 0.3s ease;
}

ul a:hover {
  color: var(--primary-color);
  padding-left: 5px;
}

ul a:hover::before {
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
  border-radius: .5rem 0 0 .5rem;
  outline: none;
  font-size: 0.95rem;
  background-color: var(--white-color);
}

.subscribe-form .btn {
  padding: 1rem 2rem;
  background-color: var(--alternative-color);
  color: var(--white-color);
  border: none;
  border-radius: 0 .5rem .5rem 0;
}

.subscribe-form .btn:hover {
  background-color: var(--primary-color);
}

.footer-bottom {
  padding: 1.5rem;
  text-align: center;
}
</style>
