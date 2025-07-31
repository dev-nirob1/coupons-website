<template>
<div class="bg-white statistics-two">
    <div class="container">
      <ul class="small-2 larger-4 gap-2 medium-gap-1 stats-content">
        <!-- individual stats component  -->
        <li>
          <i class="fa-solid fa-tag fa-3x"></i>
          <div>
            <h3>560+</h3>
            <p>Active Coupons</p>
          </div>
        </li>
        <li>
          <i class="fa-solid fa-users fa-3x"></i>
          <div>
            <h3>197K+</h3>
            <p>Happy Customers</p>
          </div>
        </li>
        <li>
          <i class="fa-solid fa-store fa-3x"></i>
          <div>
            <h3>268+</h3>
            <p>Partner Stores</p>
          </div>
        </li>
        <li>
          <i class="fa-solid fa-percent fa-3x"></i>
          <div>
            <h3>340+</h3>
            <p>Exclusive Deals</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.statistics-two {
  padding: 3.75rem 0;
  text-align: center;
}
.statistics-two .stats-content {
  list-style: none;
  padding: 0;
  align-items: center;
}
.statistics-two .stats-content li {
  box-shadow: var(--box-shadow);
  padding: 2rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.statistics-two .stats-content p {
  margin: 0;
}
</style>
