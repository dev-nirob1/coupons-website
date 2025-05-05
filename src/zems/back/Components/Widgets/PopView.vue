<script setup>
defineProps({
  data: {
    type: Object
  }
})
</script>

<template>
  <div class="coupon-details">
    <div class="bg-secondary relative">
      <BaseTitle>Ramadan Offer</BaseTitle>
      <div class="discount">
        <BaseTitle tag="h5">20% OFF</BaseTitle>
      </div>
    </div>
    <div>
      <div class="flex align-center">
        <i class="fa-solid fa-stopwatch text-secondary"></i> &nbsp; Exprie date: &nbsp; <p>2025-04-28</p>
      </div>
      <div class="flex align-center">
        <i class="fa-solid fa-tag text-secondary"></i> &nbsp; Category: &nbsp; Ramadan
      </div>
      <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates et iusto fuga quidem veniam accusamus pariatur voluptatibus doloribus, soluta necessitatibus suscipit exercitationem libero commodi dignissimos? Voluptate facere nemo tenetur consequuntur!</p>
      </div>
      <p class="text-danger">TODO: Add button for logged-in users (show everywhere except dashboard)</p>
      <BaseButton class="btn bg-secondary width-full text-white">Get Code</BaseButton>
    </div>
    <p class="text-center text-light">
      Terms & Conditions Apply
    </p>
  </div>
  <!-- {{ data }} -->
</template>
<style scoped>
.coupon-details {
  padding: 1.5rem;
}

.coupon-details h3 {
  padding: 2.5rem;
  /* margin: 0; */
  text-align: center;
  color: var(--white-color);
}
.discount {
  position: absolute;
  right: 20px;
  bottom: -50px;
  background-color: var(--alternative-color);
  color: var(--white-color);
  padding: 0 .5rem;
  border-radius: 50%;
}
</style>
