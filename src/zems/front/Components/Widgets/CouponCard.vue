<script setup>
defineProps({
  couponData: {
  type: Object
},
handleOpenModal: {
  type: Function
},
isModalOpen: {
  type: Boolean
}
})

</script>

<template>
  <div :class="['coupon-card', couponData?.exclusive ? 'bg-danger' : 'bg-secondary']">



    <div class="flex justify-between gap-1">
      <div>
        <BaseTitle tag="h5">{{couponData?.name}}</BaseTitle>
        <BaseParagraph>{{ couponData?.details }}</BaseParagraph>
      </div>
      <div>
        <span>Flat</span>
        <BaseTitle v-if="couponData?.discount_percent" class="price">{{couponData?.discount_percent}} <span>%</span></BaseTitle>
        <BaseTitle v-else class="price">{{couponData?.discount}} <span>$</span></BaseTitle>
      </div>
    </div>
    <div class="card-footer pt-1">
      <div class="flex justify-between align-center">
        <BaseParagraph>Validity: {{couponData?.expire_date}}</BaseParagraph>
        <BaseButton @click='handleOpenModal' class="bg-white">Get Code</BaseButton>
      </div>
      <div class="circle-1"></div>
      <div class="circle-2"></div>
    </div>
  </div>
</template>

<style scoped>
.coupon-card {
  /* background-color: var(--secondary-color); */
  color: var(--white-color);
  padding: 2rem;
  border-radius: .75rem;
  overflow: hidden;
}


.coupon-card h5 {
  margin: 0 0 10px 0;
}

.coupon-card h3 {
  margin-top: 10px;
}
.coupon-card .price {
  display: flex;
  align-items: center;
}
.coupon-card .price span {
  font-size: 1.5rem;
}
.card-footer {
  position: relative;
  border-top: 5px dashed #fff;
  text-align: center;
}
.card-footer .circle-1,.circle-2 {
  position: absolute;
  top: -25px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: var(--white-color);
}
.circle-1 {
  left: -55px;
}

/* Right circle */
.circle-2 {
  right: -55px;
}


</style>
