<script setup>
defineProps({
  data: {
    type: Object
  }
})
</script>
<template>
  <div class="testimonial-card">
    <div class="flex align-center gap-1">
      <BaseImage image="/author.jpg" />
      <div>
        <SubTitle>{{data.name}}</SubTitle>
        <BaseParagraph>
          {{data.role}}
        </BaseParagraph>
      </div>
    </div>
    <div class="flex">
      <BaseParagraph>
        <i class="fa-solid fa-quote-left fa-2x"></i> {{data.quote}}
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
