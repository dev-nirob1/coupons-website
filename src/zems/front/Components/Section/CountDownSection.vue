<template>
  <div class="bg-white statistics">
    <div class="container">
      <ul class="small-2 larger-4 gap-2 medium-gap-1 stats-content">
        <!-- individual stats component  -->
        <li>
          <i class="fa-solid fa-tag"></i>
          <div>
            <h3>560+</h3>
            <p>Active Coupons</p>
          </div>
        </li>
        <li>
          <i class="fa-solid fa-users"></i>
          <div>
            <h3>197K+</h3>
            <p>Happy Customers</p>
          </div>
        </li>
        <li>
          <i class="fa-solid fa-store"></i>
          <div>
            <h3>268+</h3>
            <p>Partner Stores</p>
          </div>
        </li>
        <li>
          <i class="fa-solid fa-percent"></i>
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
.statistics {
  padding: 3.75rem 1rem;
  margin: 0 auto;
}
.stats-content {
  list-style: none;
  height: 100%;
  align-items: center;
}
.stats-content li {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.stats-content i {
  font-size: 3rem;
  height: 100px;
  width: 100px;
  line-height: 100px;
  text-align: center;
  border-radius: 1rem;
  background: var(--primary-lighten-color);
}
.stats-content p {
  margin: 0;
}

@media (min-width: 768px) {
  .statistics {
    padding: 8rem .5rem;
  }
}
</style>
