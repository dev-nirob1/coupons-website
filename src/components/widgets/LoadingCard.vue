<template>
  <div class="card-skeleton">
    <div class="flex justify-between gap-1">
      <div>
        <BaseTitle tag="h5"></BaseTitle>
        <BaseParagraph></BaseParagraph>
      </div>
      <div>
        <span></span>
        <BaseTitle></BaseTitle>
        <BaseTitle></BaseTitle>
      </div>
    </div>
    <div class="card-footer pt-1">
      <div class="flex justify-between align-center">
        <BaseParagraph></BaseParagraph>
        <BaseButton></BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-skeleton{
  background-color: var(--white-color);
}
.card-skeleton p, button, h3, h5{
  background-color: var(--light-color);
}
.card-skeleton p, h5{
  height: 20px;
}
.card-skeleton h3 {
  height: 30px;
}
</style>
