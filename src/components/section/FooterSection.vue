<script setup>
import { ref } from 'vue';
import BaseParagraph from '../element/BaseParagraph.vue';
import BaseTitle from '../element/BaseTitle.vue';
import BaseImage from '../element/BaseImage.vue';
import ListItem from '../element/ListItem.vue';
import InputField from '../element/InputField.vue';

const currentYear = new Date().getFullYear();
const email = ref('');

const handleSubscribe = () => {
  // In a real app, connect to your email service
  console.log('Subscribed with:', email.value);
  alert(`Thank you for subscribing with ${email.value}!`);
  email.value = '';
};
</script>
<template>
  <footer class="coupon-footer">
    <!-- Main Footer Content -->
    <div class="container medium-2 large-4 gap-2 p-2">
      <!-- Company Info -->
      <div class="flex flex-col gap-1">
        <div class="logo">
          <BaseImage src="/logo.png"/>
          <span>CouponSavings</span>
        </div>
        <BaseParagraph>Your gateway to exclusive discounts and savings</BaseParagraph>
        <div class="social-links">
          <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-pinterest-p"></i></a>
        </div>
      </div>

      <!-- Quick Links -->
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

      <!-- Coupon Policies -->
      <div class="">
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

      <!-- Newsletter -->
      <div class="newsletter">
        <BaseTitle tag="h5" class="section-title">Get Exclusive Deals</BaseTitle>
        <BaseParagraph>Subscribe to receive special offers before anyone else</BaseParagraph>
        <form @submit.prevent="handleSubscribe" class="subscribe-form">
          <div class="input-group">
            <InputField v-model="email"
              type="email"
              placeholder="Your email address"
              required
              class="email-input"/>
            <button type="submit" class="subscribe-btn">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </form>
        <div class="trust-badges">
          <div class="badge">
            <i class="fas fa-shield-alt"></i>
            <span>Secure</span>
          </div>
          <div class="badge">
            <i class="fas fa-lock"></i>
            <span>No Spam</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright & Bottom Bar -->
    <div class="footer-bottom">
      <div class="copyright">
        &copy; {{ currentYear }} CouponSavings. All rights reserved.
      </div>
      <div class="payment-methods">
        <i class="fab fa-cc-visa"></i>
        <i class="fab fa-cc-mastercard"></i>
        <i class="fab fa-cc-amex"></i>
        <i class="fab fa-cc-paypal"></i>
        <i class="fab fa-cc-apple-pay"></i>
      </div>
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
.social-links a{
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
.payment-methods a:hover i{
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
  transition: all 0.3s ease;
}

.footer-links a:hover {
  color: var(--secondary-color);
  padding-left: 5px;
}

.footer-links a:hover::before {
  opacity: 1;
}
.subscribe-form {
  margin-bottom: 1.5rem;
}

.input-group {
  display: flex;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.email-input {
  flex: 1;
  padding: 0.8rem 1.2rem;
  border: none;
  font-size: 0.95rem;
  background: var(--white-color);
}

.subscribe-btn {
  padding: 0 1.5rem;
  background: var(--secondary-color);
  color: var(--white-color);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.subscribe-btn:hover {
  background: var(--secondary-color);
}

.trust-badges {
  display: flex;
  gap: 1rem;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #bdc3c7;
}

.badge i {
  color: var(--alternative-color);
}

.footer-bottom {
  background: var(--light-color);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.copyright {
  color: var(--white-color);
  font-size: 0.9rem;
}

.payment-methods {
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  color: var(--white-color);
}

.payment-methods i {
  transition: all 0.3s ease;
}

.payment-methods i:hover {
  color: var(--secondary-color);
  transform: translateY(-3px);
}

@media (min-width: 992px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
  }
}
</style>
