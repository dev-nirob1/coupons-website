<script setup>
import BaseImage from '../element/BaseImage.vue';
import BaseParagraph from '../element/BaseParagraph.vue';
import SubTitle from '../element/SubTitle.vue';


</script>

<template>
  <div class="testimonial">
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
.testimonial {
  flex: 0 0 auto;
  padding: 1.5rem;
  width: 300px;
  height: 280px;
  background: #ffff;
  border-radius: 8px;
}

.testimonial h5 {
  margin: 0;
  padding: 0;
}

.testimonial p {
  margin: 10px 0 0 0;
}

.testimonial img {
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
}
</style>
