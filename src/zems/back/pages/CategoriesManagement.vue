<script setup>
import BaseTitle from '@/components/element/BaseTitle.vue';

</script>

<template>
  <div class="categories">
    <!-- Header Section with Title and Add Button -->
    <header class="dashboard-header">
      <BaseTitle>Categories Management</BaseTitle>
    </header>

    <!-- Search and Filter Controls -->
    <div class="flex justify-between mb-1">
      <button type="button" class="btn bg-secondary">Add Category</button>

      <select class="status-filter">
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
          <td>
            <button type="button" class="actions-button">⋮</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<style scoped>
.categories {
  padding: 2rem 3rem;
}
.categories .status-filter{
  width: fit-content !important;
  background-color: var(--white-color);
  border: none;
  border-radius: 5px;
  box-shadow: var(--card-shadow);
}
.categories table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border: 1px solid var(--light-color);
}
.categories table thead {
  border-bottom: 1px solid var(--light-color);
}
.categories table th {
  padding: 10px;
}
.categories table tr:not(:last-child) {
  border-bottom: 1px solid var(--light-color);
}
</style>
