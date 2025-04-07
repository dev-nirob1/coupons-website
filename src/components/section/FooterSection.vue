<template>
  <footer class="footer">
    <div class="container">
      <!-- Main Footer Content -->
      <div class="footer-main">
        <!-- Brand Column -->
        <div class="footer-brand">
          <div class="logo">
            <span class="icon">🏷️</span>
            <span class="brand">Coupon<span class="highlight">Craze</span></span>
          </div>
          <p class="tagline">Your ultimate destination for exclusive deals and savings</p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10C2.38 10 2.38 10 2.38 10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" />
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2A5.8 5.8 0 0 1 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2M7.6 4A3.6 3.6 0 0 0 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4A3.6 3.6 0 0 0 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6M17.25 5.5A1.25 1.25 0 0 1 18.5 6.75A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75A1.25 1.25 0 0 1 17.25 5.5M12 7A5 5 0 0 1 17 12A5 5 0 0 1 12 17A5 5 0 0 1 7 12A5 5 0 0 1 12 7M12 9A3 3 0 0 0 9 12A3 3 0 0 0 12 15A3 3 0 0 0 15 12A3 3 0 0 0 12 9Z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Links Columns -->
        <div class="footer-links">
          <div class="links-column">
            <h3 class="links-title">Coupons</h3>
            <ul class="links-list">
              <li><router-link to="/new-coupons">New Coupons</router-link></li>
              <li><router-link to="/popular">Popular Deals</router-link></li>
              <li><router-link to="/expiring-soon">Expiring Soon</router-link></li>
              <li><router-link to="/verified">Verified Codes</router-link></li>
              <li><router-link to="/free-shipping">Free Shipping</router-link></li>
            </ul>
          </div>

          <div class="links-column">
            <h3 class="links-title">Stores</h3>
            <ul class="links-list">
              <li><router-link to="/stores/all">All Stores</router-link></li>
              <li><router-link to="/stores/top">Top Stores</router-link></li>
              <li><router-link to="/stores/amazon">Amazon</router-link></li>
              <li><router-link to="/stores/walmart">Walmart</router-link></li>
              <li><router-link to="/stores/target">Target</router-link></li>
            </ul>
          </div>

          <div class="links-column">
            <h3 class="links-title">Company</h3>
            <ul class="links-list">
              <li><router-link to="/about">About Us</router-link></li>
              <li><router-link to="/blog">Blog</router-link></li>
              <li><router-link to="/careers">Careers</router-link></li>
              <li><router-link to="/press">Press</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>

          <div class="links-column">
            <h3 class="links-title">Support</h3>
            <ul class="links-list">
              <li><router-link to="/help">Help Center</router-link></li>
              <li><router-link to="/faq">FAQ</router-link></li>
              <li><router-link to="/submit-coupon">Submit a Coupon</router-link></li>
              <li><router-link to="/report-issue">Report an Issue</router-link></li>
              <li><router-link to="/feedback">Feedback</router-link></li>
            </ul>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="footer-newsletter">
          <h3 class="newsletter-title">Get the best deals to your inbox</h3>
          <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
            <input
              type="email"
              placeholder="Your email address"
              class="newsletter-input"
              v-model="email"
              required
            >
            <button type="submit" class="newsletter-button">
              Subscribe
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </form>
          <p class="newsletter-disclaimer">We'll never spam you. Unsubscribe anytime.</p>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-copyright">
          &copy; {{ new Date().getFullYear() }} CouponCraze. All rights reserved.
        </div>
        <div class="footer-legal">
          <router-link to="/privacy">Privacy Policy</router-link>
          <router-link to="/terms">Terms of Service</router-link>
          <router-link to="/cookies">Cookie Policy</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const subscribeNewsletter = () => {
  // Implement newsletter subscription logic
  console.log('Subscribing with email:', email.value);
  alert('Thanks for subscribing!');
  email.value = '';
};
</script>

<style scoped>
/* Base Styles */
.footer {
  background: #111827;
  color: #f3f4f6;
  padding: 4rem 1rem 2rem;
  position: relative;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Brand Section */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.logo .icon {
  font-size: 1.8rem;
}

.logo .highlight {
  color: #f43f5e;
}

.tagline {
  color: #9ca3af;
  line-height: 1.6;
  max-width: 300px;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.social-link svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

/* Links Sections */
.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.links-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.links-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.links-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.links-list a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.2s ease;
}

.links-list a:hover {
  color: #f43f5e;
}

/* Newsletter Section */
.footer-newsletter {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.newsletter-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
  max-width: 400px;
}

.newsletter-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: none;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  outline: none;
  transition: all 0.3s ease;
}

.newsletter-input:focus {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 2px rgba(244, 63, 94, 0.3);
}

.newsletter-input::placeholder {
  color: #9ca3af;
}

.newsletter-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1.5rem;
  background: #f43f5e;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-button:hover {
  background: #e11d48;
}

.newsletter-button svg {
  width: 18px;
  height: 18px;
}

.newsletter-disclaimer {
  font-size: 0.8rem;
  color: #6b7280;
}

/* Footer Bottom */
.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 2rem;
  text-align: center;
}

.footer-copyright {
  color: #6b7280;
  font-size: 0.9rem;
}

.footer-legal {
  display: flex;
  gap: 1.5rem;
}

.footer-legal a {
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-legal a:hover {
  color: #f43f5e;
}

/* Responsive Design */
@media (min-width: 768px) {
  .footer-main {
    grid-template-columns: repeat(3, 1fr);
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-newsletter {
    grid-column: span 2;
  }
}

@media (min-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr repeat(4, 0.75fr);
  }

  .footer-links {
    grid-template-columns: repeat(4, 1fr);
    grid-column: span 4;
  }

  .footer-newsletter {
    grid-column: auto;
  }

  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}
</style>
