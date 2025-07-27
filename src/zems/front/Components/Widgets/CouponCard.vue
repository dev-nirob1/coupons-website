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
        <BaseButton @click='handleOpenModal' class="bg-secondary text-white">Get Code</BaseButton>
      </div>
    </div>
  </div>
</template>

<style>
.coupon-card {
  position: relative;
  background: linear-gradient(
    30deg,
    rgb(from var(--primary-lighten-color) r g b/ 30%),
    rgb(from var(--primary-light-color) r g b / 50%)
  );
  color: var(--secondary-color);
  padding: 2rem 1rem 6rem 1rem;
  border-radius: 0.75rem;
  overflow: hidden;
}
.card-body {
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
.coupon-card p {
  margin-top: 0.5rem;
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
  padding: 1.35rem;
  border-top: 5px dashed #faf9f6;
  text-align: center;
  background-color: rgb(from var(--primary-color) r g b/ 30%);
}
.card-footer .btn {
  margin: 0;
  border-radius: 0.5rem;
}
.card-footer::before,
.card-footer::after {
  content: "";
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
.bg-secondary .card-footer::after {
  background-color: var(--secondary-color);
}
.bg-secondary .coupon-card {
  background: linear-gradient(
    to bottom,
    rgb(from var(--primary-light-color) r g b / 80%),
    rgb(from var(--primary-light-color) r g b / 80%)
  );
}
.bg-secondary .card-footer {
  background-color: var(--primary-color);
  border-color: var(--secondary-color);
}
@media (min-width: 768px){
  .coupon-card{
     padding: 2rem 2rem 6rem 2rem;
  }
}
</style>
