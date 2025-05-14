<template>
  <div class="company-page">
    <!-- Banner Section -->
    <div class="company-banner">
      <div class="banner-content">
        <div class="company-logo">
          <img :src="company.logo" :alt="company.name + ' logo'">
        </div>
        <div class="company-header">
          <h1>{{ company.name }}</h1>
          <div class="company-rating">
            <span class="stars">★★★★★</span>
            <span>({{ company.reviewCount }} reviews)</span>
          </div>
          <div class="company-categories">
            <span v-for="category in company.categories" :key="category">{{ category }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="company-layout">
      <!-- Sidebar with Company Details -->
      <aside class="company-sidebar">
        <div class="company-info">
          <h2>About</h2>
          <p>{{ company.description }}</p>

          <div class="info-section">
            <h3>Contact</h3>
            <p><i class="icon-location"></i> {{ company.address }}</p>
            <p><i class="icon-phone"></i> {{ company.phone }}</p>
            <p><i class="icon-website"></i> <a :href="company.website" target="_blank">Visit Website</a></p>
          </div>

          <div class="info-section">
            <h3>Hours</h3>
            <div v-for="(hours, day) in company.businessHours" :key="day" class="hours-row">
              <span>{{ day }}:</span>
              <span>{{ hours }}</span>
            </div>
          </div>

          <div class="social-links">
            <a v-for="(link, platform) in company.socialMedia" :key="platform" :href="link" target="_blank">
              <i :class="'icon-' + platform"></i>
            </a>
          </div>
        </div>
      </aside>

      <!-- Main Content with Coupons -->
      <main class="company-content">
        <div class="coupons-header">
          <h2>Available Coupons & Deals</h2>
          <p>Save money with these exclusive offers from {{ company.name }}</p>
        </div>

        <div class="coupons-grid">
          <div v-for="coupon in coupons" :key="coupon.id" class="coupon-card">
            <div class="coupon-discount">
              <span>{{ coupon.discount }}</span>
              <span>OFF</span>
            </div>
            <div class="coupon-details">
              <h3>{{ coupon.title }}</h3>
              <p>{{ coupon.description }}</p>
              <div class="coupon-meta">
                <span>Expires: {{ coupon.expiryDate }}</span>
                <span>{{ coupon.usedCount }} people used this</span>
              </div>
            </div>
            <button class="coupon-button">Get Deal</button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      company: {
        name: "TechGadgets",
        logo: "/path/to/logo.png",
        description: "Leading provider of cutting-edge technology and gadgets at affordable prices. We've been serving tech enthusiasts since 2010 with the latest devices and accessories.",
        address: "123 Tech Street, Silicon Valley, CA 94025",
        phone: "(555) 123-4567",
        website: "https://techgadgets.example.com",
        reviewCount: 428,
        categories: ["Electronics", "Gadgets", "Computers"],
        businessHours: {
          "Monday-Friday": "9:00 AM - 7:00 PM",
          "Saturday": "10:00 AM - 6:00 PM",
          "Sunday": "11:00 AM - 5:00 PM"
        },
        socialMedia: {
          facebook: "https://facebook.com/techgadgets",
          twitter: "https://twitter.com/techgadgets",
          instagram: "https://instagram.com/techgadgets"
        }
      },
      coupons: [
        {
          id: 1,
          title: "Summer Tech Sale",
          description: "Get huge discounts on all our summer collection of gadgets and accessories.",
          discount: "20%",
          expiryDate: "2023-08-31",
          usedCount: 142
        },
        {
          id: 2,
          title: "New Customer Offer",
          description: "Exclusive discount for first-time customers at TechGadgets.",
          discount: "$15",
          expiryDate: "2023-12-31",
          usedCount: 89
        },
        {
          id: 3,
          title: "Laptop Bundle Deal",
          description: "Special price when you buy a laptop with our premium accessory bundle.",
          discount: "30%",
          expiryDate: "2023-09-15",
          usedCount: 56
        },
        {
          id: 4,
          title: "Clearance Sale",
          description: "Massive discounts on last season's models and overstock items.",
          discount: "50%",
          expiryDate: "2023-07-31",
          usedCount: 203
        }
      ]
    }
  }
}
</script>

<style>
.company-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 5rem 20px;
}

.company-banner {
  background: linear-gradient(135deg, #3a7bd5, #00d2ff);
  color: white;
  padding: 30px 0;
  border-radius: 0 0 12px 12px;
  margin-bottom: 30px;
}

.company-banner .banner-content {
  display: flex;
  align-items: center;
  gap: 30px;
}

.company-banner .banner-content .company-logo {
  width: 120px;
  height: 120px;
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.company-banner .banner-content .company-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.company-banner .banner-content .company-header h1 {
  margin: 0 0 8px;
  font-size: 2.2rem;
}

.company-banner .banner-content .company-header .company-rating {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.company-banner .banner-content .company-header .company-rating .stars {
  color: #ffd700;
  font-size: 1.2rem;
}

.company-banner .banner-content .company-header .company-categories {
  display: flex;
  gap: 10px;
}

.company-banner .banner-content .company-header .company-categories span {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
}

.company-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
}

.company-sidebar .company-info {
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.company-sidebar .company-info h2 {
  margin-top: 0;
  font-size: 1.5rem;
  color: #333;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.company-sidebar .company-info p {
  line-height: 1.6;
  color: #555;
}

.company-sidebar .company-info .info-section {
  margin: 25px 0;
}

.company-sidebar .company-info .info-section h3 {
  margin: 0 0 12px;
  font-size: 1.1rem;
  color: #444;
}

.company-sidebar .company-info .info-section .hours-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.company-sidebar .company-info .info-section .hours-row span:first-child {
  font-weight: 500;
}

.company-sidebar .company-info .social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.company-sidebar .company-info .social-links a {
  color: #3a7bd5;
  font-size: 1.4rem;
  transition: transform 0.2s;
}

.company-sidebar .company-info .social-links a:hover {
  transform: translateY(-2px);
}

.company-content .coupons-header {
  margin-bottom: 25px;
}

.company-content .coupons-header h2 {
  margin: 0 0 8px;
  font-size: 1.8rem;
  color: #333;
}

.company-content .coupons-header p {
  margin: 0;
  color: #666;
}

.company-content .coupons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.company-content .coupons-grid .coupon-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}

.company-content .coupons-grid .coupon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.company-content .coupons-grid .coupon-card .coupon-discount {
  background: linear-gradient(135deg, #ff8a00, #e52e71);
  color: white;
  padding: 20px;
  text-align: center;
}

.company-content .coupons-grid .coupon-card .coupon-discount span:first-child {
  font-size: 2.5rem;
  font-weight: bold;
  display: block;
  line-height: 1;
}

.company-content .coupons-grid .coupon-card .coupon-discount span:last-child {
  font-size: 1.2rem;
}

.company-content .coupons-grid .coupon-card .coupon-details {
  padding: 20px;
  flex-grow: 1;
}

.company-content .coupons-grid .coupon-card .coupon-details h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
  color: #333;
}

.company-content .coupons-grid .coupon-card .coupon-details p {
  margin: 0 0 15px;
  color: #555;
  line-height: 1.5;
}

.company-content .coupons-grid .coupon-card .coupon-details .coupon-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #777;
}

.company-content .coupons-grid .coupon-card .coupon-button {
  background: #3a7bd5;
  color: white;
  border: none;
  padding: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

.company-content .coupons-grid .coupon-card .coupon-button:hover {
  background: #2a5bb5;
}

@media (max-width: 768px) {
  .company-layout {
    grid-template-columns: 1fr;
  }

  .company-sidebar {
    order: 2;
  }

  .company-banner .banner-content {
    flex-direction: column;
    text-align: center;
  }

  .company-banner .banner-content .company-categories {
    justify-content: center;
  }
}
</style>
