<template>
  <div class="users-management">
    <div class="users-content">
      <div class="flex justify-between align-center mb-2">
        <BaseTitle tag="h5">Total Users: 385</BaseTitle>
        <InputField placeholder="Search User" />
      </div>
      
      <BaseTable>
        <TableHeader>
          <div class="sl">SL</div>
          <div>Name</div>
          <div>Image</div>
          <div>Email</div>
          <div>Role</div>
          <div>Member Since</div>
          <div>Actions</div>
        </TableHeader>
        <TableRow v-for="(data, i) in 5" :key="i">
          <div class="sl">
            <div class="medium-none">Sl</div>
            1
            <!-- {{  }} -->
            <!-- {{ data.id }} -->
          </div>
          <div>
            <div class="medium-none">Name</div>
            Mr. Jack
            <!-- {{  }} -->
          </div>
          <div>
            <div class="medium-none">Image</div>
            <img src="/author.jpg" alt="">
          </div>
          <div>
            <div class="medium-none">Email</div>
            jack@gmail.com
            <!-- {{  }} -->
          </div>
          <div>
            <div class="medium-none">Role</div>
            Admin
            <!-- {{  }} -->
          </div>
          <div>
            <div class="medium-none">Member since</div>
            24-05-2022
            <!-- {{  }} -->
          </div>

          <div>
            <div class="medium-none">Actions</div>
            <div class="flex gap-1">
            <BaseButton class="bg-secondary text-white"><i class="fa-solid fa-eye"></i></BaseButton>
            <BaseButton class="bg-success text-white"><i class="fa-solid fa-pen"></i></BaseButton>
            <BaseButton class="bg-danger text-white"><i class="fa-solid fa-trash"></i></BaseButton>
          </div>
          </div>
        </TableRow>
      </BaseTable>
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

.users-management .users-content .table img {
  width: 3rem;
  height: 3rem;
  border-radius: .5rem;
  display: block;
}
</style>
