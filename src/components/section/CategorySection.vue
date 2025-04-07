<!-- <template>
  <section class="categories-section">
    <h2 class="title">Browse by Category</h2>

    <div class="filters">
      <button
        v-for="cat in filterOptions"
        :key="cat"
        :class="{ active: selectedCategory === cat }"
        @click="selectedCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <div class="category-grid">
      <div
        v-for="category in filteredCategories"
        :key="category.id"
        class="category-card"
      >
        <div class="icon">{{ category.icon }}</div>
        <h3>{{ category.name }}</h3>
        <p>{{ category.description }}</p>
      </div>
    </div>
  </section>
</template> -->

<!-- <script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('All')

const filterOptions = ['All', 'Electronics', 'Fashion', 'Food', 'Travel', 'Beauty']

const categories = ref([
  { id: 1, name: 'Electronics', icon: '💻', description: 'Latest gadgets and tech deals', type: 'Electronics' },
  { id: 2, name: 'Fashion', icon: '👗', description: 'Trending fashion and styles', type: 'Fashion' },
  { id: 3, name: 'Food', icon: '🍕', description: 'Best food delivery coupons', type: 'Food' },
  { id: 4, name: 'Travel', icon: '✈️', description: 'Flights, hotels & more', type: 'Travel' },
  { id: 5, name: 'Beauty', icon: '💄', description: 'Beauty & wellness deals', type: 'Beauty' },
  { id: 6, name: 'Mobile Deals', icon: '📱', description: 'Latest mobile offers', type: 'Electronics' }
])

const filteredCategories = computed(() => {
  return selectedCategory.value === 'All'
    ? categories.value
    : categories.value.filter(c => c.type === selectedCategory.value)
})
</script> -->

<!-- <style scoped>
.categories-section {
  padding: 3rem 1.5rem;
  background: #f9fafb;
  text-align: center;
}

.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #111827;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.filters button {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 999px;
  background: white;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filters button.active,
.filters button:hover {
  background-color: #f43f5e;
  color: white;
  border-color: transparent;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.category-card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
}

.icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}
</style> -->
<template>
  <section class="category-section">
    <div class="container">
      <h2 class="section-title">Browse Categories</h2>
      <p class="section-subtitle">Find the best deals in your favorite categories</p>

      <!-- Filter Controls -->
      <div class="filter-controls">
        <div class="filter-group">
          <button
            class="filter-btn"
            :class="{ active: activeFilter === 'all' }"
            @click="setFilter('all')"
          >
            All Categories
          </button>
          <button
            class="filter-btn"
            :class="{ active: activeFilter === 'popular' }"
            @click="setFilter('popular')"
          >
            Most Popular
          </button>
          <button
            class="filter-btn"
            :class="{ active: activeFilter === 'new' }"
            @click="setFilter('new')"
          >
            Newest
          </button>
        </div>

        <div class="search-box">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search categories..."
            class="search-input"
          >
          <button class="search-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Categories Grid -->
      <div class="categories-grid">
        <div
          class="category-card"
          v-for="category in filteredCategories"
          :key="category.id"
          :style="{ backgroundColor: category.color }"
          @click="selectCategory(category)"
        >
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
      </div>

      <!-- View All Button -->
      <div class="view-all-container">
        <button class="view-all-btn">View All Categories</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// Sample categories data
const categories = ref([
  { id: 1, name: 'Fashion', icon: '👗', count: 245, color: '#FF9E9E', isPopular: true, isNew: false },
  { id: 2, name: 'Electronics', icon: '📱', count: 189, color: '#A0E7E5', isPopular: true, isNew: false },
  { id: 3, name: 'Home & Garden', icon: '🏠', count: 132, color: '#B5EAEA', isPopular: true, isNew: false },
  { id: 4, name: 'Food & Grocery', icon: '🍎', count: 98, color: '#FFD3B6', isPopular: false, isNew: true },
  { id: 5, name: 'Travel', icon: '✈️', count: 76, color: '#DCBFFF', isPopular: false, isNew: true },
  { id: 6, name: 'Health & Beauty', icon: '💄', count: 167, color: '#FFAAA7', isPopular: true, isNew: false },
  { id: 7, name: 'Sports & Outdoors', icon: '⚽', count: 112, color: '#A8E6CF', isPopular: false, isNew: false },
  { id: 8, name: 'Pet Supplies', icon: '🐶', count: 54, color: '#FFD3E0', isPopular: false, isNew: true },
]);

const activeFilter = ref('all');
const searchQuery = ref('');

// Filter categories based on active filter and search query
const filteredCategories = computed(() => {
  let result = [...categories.value];

  // Apply filter
  if (activeFilter.value === 'popular') {
    result = result.filter(cat => cat.isPopular);
  } else if (activeFilter.value === 'new') {
    result = result.filter(cat => cat.isNew);
  }

  // Apply search
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(cat =>
      cat.name.toLowerCase().includes(query)
    );
  }

  return result;
});

// Set active filter
const setFilter = (filter) => {
  activeFilter.value = filter;
};

// Handle category selection
const selectCategory = (category) => {
  console.log('Selected category:', category.name);
  // You would typically navigate to the category page here
  // router.push(`/categories/${category.id}`);
};
</script>

<style scoped>
/* Base Styles */
.category-section {
  padding: 4rem 1rem;
  background-color: #f8fafc;
}


.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  text-align: center;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1rem;
  color: #64748b;
  text-align: center;
  margin-bottom: 2.5rem;
}

/* Filter Controls */
.filter-controls {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .filter-controls {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.filter-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border-radius: 50px;
  border: 1px solid #e2e8f0;
  background: white;
  color: #64748b;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  background: #f1f5f9;
}

.filter-btn.active {
  background: #6c5ce7;
  color: white;
  border-color: #6c5ce7;
}

.search-box {
  position: relative;
  max-width: 300px;
}

.search-input {
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border-radius: 50px;
  border: 1px solid #e2e8f0;
  outline: none;
  transition: border 0.2s ease;
}

.search-input:focus {
  border-color: #6c5ce7;
}

.search-btn {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #94a3b8;
}

.search-btn svg {
  width: 18px;
  height: 18px;
}

/* Categories Grid */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .categories-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .categories-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}

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
