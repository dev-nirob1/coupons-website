<template>
  <div class="bg-white statistics">
    <div class="small-2 larger-4 gap-1 stats-content">
      <!-- individual stats component  -->
      <div class="flex justify-center align-center text-center">
        <i class="fa-solid fa-tag"></i>
        <div>
          <h3>560+</h3>
          <p>Active Coupons</p>
        </div>
      </div>
      <div class="flex-col justify-center align-center text-center">
        <i class="fa-solid fa-users"></i>
        <h3>197K+</h3>
        <p>Happy Customers</p>
      </div>
      <div class="flex-col justify-center align-center text-center">
        <i class="fa-solid fa-store"></i>
        <h3>268+</h3>
        <p>Partner Stores</p>
      </div>
      <div class="flex-col justify-center align-center text-center">
        <i class="fa-solid fa-percent"></i>
        <h3>340+</h3>
        <p>Exclusive Deals</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.statistics {
  height: 100%;
  padding: 8rem 0;
}

.stats-content {
  height: 100%;
  align-items: center;
}

.stats-content i {
  position: relative;
  font-size: 3rem;
  padding: 2rem;
  border-radius: 1rem;
  background: linear-gradient(to right, var(--primary-lighten-color), var(--primary-light-color));
  overflow: hidden;
}

/* .stats-content i::before{
  content: '';
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: var(--white-color);
  bottom: -25px;
  left: -25px;
  z-index: 1;
} */
/* .stats-content i::after{
  content: '';
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: var(--white-color);
  top: -25px;
  right: -25px;
  z-index: 1;
} */

.stats-content h3 {
  margin: .75rem;
}

.stats-content p {
  margin: 0;
}
</style>
