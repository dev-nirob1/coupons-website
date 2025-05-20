<template>
  <div class="coupon-container">
    <div class="bar-code"><i class="fas fa-barcode"></i></div>
    <div class="coupon-title">
      <BaseTitle>
        <slot></slot>
      </BaseTitle>
    </div>
  </div>
</template>

<style>
.coupon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.75rem;
  height: 4.5rem;
  overflow: hidden;
}
.bar-code {
  color: var(--white-color);
  background-color: var(--secondary-color);
  font-size: 3rem;
  border: 2px solid var(--secondary-color);
  border-right: 2px dashed #faf9f6;
  border-left: 2px dashed #faf9f6;
  height: 100%;
  width: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.coupon-title {
  padding: .75rem;
  border: 1px solid var(--secondary-color);
  border-left: none;
  border-right: 3px dashed var(--secondary-color);
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
.coupon-title::before,
.coupon-title::after {
  content: '';
  position: absolute;
  left: -18px;
  height: 30px;
  width: 30px;
  background-color: #faf9f6;
  border: 1px solid var(--secondary-color);
  border-radius: 50%;
  z-index: 1;
}
.coupon-title::before {
  top: -24px;
}
.coupon-title::after {
  bottom: -24px;
}
.bg-lighten .bar-code {
  border-right: 2px dashed var(--primary-lighten-color);
  border-left: 2px dashed var(--primary-lighten-color);
}
.bg-lighten .coupon-title::before,
.bg-lighten .coupon-title::after {
  background-color: var(--primary-lighten-color);
}
@media (min-width: 768px) {
  .coupon-title {
    padding: 1rem 3rem;
  }
}
</style>
