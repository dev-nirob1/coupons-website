<script setup>

</script>

<template>
  <div class="countdown-timer">
    <div>
      <BaseTitle tag="h4">11</BaseTitle>
      <small>Hours</small>
    </div>
    <div>
      <BaseTitle tag="h4">59</BaseTitle>
      <small>Minutes</small>
    </div>
    <div>
      <BaseTitle tag="h4">59</BaseTitle>
      <small>Seconds</small>
    </div>
  </div>
</template>

<style>
/* Digital countdown timer */
.countdown-timer {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin: 1.5rem 0;
}
.countdown-timer > div {
  background: rgb(from var(--primary-color) r g b/15%);
  height: 5rem;
  width: 5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
}
.countdown-timer > div h4 {
  transition: all 0.3s ease;
}
.countdown-timer > div:nth-child(1) {
  animation-delay: 0s;
}
.countdown-timer > div:nth-child(2) {
  animation-delay: 0.5s;
}
.countdown-timer > div:nth-child(3) {
  animation-delay: 0.8s;
}
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.75;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.75;
  }
}

@media (min-width: 768px) {
  /* countdown timer  */
  .countdown-timer {
    gap: 1.5rem;
  }
  .countdown-timer > div {
    height: 6.5rem;
    width: 6.5rem;
  }
}
</style>
