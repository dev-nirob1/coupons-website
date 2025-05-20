<script setup>

</script>

<template>
  <div class="news-letter">
    <div class="container">
      <div class="content medium-5 align-center">
        <div class="medium-span-2 text-center">
          <SubTitle>Subscribe Our</SubTitle>
          <BaseTitle>NewsLetter</BaseTitle>
        </div>
        <div class="medium-span-3 flex pl-1">
          <InputField class="bg-white" placeholder="Please Enter Your Email" />
          <BaseButton class="bg-secondary text-white">Subscribe</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.news-letter {
  border-top: 5rem solid var(--primary-color);
  border-bottom: 5rem solid var(--primary-color);
  background: linear-gradient(to right, var(--primary-color), var(--primary-color), var(--white-color), var(--white-color));
}

.news-letter .content {
  border-top-left-radius: 10rem;
  border-bottom-left-radius: 10rem;
  height: 30vh;
  background-color: var(--white-color);
}

.news-letter input {
  outline: none;
  border: 2px solid var(--secondary-color);
  border-top-left-radius: .5rem;
  border-bottom-left-radius: .5rem;
}

.news-letter .btn {
  outline: none;
  padding: 0 1rem;
  border: 2px solid var(--secondary-color);
  border-radius: 0;
  border-top-right-radius: .5rem;
  border-bottom-right-radius: .5rem;
}

@media (min-width: 768px) {
  .news-letter {
    padding-left: 6rem;
    border-top: 0;
  }

  .news-letter .content {
    padding-right: 5rem;
  }

  .news-letter .btn {
    padding: 0 2rem;
  }
}
</style>
