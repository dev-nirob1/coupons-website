<script setup>

</script>

<template>
  <div class="countdown-timer">
    <div>
      <BaseTitle tag="h4">11</BaseTitle>
      <span>Hours</span>
    </div>
    <div>
      <BaseTitle tag="h4">59</BaseTitle>
      <span>Minutes</span>
    </div>
    <div>
      <BaseTitle tag="h4">59</BaseTitle>
      <span>Seconds</span>
    </div>
  </div>
</template>

<style>
/* Countdown Timer */
.countdown-timer {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
  padding: 2rem;
  background-color: var(--primary-color);
  backdrop-filter: drop-shadow(4px 4px 10px blue);
}

.countdown-timer>div {
  background: var(--alternative-color);
  height: 6rem;
  width: 6rem;
  padding: .75rem 1rem;
  border-radius: 8px;
}

</style>
