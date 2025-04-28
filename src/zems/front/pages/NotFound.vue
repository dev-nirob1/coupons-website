<script setup>
const handleRefresh = ()=> {
  window.location.reload()
}
const handleGoBack = ()=> {
  history.back()
}
</script>
<template>
  <div class="not-found">
    <div class="image">
      <img src="/errorBanner.png" alt="">
    </div>
    <div class="content">
      <div class="text-center text-white">
        <HeroTitle>404</HeroTitle>
        <BaseTitle>Page Not Found</BaseTitle>
        <div class="flex justify-center gap-1">
          <BaseButton @click="handleGoBack" class="bg-secondary text-white">Go Back</BaseButton>
        <BaseButton @click="handleRefresh" class="bg-white">Refresh</BaseButton>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.not-found {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.not-found .image {
  position: relative;
  width: 100%;
  height: 100%;
}

.not-found .image img {
  width: 100%;
  height: 100%;
  object-fit: 100% 100%;
  display: block;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.404), rgba(0, 0, 0, 0.408));
}

.not-found h1 {
  font-size: 5rem;
  margin: 1rem;
}

.not-found h3 {
  font-size: 4rem;
  margin: 1rem;

}
</style>
