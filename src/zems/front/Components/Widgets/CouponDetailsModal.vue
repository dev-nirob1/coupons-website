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
        <div class="modal-details">
          <!-- Coupon Header -->
          <div class="bg-primary relative">
            <BaseTitle>Ramadan Special Offer</BaseTitle>
            <div class="discount">
              <SubTitle>20% OFF</SubTitle>
            </div>
          </div>

          <!-- modal Body -->
          <div class="modal-body">
            <ul>
              <ListItem>
                <i class="fa-solid fa-stopwatch text-secondary"></i>
                <span class="text-bold">Expires:</span>
                <span>2025-04-28 (11:59 PM)</span>
              </ListItem>
              <ListItem>
                <i class="fa-solid fa-tag text-secondary"></i>
                <span class="text-bold">Category:</span>
                <span>Ramadan Essentials</span>
              </ListItem>
              <ListItem>
                <i class="fa-solid fa-store text-secondary"></i>
                <span class="text-bold">Valid at:</span>
                <span>All participating stores</span>
              </ListItem>
            </ul>
            <BaseParagraph>
              Enjoy 20% discount on all grocery items during this holy month of
              Ramadan. Minimum purchase of $50 required. Offer valid until
              supplies last. Cannot be combined with other promotions.
            </BaseParagraph>

            <BaseButton class="bg-secondary width-full text-white">
              <i class="fa-solid fa-ticket"></i> Reveal Code
            </BaseButton>
          </div>
          <small class="text-center text-light d-block">
            *Terms and condition applies
          </small>
        </div>

        <!-- Close Button -->
        <BaseButton @click="handleCloseModal" class="close-btn">
          <i class="fa-solid fa-xmark"></i>
        </BaseButton>
      </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-content {
  position: relative;
  width: 90%;
  max-width: 800px;
  height: 80vh;
  max-height: 90vh;
  padding: 2rem;
  background-color: var(--white-color);
  border-radius: 0.5rem;
  overflow: hidden;
  overflow: auto;
  z-index: 1001;
  animation: modalFadeIn 0.3s ease-out;
}
.modal-content::-webkit-scrollbar {
  display: none;
}
.modal-details .title {
  padding: 2.5rem 0 3.5rem 0;
  text-align: center;
  color: var(--white-color);
}
.discount {
  position: absolute;
  bottom: -4rem;
  left: 50%;
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  transform: translateX(-50%);
  background-color: var(--alternative-color);
  color: var(--white-color);
}
.discount .sub-title {
  line-height: 7rem;
  margin: 0 auto;
  width: fit-content;
}
.modal-body ul {
  margin-top: 3rem;
  padding: 0.5rem 0 0.25rem 0;
  list-style: none;
}
.modal-body ul i {
  color: var(--primary-color);
}
.modal-body ul li {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  margin: 0.75rem 0;
}
.modal-content .close-btn {
  position: absolute;
  right: 0px;
  top: 0px;
  border-radius: 0 0.5rem 0 0.5rem;
  color: var(--white-color);
  background-color: var(--secondary-color);
  z-index: 1002;
  margin: 0;
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
  .discount {
    left: 85%;
  }
  .modal-body ul {
    margin-top: 0;
  }
}
</style>
