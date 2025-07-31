<template>
<div class="bg-white statistics-two">
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
