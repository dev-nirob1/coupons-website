<template>
  <!-- <div class="table-row" v-for="data in datas" key="data.id"> -->
  <div class="table-row">
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
    <div>
      <div class="medium-none">Details</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aspernatur.
      <!-- {{ data.details }} -->
    </div>
    <div>
      <div class="medium-none">Code</div>
      etefdhov
      <!-- {{ data.code }} -->
    </div>
    <div>
      <div class="medium-none">User</div>
      niorb
      <!-- {{ data.title }} -->
    </div>
    <div>
      <div class="medium-none">Category</div>
      ramadan
      <!-- {{ data.cat_name }} -->
    </div>
    <div class="span-2 all-3 small-gap-1 zems-action">
      <button  class="btn bg-danger">Delete</button>
      <router-link class="btn bg-secondary" to="/coupon/">Details</router-link>
      <!-- &nbsp; -->
      <router-link class="btn bg-primary" to="/coupon/edit">Edit</router-link>
      <!-- &nbsp; -->

    </div>

  </div>
</template>
<style scoped>

</style>
