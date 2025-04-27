<script setup>
import BaseButton from '@/components/element/BaseButton.vue';
import BaseTitle from '@/components/element/BaseTitle.vue';
import PopUp from '@/components/widgets/PopUp.vue';
import { ref } from 'vue';
import BaseTable from '../Components/Element/BaseTable.vue';
import TableHeader from '../Components/Element/TableHeader.vue';
import TableRow from '../Components/Element/TableRow.vue';
import TableData from './TableData.vue';

const isModalOpen = ref(false)

const handleCloseModal = () => {
  isModalOpen.value = false;
  console.log(isModalOpen.value);
}
const handleOpenModal = () => {
  isModalOpen.value = true;
  console.log(isModalOpen.value);
}

</script>

<template>
  <div class="categories">
    <PopUp :handleCloseModal="handleCloseModal" :isModalOpen="isModalOpen">View coupon details dashboard</PopUp>
    <!-- <TableData/> -->
    <!-- Header Section with Title and Add Button -->
    <header class="flex align-center justify-between">
      <div>
        <BaseTitle>Categories Management</BaseTitle>
      </div>
      <BaseButton @click="handleOpenModal" class="btn bg-secondary text-white">
        <i class="fa-solid fa-plus"></i>
        <span>Add Categories</span>
      </BaseButton>
    </header>
    <!-- Filter/sorting -->
    <div class="flex justify-between mb-1">
      <select class="bg-white mb-2">
        <option value="all">All Statuses</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
    <!-- Categories Table -->
    <BaseTable>
      <TableHeader>
        <div>Id</div>
        <div>Name</div>
        <div>Image</div>
      </TableHeader>

      <TableRow>
        <div class="sl">
          <div class="medium-none">Id</div>
          1
          <!-- {{ data.id }} -->
        </div>
        <div>
          <div class="medium-none">Name</div>
          coupon
          <!-- {{ data.name }} -->
        </div>
        <div>
          <div class="medium-none">Image</div>
          image
          <!-- {{ data.image }} -->
        </div>
      </TableRow>
    </BaseTable>
    <TableData/>
    <!-- <table class="categories-table">
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
            <BaseButton @click="handleOpenModal" class="bg-secondary text-white"><i class="fa-solid fa-eye"></i></BaseButton>
            <BaseButton class="bg-primary text-white"><i class="fa-solid fa-pen"></i></BaseButton>
            <BaseButton class="bg-secondary text-white"><i class="fa-solid fa-trash"></i></BaseButton>
          </td>
        </tr>
      </tbody>
    </table> -->

  </div>
</template>

<style scoped>
.categories {
  padding: 1.5rem;
}

.categories input,
.categories select {
  border-color: var(--border-color);
  border-radius: .5rem;
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
@media (min-width: 768px) {
  .medium-none {
    display: none !important;
  }
}
</style>
