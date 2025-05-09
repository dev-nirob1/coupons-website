<script setup>
defineProps({
  i: {
    type: Number
  }
})
</script>
<template>
  <div class="testimonial-card">
    <div class="flex align-center gap-1">
      <BaseImage image="/author.jpg" />
      <div>
        <SubTitle>Adam Josheph</SubTitle>
        <BaseParagraph>
          Selling Agent
        </BaseParagraph>
      </div>
    </div>
    <div class="flex">
      <BaseParagraph>
        <i class="fa-solid fa-quote-left fa-2x"></i> Precious ipsum dolor sit amet
        consectetur adipisicing elit, sed dos
        mod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad min
        veniam, quis nostrud Precious ips
        um dolor sit amet, consecte
      </BaseParagraph>
    </div>

  </div>
</template>
<style scoped>
.testimonial-card {
  flex: 0 0 auto;
  padding: 2rem 1.5rem;
  width: 300px;
  min-height: 280px;
  background: var(--white-color);
  border-radius: .5rem;
  box-shadow: var(--box-shadow);
}


.testimonial-card h5 {
  margin: 0;
  padding: 0;
}

.testimonial-card p {
  margin: 10px 0 0 0;
}

.testimonial-card img {
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
}
</style>
