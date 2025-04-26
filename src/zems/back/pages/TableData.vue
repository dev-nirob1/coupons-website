<script setup>
import TableData from '../Components/Element/TableData.vue';
import TableHeader from '../Components/Element/TableHeader.vue';
import TableRow from '../Components/Element/TableRow.vue';
</script>

<template>
  <!-- <div class="table-row" v-for="data in datas" key="data.id"> -->
  <TableData>
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
  </TableData>

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

<style scoped>
.table {
  /* max-width: 992px; */
  margin: 2rem auto;
  border: 1px solid var(--border-color);
}

.table-header {
  display: none;
  font-weight: bold;
  padding: .75rem;
  /* display: flex; */
  justify-content: space-between;
  background-color: #e6f5f5;
}

.table-row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.table-row:not(:last-child) {
  border-bottom: 1px solid var(--border-color);
}

.table-row>div {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
}

@media (min-width: 768px) {
  .table-header {
    display: flex;
  }

  .table-row {
    flex-direction: row;
    margin: 0;
  }

  .table-row>div {
    border: none;
  }

  .table-row>div {
    padding: 10px;
  }

  .table .medium-none {
    display: none;
  }
}
</style>
