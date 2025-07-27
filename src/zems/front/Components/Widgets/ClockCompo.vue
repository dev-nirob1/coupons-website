<template>
  <div class="clock">
    <div class="hour-hand"></div>
    <div class="minute-hand"></div>
  </div>
</template>
<style scoped>
/* Analog clock styling */
.clock {
  width: 150px;
  height: 150px;
  border: 6px solid var(--white-color);
  background: rgb(from var(--primary-color) r g b/5%);
  border-radius: 50%;
  position: relative;
  margin: 2rem auto;
}
.clock::after {
  content: "";
  width: 12px;
  height: 12px;
  background: var(--white-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.clock::after,
.hour-hand,
.minute-hand {
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: bottom;
}
.hour-hand {
  width: 4px;
  height: 40px;
  background: var(--primary-color);
  transform: translate(-50%, -100%) rotate(30deg);
}
.minute-hand {
  width: 3px;
  height: 60px;
  background: var(--alternative-color);
  transform: translate(-50%, -100%) rotate(0deg);
  animation: spin 10s linear infinite;
}
@keyframes spin {
  to {
    transform: translate(-50%, -100%) rotate(360deg);
  }
}
</style>
