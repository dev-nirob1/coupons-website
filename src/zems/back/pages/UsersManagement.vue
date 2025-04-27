<script setup>
import BaseButton from '@/components/element/BaseButton.vue';
import BaseTitle from '@/components/element/BaseTitle.vue';
import InputField from '@/components/element/InputField.vue';
</script>

<template>
  <div class="users-management">
    <div class="users-content">
      <div class="flex justify-between align-center mb-2">
        <BaseTitle tag="h5">Total Users: 385</BaseTitle>
        <InputField placeholder="Search User" />
      </div>
      <Base
      <table>
        <thead>
          <th>Name</th>
          <th>Image</th>
          <th>Email</th>
          <th>Role</th>
          <th>Member Since</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr v-for="(data, i) in 5" :key="i">
            <td>Md. John</td>
            <td>
              <img src="/author.jpg" alt="">
            </td>
            <td>john@gmail.com</td>
            <td>Admin</td>
            <td>02-04-2024</td>
            <td class="flex align-center gap-1">
              <BaseButton class="bg-secondary text-white"><i class="fa-solid fa-eye"></i></BaseButton>
              <BaseButton class="bg-primary text-white"><i class="fa-solid fa-pen"></i></BaseButton>
              <BaseButton class="bg-secondary text-white"><i class="fa-solid fa-trash"></i></BaseButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
.users-management {
  padding: 1.5rem;
}

.users-management h5 {
  margin: 10px 0;
}

.users-management .users-content {
  width: 100%;
  margin: 0 auto;
  overflow-x: auto;
}

.users-management select,
.users-management input {
  border-radius: .5rem;
  border-color: var(--border-color);

}

.users-management input {
  width: fit-content;
}

.users-management .users-content table {
  background-color: var(--white-color);
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow-x: scroll;
  width: 100%;
  border-collapse: collapse;
}

.users-management .users-content table img {
  width: 3rem;
  height: 3rem;
  border-radius: .5rem;
}

.users-management .users-content table th {
  text-align: left;
  padding: .8rem;
  background-color: #f8fafc;
  font-weight: 600;
  color: var(--dark-color);
  border-bottom: 1px solid var(--border-color);
}

.users-management .users-content table td {
  color: var(--light-color);
  padding: .5rem;
}

.users-management .users-content table tr:not(:last-child) {
  border-bottom: 1px solid var(--border-color);
}
</style>
