<script setup>
import BaseImage from '../element/BaseImage.vue';
import BaseTitle from '../element/BaseTitle.vue';

defineProps({
  category: Object
})
</script>

<template>
  <div class="category-card">
    <div class="bg-white p-2">
      <div class="category-image">
        <BaseImage :image="category?.icon || '/categories/health.png'" />
      </div>
      <BaseTitle tag="h5">{{ category?.name }}</BaseTitle>
      <!-- <small>{{ category.count }} deals</small> -->
    </div>
    <div class="category-overlay">
        <RouterLink class="btn text-white bg-secondary" :to="`/category/${category?.slug}`">Go to Category</RouterLink>
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
  box-shadow: var(--box-shadow);
}
.category-card .category-image {
  margin: 0 auto;
  width: 80px;
  height: 80px;
}
.category-card h5 {
  margin: 1rem 0;
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
