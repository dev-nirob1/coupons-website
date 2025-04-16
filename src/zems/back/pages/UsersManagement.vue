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
          <tr>
            <td>Md. John</td>
            <td>john@gmail.com</td>
            <td>Admin</td>
            <td>02-04-2024</td>
            <td>56</td>
            <td>
              <button>Ban</button>
              <button>Promote</button>
              <button>Details</button>
            </td>
          </tr>
          <tr>
            <td>Md. John</td>
            <td>john@gmail.com</td>
            <td>Admin</td>
            <td>02-04-2024</td>
            <td>56</td>
            <td>
              <button>Ban</button>
              <button>Promote</button>
              <button>Details</button>
            </td>
          </tr>
          <tr>
            <td>Md. John</td>
            <td>john@gmail.com</td>
            <td>Admin</td>
            <td>02-04-2024</td>
            <td>56</td>
            <td>
              <button>Ban</button>
              <button>Promote</button>
              <button>Details</button>
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
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  overflow-x: scroll;
  border: 1px solid var(--light-color);
}

.users-content table thead th{
  padding: 10px 0;
  border-bottom: 1px solid var(--light-color);

}
.users-content table tbody tr:not(:last-child) {
  border-bottom: 1px solid var(--light-color);
  padding-bottom: 8px;
  margin-bottom: 8px;
}


</style>
