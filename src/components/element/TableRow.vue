<template>
  <!-- <div class="sl">
      <div class="medium-none">Id</div>
      1
    </div> -->
  <div class="table-row">
    <slot></slot>
  </div>
</template>
<style scoped>
.table-row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: .5rem;
}

.table-row:not(:last-child) {
  border-bottom: 1px solid var(--border-color);
}

.table-row>div {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
}

@media (min-width: 768px) {
  .table-row {
    display: flex;
    flex-direction: row;
    margin: 0;
  }

  .table-row>div {
    border: none;
  }

  .table-row>div {
    padding: 10px;
  }

  .medium-none {
    display: none !important;
  }
}
</style>
