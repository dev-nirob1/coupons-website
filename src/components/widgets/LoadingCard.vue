<template>
  <div class="card-skeleton">
    <div class="">
      <div>
        <BaseTitle tag="h5"></BaseTitle>
        <BaseTitle></BaseTitle>
      </div>
      <div>
        <BaseTitle></BaseTitle>
        <BaseParagraph></BaseParagraph>
      </div>
    </div>
    <div class="">
      <div>
        <BaseButton></BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-skeleton {
  background-color: var(--white-color);
  border-radius: .5rem;
  padding: 1rem;
}

.card-skeleton p,
button,
h3,
h5 {
  background-color: lightgray;
  margin: 1rem 0;
  height: 25px;
  width: 100%;
  border-radius: .5rem;
}

</style>
