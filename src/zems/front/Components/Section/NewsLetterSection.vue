<script setup>

</script>

<template>
  <div class="news-letter">
    <div class="content medium-5 pr-5 align-center container">
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
  border-bottom: 5rem solid var(--primary-color);
  padding-left: 6rem;
  background-color: var(--primary-color);
  background: linear-gradient(to right, var(--primary-color),var(--primary-color), var(--white-color), var(--white-color));

}

.news-letter .content {
  border-top-left-radius:10rem;
  border-bottom-left-radius: 10rem;
  height: 30vh;
  background-color: var(--white-color);
}
.news-letter input{
  outline: none;
  border: 2px solid var(--secondary-color);
  border-top-left-radius: .5rem;
  border-bottom-left-radius: .5rem;
}
.news-letter .btn{
  outline: none;
  padding: 0 2rem;
  border: 2px solid var(--secondary-color);
  border-radius: 0;
  border-top-right-radius: .5rem;
  border-bottom-right-radius: .5rem;
}
</style>
