<script setup>
import BaseTitle from '@/components/element/BaseTitle.vue';
import InputField from '@/components/element/InputField.vue';
</script>

<template>
  <div class="users py-2">
    <div class="users-content bg-white p-2">
      <div class="flex justify-between align-center mb-2">
        <BaseTitle tag="h5">Total Users: 385</BaseTitle>
        <InputField placeholder="Search User" />
      </div>
      <table>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Member Since</th>
          <th>Total Purchase</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr v-for="(data, i) in 5" :key="i">
            <td>Md. John</td>
            <td>john@gmail.com</td>
            <td>Admin</td>
            <td>02-04-2024</td>
            <td>56</td>
            <td>
              <button type="button" class="actions-button">⋮</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>

.users h5 {
  margin: 10px 0;
}

.users input {
  width: fit-content;
}

.users-content {
  width: 100%;
  margin: 0 auto;
  overflow-x: auto;
}
.users-content table {
  background-color: var(--white-color);
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow-x: scroll;
  width: 100%;
  border-collapse: collapse;
}

.users-content table thead th{
  padding: 10px 0;
  border-bottom: 1px solid var(--border-color);

}
.users-content table tbody tr:not(:last-child) {
  border-bottom: 1px solid var(--border-color);
  /* padding-bottom: 8px; */
  margin-bottom: 8px;
}


</style>
