
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

.two {
  align-self: end;
  margin-bottom: 8rem;
}
.one, .three {
  align-self: start;
}
.timeline-card {
  position: relative;
  box-shadow: var(--box-shadow);
  padding: 1rem;
  z-index: 2;
}

.timeline-card::before,
.timeline-card::after {
  content: '';
  position: absolute;
  background-color: var(--alternative-color);
  z-index: 1;
}

.one .timeline-card::after {
  right: 0;
  top: 1%;
  width: calc(50% + 2rem);
  transform: translate(100%, -50%);
  height: 5px;
}

.two .timeline-card::before {
  left: 50%;
  top: 0;
  transform: translate(-50%, -100%);
  width: 5px;
  height: 9.15rem;
}

.two .timeline-card::after {
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 100%);
  width: 5px;
  height: 8rem;
}

.three .timeline-card::before {
  left: 0;
  top: 96%;
  width: calc(50% + 2rem);
  transform: translate(-100%, 50%);
  height: 5px;
}

.three .text-right {
  text-align: right;
  margin-bottom: 2rem;
}

.timeline h4 {
  margin: 0;
  line-height: 1.3;
}
</style>
