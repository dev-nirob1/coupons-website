<script setup>
defineProps({
  category: Object
})
</script>

<template>
  <div class="category-card">
    <div class="bg-white p-2">
      <div class="category-icon">
        <img :src="category.image" alt="">
      </div>
      <h5>{{ category.name }}</h5>
      <small>{{ category.count }} deals</small>
    </div>
    <div class="category-overlay">
      <button class="btn text-white bg-secondary">View Deals</button>
    </div>
  </div>
</template>


<style scoped>
.category-card {
  text-align: center;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 999;
}

.category-card:hover .category-overlay {
  opacity: 1;
}

</style>
