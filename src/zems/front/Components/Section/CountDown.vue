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
        <div class="timer-box">
          <span class="timer-value">11</span>
          <span class="timer-label">Hours</span>
        </div>
        <div class="timer-box">
          <span class="timer-value">59</span>
          <span class="timer-label">Minutes</span>
        </div>
        <div class="timer-box">
          <span class="timer-value">59</span>
          <span class="timer-label">Seconds</span>
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

.timer-box {
  background: #f43f5e;
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  text-align: center;
  min-width: 80px;
  box-shadow: 0 4px 12px rgba(244, 63, 94, 0.2);
}

.timer-value {
  font-size: 1.8rem;
  font-weight: 700;
  display: block;
  line-height: 1;
}

.timer-label {
  font-size: 0.7rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
