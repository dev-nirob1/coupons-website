<script setup>
import BaseButton from '@/components/element/BaseButton.vue';
import BaseTitle from '@/components/element/BaseTitle.vue';

</script>

<template>
  <div class="categories">
    <!-- Header Section with Title and Add Button -->
   <header class="flex align-center justify-between">
        <div>
          <BaseTitle>Categories Management</BaseTitle>
        </div>
        <RouterLink to="/add-categories" class="btn bg-secondary text-white">
          <i class="fa-solid fa-plus"></i>
          <span>Add Categories</span>
        </RouterLink>
    </header>

    <!-- Search and Filter Controls -->
    <div class="flex justify-between mb-1">

      <select class="bg-white mb-2">
        <option value="all">All Statuses</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>

    <!-- Categories Table -->
    <table class="categories-table">
      <thead>
        <tr>
          <th>Icon</th>
          <th>Name</th>
          <th>Items</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(icon, i) in 4" :key="i">
          <td>Icon</td>
          <td>Electronics</td>
          <td>1,240</td>
          <td>
            <span class="status-badge active">Active</span>
          </td>
          <td class="flex align-center gap-1">
            <BaseButton class="bg-secondary text-white"><i class="fa-solid fa-eye"></i></BaseButton>
            <BaseButton class="bg-primary text-white"><i class="fa-solid fa-pen"></i></BaseButton>
            <BaseButton class="bg-secondary text-white"><i class="fa-solid fa-trash"></i></BaseButton>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<style scoped>
.categories {
  padding: 1.5rem;
}
.categories input, .categories select{
  border-color: var(--border-color);
  border-radius: .5rem;
}

.categories table {
  background-color: var(--white-color);
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow-x: scroll;
  width: 100%;
  border-collapse: collapse;
}
.categories table th {
  text-align: left;
  padding: .8rem;
  background-color: #f8fafc;
  font-weight: 600;
  color: var(--dark-color);
  border-bottom: 1px solid var(--border-color);
}

.categoriestable table td {
  padding: .5rem;
  color: var(--light-color);
}

.categories table tr:not(:last-child) {
  border-bottom: 1px solid var(--border-color);
}
.categories .status-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}
.categories .status-badge.active {
  background-color: var(--secondary-color);
  color: var(--white-color);
}
.categories .status-badge.expired {
  background-color: var(--alternative-color);
  color: var(--white-color);
}
</style>
