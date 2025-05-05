<script setup>
defineProps({
  isModalOpen: {
    type: Boolean
  },
  handleCloseModal: {
    type: Function
  },
})
</script>

<template>
  <div v-if="isModalOpen" class="modal">
    <div class="modal-content">
      <BaseButton @click="handleCloseModal">Close</BaseButton>
      <slot></slot>
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
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  width: 90%;
  max-width: 800px;
  height: 80vh;
  max-height: 90vh;
  background-color: var(--white-color);
  border-radius: .5rem;
  overflow-y: auto;
  z-index: 1000;
  animation: modalFadeIn 0.3s ease-out;
}

.modal-content .btn {
  position: absolute;
  right: 0;
  top: -10px;
  border-radius: .5rem;
  color: var(--white-color);
  background-color: var(--secondary-color);
  z-index: 99;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(-50px);
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
