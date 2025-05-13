<template>
  <div class="clock">
    <div class="hour-hand"></div>
    <div class="minute-hand"></div>
  </div>
</template>
<style scoped>
.clock {
  width: 150px;
  height: 150px;
  border: 6px solid var(--primary-color);
  background-color: var(--primary-lighten-color);
  border-radius: 50%;
  position: relative;
  margin: 0 auto;
}

.clock::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  background: var(--primary-color);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hour-hand {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4px;
  height: 40px;
  background: var(--primary-color);
  transform-origin: bottom;
  transform: translate(-50%, -100%) rotate(30deg);
}

.minute-hand {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 3px;
  height: 60px;
  background: var(--primary-color);
  transform-origin: bottom;
  transform: translate(-50%, -100%) rotate(0deg);
  animation: spin 10s linear infinite;
}

@keyframes spin {
  to {
    transform: translate(-50%, -100%) rotate(360deg);
  }
}
</style>
