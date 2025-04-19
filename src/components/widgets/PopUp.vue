<template>
  <div class="modal">
    <div class="modal-content">
      this is modal
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-content {
  position: relative;
  width: 70%;
  max-width: 800px;
  height: 80vh;
  max-height: 90vh;
  background-color: var(--white-color);
  border-radius: 8px;
  overflow-y: auto;
  z-index: 1000;
  animation: modalFadeIn 0.3s ease-out;
}
@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (min-width: 768px) {
  .modal-content {
    width: 90%;
    height: 85vh;
  }
}
</style>
