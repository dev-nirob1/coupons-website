<template>
  <div class="bg-white statistics">
    <div class="container">
      <ul class="small-2 larger-4 gap-2 medium-gap-1 stats-content">
        <!-- individual stats component  -->
        <ListItem>
          <i class="fa-solid fa-tag fa-3x"></i>
          <div>
            <BaseTitle>560+</BaseTitle>
            <BaseParagraph>Active Coupons</BaseParagraph>
          </div>
        </ListItem>
        <ListItem>
          <i class="fa-solid fa-users fa-3x"></i>
          <div>
            <BaseTitle>197K+</BaseTitle>
            <BaseParagraph>Happy Customers</BaseParagraph>
          </div>
        </ListItem>
        <ListItem>
          <i class="fa-solid fa-store fa-3x"></i>
          <div>
            <BaseTitle>268+</BaseTitle>
            <BaseParagraph>Partner Stores</BaseParagraph>
          </div>
        </ListItem>
        <ListItem>
          <i class="fa-solid fa-percent fa-3x"></i>
          <div>
            <BaseTitle>340+</BaseTitle>
            <BaseParagraph>Exclusive Deals</BaseParagraph>
          </div>
        </ListItem>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.statistics {
  padding: 3.75rem 0;
}
.statistics .stats-content {
  list-style: none;
  padding: 0;
  height: 100%;
  align-items: center;
}
.statistics .stats-content li {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.statistics .stats-content i {
  height: 100px;
  width: 100px;
  line-height: 100px;
  text-align: center;
  border-radius: 1rem;
  background: var(--primary-lighten-color);
}
.statistics .stats-content p {
  margin: 0;
}


@media (min-width: 768px) {
  .statistics {
    padding: 8rem 0;
  }
}
</style>
