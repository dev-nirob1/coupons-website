<template>
  <!-- <div class="table-row" v-for="data in datas" key="data.id"> -->
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

  <!-- <div class="span-2 all-3 small-gap-1 zems-action">
      <button class="btn bg-danger">Delete</button>
      <router-link class="btn bg-secondary" to="/coupon/">Details</router-link>
       &nbsp;
      <router-link class="btn bg-primary" to="/coupon/edit">Edit</router-link>
      &nbsp;
    </div> -->


  <!-- <div class="span-2 all-3 small-gap-1 zems-action">
      <button class="btn bg-danger">Delete</button>
      <router-link class="btn bg-secondary" to="/coupon/">Details</router-link>
       &nbsp;
      <router-link class="btn bg-primary" to="/coupon/edit">Edit</router-link>
      &nbsp;
    </div> -->
</template>
