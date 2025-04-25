<script setup>
</script>
<template>
  <div class="skeleton">
    <div class="p-2">
      <div class="image"> </div>
      <BaseTitle tag="h5"></BaseTitle>
    </div>
  </div>
</template>

<style scoped>
.skeleton{
  background-color: var(--white-color);
  border: var(--border-color);
  box-shadow: var(--box-shadow);
  border-radius: .5rem;
  text-align: center;
}
.skeleton h5{
  height: 20px;
  background-color: lightgray;
}
.skeleton .image{
  height: 80px;
  width: 100px;
  margin: 0 auto;
  background-color: lightgray;
  border-radius: .5rem;
}
</style>
