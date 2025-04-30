<script setup>

</script>

<template>
  <div class="news-letter">
    <div class="content medium-5 align-center">
      <div class="medium-span-2 text-center">
        <SubTitle>Subscribe Our</SubTitle>
        <BaseTitle>NewsLetter</BaseTitle>
      </div>
      <div class="medium-span-3 flex">
        <InputField class="bg-white" placeholder="Please Enter Your Email" />
        <BaseButton class="bg-primary text-white">Subscribe</BaseButton>
      </div>
    </div>
  </div>
</template>
<style scoped>
.news-letter {
  padding: 2rem .5rem;
  height: 40vh;
  width: 100%;
  background-color: var(--secondary-color);
  color: var(--white-color);
}

.news-letter .content {
  max-width: 992px;
  margin: 0 auto;
}

.news-letter h3 {
  margin: 0;
}

.news-letter h5 {
  margin: 10px 0;
}
</style>
