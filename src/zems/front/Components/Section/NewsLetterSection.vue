<script setup>

</script>

<template>
  <section class="news-letter">
    <div class="container">
     <div class="content">
          <div class="px-2 medium-px-3 large-px-5">
            <SubTitle>Subscribe Our</SubTitle>
            <BaseTitle>NewsLetter</BaseTitle>
          </div>
          <!-- Input and subscribe button -->
          <div class="subscribe-input">
            <InputField class="bg-white" placeholder="Please Enter Your Email" />
            <BaseButton class="bg-secondary text-white">Subscribe</BaseButton>
          </div>
        </div>
    </div>
  </section>
</template>
<style scoped>
.news-letter {
  border-top: 5rem solid var(--primary-color);
  border-bottom: 5rem solid var(--primary-color);
  background: linear-gradient(
    to right,
    var(--primary-color),
    var(--primary-color),
    var(--white-color),
    var(--white-color)
  );
}
.news-letter .content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top-left-radius: 10rem;
  border-bottom-left-radius: 10rem;
  height: 30vh;
  background-color: var(--white-color);
}
.subscribe-input {
  display: flex;
  padding: 0 1rem;
}
.news-letter input {
  outline: none;
  padding: 1rem;
  border: 2px solid var(--secondary-color);
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.news-letter .btn {
  outline: none;
  padding: 0 1rem;
  border: 2px solid var(--secondary-color);
  border-radius: 0;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}


@media (min-width: 768px) {
 .news-letter {
    padding-left: 6rem;
    border-top: 0;
  }
  .news-letter .content {
    flex-direction: row;
    padding-right: 5rem;
  }
  .subscribe-input {
    flex: 1;
  }
  .news-letter .btn {
    padding: 0 2rem;
  }
}
</style>
