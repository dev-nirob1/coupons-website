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
}

.coupon-title .title {
  margin: 0;
  text-align: center;
  width: 100%;
}
</style>
