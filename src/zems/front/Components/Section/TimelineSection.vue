
<template>
  <section class="timeline container">
    <div class="large-3 gap-2 height-full relative">
      <div class="one">
        <div>
          <BaseTitle tag="h4">
            We Have The Best Team <br> And The Best Process
          </BaseTitle>
          <BaseParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores enim aperiam aliquid sint vero ipsa ullam ipsum architecto debitis voluptatem.
          </BaseParagraph>
          <BaseButton class="btn bg-secondary text-white">Get Started</BaseButton>
        </div>
        <div class="timeline-card mt-2">
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

.timeline-card {
  border: 2px solid var(--border-color);
  position: relative;
}

.two {
  align-self: self-end;
  margin-bottom: 5rem;
}

.timeline-card::before{
  content: '';
  position: absolute;
  top: -20px;
  left: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--alternative-color);
  border-radius: 50%;
}

.one .timeline-card::after{
  content: '';
  position: absolute;
  width: calc(100% + 5rem);
  height: 5px;
  left: 0;
  top: -10px;
  background-color: var(--alternative-color);
}

.timeline h4 {
  margin: 0;
  line-height: 1.3;
}
</style>
