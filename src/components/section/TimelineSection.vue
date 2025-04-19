<script setup>
import BaseButton from '../element/BaseButton.vue';
import BaseParagraph from '../element/BaseParagraph.vue';
import BaseTitle from '../element/BaseTitle.vue';

</script>

<template>
  <section class="timeline container">
    <div class="large-3 gap-3 height-full relative">
      <div class="one">
        <div class="timeline-card">
          <BaseTitle tag="h5">Project Discovery Cell</BaseTitle>
          <BaseParagraph>Party we years to order allow asked of. We to opinion friends message as delight.
          </BaseParagraph>
        </div>
      </div>
      <div class="two">
        <div class="timeline-card">
          <BaseTitle tag="h5">Project Discovery Cell</BaseTitle>
          <BaseParagraph>Party we years to order allow asked of. We to opinion friends message as delight.
          </BaseParagraph>
        </div>
      </div>
      <div class="three">
        <div>
          <BaseTitle>We Have The Best Team <br>
            And The Best process
          </BaseTitle>
          <BaseButton class="btn bg-secondary text-white">Get Started</BaseButton>
        </div>
        <div class="timeline-card">
          <BaseTitle tag="h5">Project Discovery Cell</BaseTitle>
          <BaseParagraph>Party we years to order allow asked of. We to opinion friends message as delight.
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

.timeline h3 {
  margin: 10px 0;
}

.two {
  align-self: self-end;
  /* border: 5px solid red; */
  margin-bottom: 8rem;
}

.one,
.three {
  /* border: 5px solid red; */
  align-self: self-start !important;
  height: fit-content;
}

.timeline .timeline-card {
  border: 1px solid var(--border-color);
  padding: 20px;
}

</style>
