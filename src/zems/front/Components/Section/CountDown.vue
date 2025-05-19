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
/* Countdown Timer */
.countdown-timer {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 1.5rem 0;
}
.countdown-timer>div {
  background: rgb(from var(--primary-color) r g b/15%);
  height: 5.5rem;
  width: 5.5rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
}
.countdown-timer>div h4{
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
@media (min-width: 768px){
  .countdown-timer>div {
  height: 6.5rem;
  width: 6.5rem;
  }
}
</style>
