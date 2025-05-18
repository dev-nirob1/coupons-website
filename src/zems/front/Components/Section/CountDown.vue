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
  margin: 1.5rem 0;
  padding: 2rem;
}

.countdown-timer>div {
  background: var(--primary-color);
  height: 5.5rem;
  width: 5.5rem;
  /* padding: .75rem 1rem; */
  border-radius: 8px;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
}
.countdown-timer>div h4,
.countdown-timer>div span{
transition: all .3s ease;
}

.countdown-timer>div:nth-child(1) {
  animation-delay: 0s;
}

.countdown-timer>div:nth-child(2) {
  animation-delay: 0.5s;
}

.countdown-timer>div:nth-child(3) {
  animation-delay: 0.8s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: .75;
  }

  50% {
    transform: scale(1.1);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: .75;
  }
}
</style>
