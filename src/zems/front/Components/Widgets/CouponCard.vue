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
  <div class="coupon-card">
    <div class="card-body">
      <div>
        <SubTitle>{{ couponData?.name }}</SubTitle>
        <BaseParagraph>{{ couponData?.details < 15 ? couponData.details : couponData.details.substring(0, 50)
            }}...</BaseParagraph>
      </div>
      <div>
        <span>Flat</span>
        <BaseTitle v-if="couponData?.discount_percent" class="price">{{ couponData?.discount_percent }} <span>%</span>
        </BaseTitle>
        <BaseTitle v-else class="price">{{ couponData?.discount }} <span>$</span></BaseTitle>
      </div>
    </div>
    <div class="card-footer">
      <div class="flex justify-between align-center">
        <BaseParagraph>Validity: {{ couponData?.expire_date }}</BaseParagraph>
        <BaseButton @click='handleOpenModal' class="bg-white text-secondary">Get Code</BaseButton>
      </div>
      <div class="circle-1"></div>
      <div class="circle-2"></div>
    </div>
  </div>
</template>

<style>
.coupon-card {
  position: relative;
  background: linear-gradient(30deg, var(--primary-lighten-color), var(--primary-light-color));
  color: var(--secondary-color);
  padding: 2rem 2rem 6rem 2rem;
  border-radius: .75rem;
  overflow: hidden;
}

.card-body {
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.coupon-card p {
  margin-top: .5rem;
}

.coupon-card .price {
  display: flex;
  align-items: center;
}

.coupon-card .price span {
  font-size: 1.5rem;
}

.card-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 6rem;
  width: 100%;
  padding: 1.5rem;
  border-top: 5px dashed var(--primary-color);
  text-align: center;
  background-color: rgb(from var(--primary-color) r g b/ 30%);
}
.card-footer .btn {
  margin: 0;
  border-radius: .5rem;
}
.card-footer::before,
.card-footer::after
{
  content: '';
  position: absolute;
  top: -23px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #faf9f6;
}
.card-footer::before {
  left: -20px;
}
.card-footer::after {
  right: -20px;
}

.bg-secondary .card-footer::before,
.bg-secondary .card-footer::after{
  background-color: var(--secondary-color);
}

</style>
