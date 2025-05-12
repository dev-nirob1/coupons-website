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
        <BaseButton class="bg-secondary text-white">Subscribe</BaseButton>
      </div>
    </div>
  </div>
</template>
<style scoped>
.news-letter {
  padding-bottom: 5rem;
  padding-left: 6rem;
  background-color: var(--secondary-color);
}

.news-letter .content {
  /* max-width: 992px; */
  /* margin-left: 6rem; */
  border-top-left-radius:7rem;
  border-bottom-left-radius: 7rem;
  height: 30vh;
  background-color: var(--white-color);
}

</style>
