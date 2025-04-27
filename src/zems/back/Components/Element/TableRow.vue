<template>
  <div class="table-row">
    <slot></slot>
  </div>
</template>
<style scoped>

.table-row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.table-row:not(:last-child) {
  border-bottom: 1px solid var(--border-color);
}
.medium-none {
    display: block;
    background-color: red;
    font-weight: bold;
  }
.table-row>div {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
}
@media (min-width: 768px) {

  .table-row {
    flex-direction: row;
    margin: 0;
  }

  .table-row > div {
    border: none;
  }

  .table-row > div {
    padding: 10px;
  }
    .medium-none {
    display: none !important;
  }
}
</style>
