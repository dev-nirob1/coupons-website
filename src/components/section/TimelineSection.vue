<script setup>
import BaseButton from '../element/BaseButton.vue';
import BaseParagraph from '../element/BaseParagraph.vue';
import BaseTitle from '../element/BaseTitle.vue';
</script>

<template>
  <section class="timeline container">
    <div class="large-3 gap-2 height-full relative">
      <div class="one">
        <div class="timeline-card">
          <BaseTitle tag="h5">Project Discovery Cell</BaseTitle>
          <BaseParagraph>
            Party we years to order allow asked of. We to opinion friends message as delight.
          </BaseParagraph>
        </div>
      </div>
      <div class="two">
        <div class="timeline-card">
          <BaseTitle tag="h5">Project Discovery Cell</BaseTitle>
          <BaseParagraph>
            Party we years to order allow asked of. We to opinion friends message as delight.
          </BaseParagraph>
        </div>
      </div>
      <div class="three">
        <div class="text-right">
          <BaseTitle tag="h4">
            We Have The Best Team <br> And The Best Process
          </BaseTitle>
          <BaseParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim aperiam aliquid sint vero ipsa ullam ipsum architecto debitis voluptatem.
          </BaseParagraph>
          <BaseButton class="btn bg-secondary text-white">Get Started</BaseButton>
        </div>
        <div class="timeline-card">
          <BaseTitle tag="h5">Project Discovery Cell</BaseTitle>
          <BaseParagraph>
            Party we years to order allow asked of. We to opinion friends message as delight.
          </BaseParagraph>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  padding: 5rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.timeline h4 {
  margin: 0;
}

.two {
  align-self: self-end !important;
  margin-bottom: 8rem;
}

.one,
.three {
  align-self: self-start !important;
  height: fit-content;
}

.timeline .timeline-card {
  position: relative;
  border: 1px solid var(--border-color);
  padding: 20px;
}

/* Connecting Lines */
.one .timeline-card::after,
.two .timeline-card::before,
.two .timeline-card::after,
.three .timeline-card::before {
  content: '';
  position: absolute;
  background-color: #ff0000; /* Red line as in the screenshot */
}

.one .timeline-card::after {
  right: -50%;
  top: 0%;
  transform: translateY(-50%);
  width: 50%;
  height: 4px;
}

.two .timeline-card::before {
  left: 50%;
  top: -50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100px;
}

.two .timeline-card::after {
  right: 50%;
  top: 100%;
  transform: translateX(-50%);
  width: 4px;
  height: 100px;
}

.three .timeline-card::before {
  left: 0;
  top: 100%; /* Adjust to match the height of the vertical line above */
  transform: translateX(-50%);
  width: 4px;
  height: 100px;
}
</style>
