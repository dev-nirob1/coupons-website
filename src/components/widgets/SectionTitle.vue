<script setup>
defineProps({
  title: String
})
</script>
<template>
  <div class="coupon-container">
    <div class="scissors"><i class="fas fa-barcode"></i></div>
    <div class="coupon-title">
      <BaseTitle>{{ title }}</BaseTitle>
    </div>
  </div>
</template>

<style scoped>
.coupon-container {
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  height: 6rem;
  overflow:hidden;
}

.scissors {
  font-size: 3rem;
  padding: .5rem;
  border: 5px dashed;
  height: 100%;
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.coupon-title {
  padding: 1rem 2rem;
  border: 5px solid;
  border-left: none;
  border-right: 5px dashed;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}

.coupon-title::before {
  content: '';
  position: absolute;
  top: -18px;
  left: -16px;
  height: 30px;
  width: 30px;
  background-color: #faf9f6;
  border: 1px solid var(--white-color);
  border-radius: 50%;
  z-index: 1;
}
.coupon-title::after {
  content: '';
  position: absolute;
  top: 75px;
  left: -16px;
  height: 30px;
  width: 30px;
  background-color: #faf9f6;
  border: 1px solid var(--white-color);
  border-radius: 50%;
  z-index: 1;
}


.coupon-title .title {
  margin: 0;
  text-align: center;
  width: 100%;
}
</style>
