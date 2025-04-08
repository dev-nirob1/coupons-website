<script setup>
defineProps({
  category: Object
})
</script>

<template>
  <div class="category-card">
    <div class="category-content">
      <div class="category-icon">
        {{ category.icon }}
      </div>
      <h3 class="category-name">{{ category.name }}</h3>
      <p class="category-count">{{ category.count }} deals</p>
    </div>
    <div class="category-overlay">
      <button class="view-btn">View Deals</button>
    </div>
  </div>
</template>


<style scoped>
.category-card {
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  height: 180px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.category-content {
  background-color: var(--white-color);
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.category-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.category-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
}

.category-count {
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.7);
}

.category-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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

.view-btn {
  padding: 0.5rem 1.25rem;
  background: white;
  color: #6c5ce7;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.view-btn:hover {
  background: #6c5ce7;
  color: white;
}

/* View All Button */
.view-all-container {
  display: flex;
  justify-content: center;
}

.view-all-btn {
  padding: 0.75rem 2rem;
  background: #6c5ce7;
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(108, 92, 231, 0.3);
}

.view-all-btn:hover {
  background: #5a4bd1;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(108, 92, 231, 0.4);
}
</style>
