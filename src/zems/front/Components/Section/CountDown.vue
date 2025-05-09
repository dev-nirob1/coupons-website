<script setup>
// import { onBeforeUnmount, onMounted, ref } from 'vue';
// const hours = ref('12');
// const minutes = ref('45');
// const seconds = ref('30');
// let timerInterval;
// const updateTimer = () => {
//   let sec = parseInt(seconds.value);
//   let min = parseInt(minutes.value);
//   let hr = parseInt(hours.value);

//   if (sec > 0) sec--;
//   else {
//     sec = 59;
//     if (min > 0) min--;
//     else {
//       min = 59;
//       if (hr > 0) hr--;
//     }
//   }

//   hours.value = hr.toString().padStart(2, '0');
//   minutes.value = min.toString().padStart(2, '0');
//   seconds.value = sec.toString().padStart(2, '0');
// };

// onMounted(() => {
//   timerInterval = setInterval(updateTimer, 1000);
// });

// onBeforeUnmount(() => {
//   clearInterval(timerInterval);
// });
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
}

.countdown-timer>div {
  background: var(--danger-color);
  height: 6rem;
  width: 6rem;
  padding: .75rem 1rem;
  border-radius: 8px;
}

</style>
