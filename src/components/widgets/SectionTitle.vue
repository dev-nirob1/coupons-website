<script setup>
defineProps({
  title: String
})
</script>
<template>
  <div class="coupon-container">
    <div class="bar-code"><i class="fas fa-barcode"></i></div>
    <div class="coupon-title">
      <BaseTitle>{{ title }}</BaseTitle>
    </div>
  </div>
</template>

<style scoped>
.coupon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  height: 6rem;
  overflow: hidden;
}
.bar-code {
  background-color: var(--secondary-color);
  color: var(--white-color);
  font-size: 3rem;
  border: 5px solid var(--secondary-color);
  border-right: 5px dashed var(--white-color);
  border-left: 5px dashed var(--white-color);
  height: 100%;
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.coupon-title {
  padding: 1rem 2rem;
  border: 5px solid var(--secondary-color);
  border-left: none;
  border-right: 5px dashed var(--secondary-color);
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}

.coupon-title::before {
  content: "";
  position: absolute;
  top: -24px;
  left: -23px;
  height: 30px;
  width: 30px;
  background-color: #faf9f6;
  border: 5px solid var(--secondary-color);
  border-radius: 50%;
  z-index: 1;
}
.coupon-title::after {
  content: "";
  position: absolute;
  top: 74px;
  left: -23px;
  height: 30px;
  width: 30px;
  background-color: #faf9f6;
  border: 5px solid var(--secondary-color);
  border-radius: 50%;
  z-index: 1;
}
</style>
