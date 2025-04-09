<script setup lang="ts">
import BaseButton from '../element/BaseButton.vue';
import BaseTitle from '../element/BaseTitle.vue';
import InputField from '../element/InputField.vue';
import SubTitle from '../element/SubTitle.vue';

</script>

<template>
  <div class="news-letter container">
    <div class="medium-5 align-center">
      <div class="medium-span-2 text-center">
        <SubTitle>Subscribe Our</SubTitle>
        <BaseTitle>NewsLetter</BaseTitle>
      </div>
      <div class="medium-span-3 flex">
        <InputField placeholder="Please Enter Your Email"/>
        <BaseButton class="bg-secondary text-white">Subscribe</BaseButton>
      </div>
    </div>
  </div>
</template>
<style scoped>
.news-letter{
  height: 40vh;
}
.news-letter h3 {
  margin: 0;
}
</style>
