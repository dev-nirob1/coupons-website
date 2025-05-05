<script setup>
import DashboardHeader from '@/zems/back/Components/Widgets/DashboardHeader.vue'
import PopUp from '@/components/Widgets/PopUp.vue';
import { ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

const isModalOpen = ref(false)
const handleCloseModal = () => {
  isModalOpen.value = false;
  // console.log(isModalOpen.value);
}
const handleOpenModal = () => {
  isModalOpen.value = true;
  // console.log(isModalOpen.value);
}

const { isLoading, data: categories = [] } = useQuery({
  queryKey: ['category'],
  queryFn: async () => {
    const res = await axios.get('https://coupon.zems.uk/api/category');
    return res.data;
  }
})

</script>

<template>
  <!-- <TableData /> -->
  <div class="categories">
    <PopUp :handleCloseModal="handleCloseModal" :isModalOpen="isModalOpen">
      View category details
    </PopUp>
    <!-- Header Section with Title and Add Button -->
     <DashboardHeader to="/add-category" linkName="Add Category" title="Categories Management" />

    <!-- Filter/sorting -->
    <div class="flex justify-between mb-1">
      <select class="bg-white mb-2">
        <option value="all">All Statuses</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
    <!-- Categories Table -->
    <div v-if="isLoading">IsLoading</div>

    <BaseTable>
      <TableHeader>
        <div class="sl">SL</div>
        <div>Name</div>
        <div>Status</div>
        <div>Actions</div>
      </TableHeader>

      <TableRow v-for="(data, i) in categories" :key="data.id">
        <div class="sl">
          <div class="medium-none">Sl</div>
          {{ i += 1 }}
          <!-- {{ data.id }} -->
        </div>
        <div>
          <div class="medium-none">Name</div>
          {{ data.name }}
        </div>
        <div>
          <div class="medium-none">Status</div>
          {{ data.status === 1 ? 'Active' : 'Inactive' }}
        </div>
        <div>
          <div class="medium-none">Actions</div>
          <div class="flex gap-1">
            <BaseButton @click="handleOpenModal" class="bg-secondary text-white"><i class="fa-solid fa-eye"></i>
            </BaseButton>
            <BaseButton class="bg-success text-white"><i class="fa-solid fa-pen"></i></BaseButton>
            <BaseButton class="bg-danger text-white"><i class="fa-solid fa-trash"></i></BaseButton>
          </div>
        </div>
      </TableRow>
    </BaseTable>
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
</style>
