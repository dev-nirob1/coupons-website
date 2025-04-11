<script setup lang="ts">
import BaseButton from '../element/BaseButton.vue';
import BaseTitle from '../element/BaseTitle.vue';
import InputField from '../element/InputField.vue';
import SubTitle from '../element/SubTitle.vue';

</script>

<template>
  <div class="news-letter">
    <div class=" content medium-5 align-center">
      <div class="medium-span-2 text-center">
        <SubTitle>Subscribe Our</SubTitle>
        <BaseTitle>NewsLetter</BaseTitle>
      </div>
      <div class="medium-span-3 flex">
        <InputField class="bg-white" placeholder="Please Enter Your Email"/>
        <BaseButton class="bg-primary">Subscribe</BaseButton>
      </div>
    </div>
  </div>
</template>
<style scoped>
.news-letter{
  height: 40vh;
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
.news-letter h5{
  margin: 10px 0;
}
</style>
