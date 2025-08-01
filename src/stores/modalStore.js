import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore('modal', ()=>{
const isModalOpen = ref(false)

const handleCloseModal = () => {
  isModalOpen.value = false;
  console.log('modal open', isModalOpen.value);
}

const handleOpenModal = () => {
  isModalOpen.value = true
  console.log('modal close', isModalOpen.value);
}

return {isModalOpen, handleCloseModal, handleOpenModal}

})
