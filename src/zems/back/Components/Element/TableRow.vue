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
  align-items: center;
  margin-bottom: 2rem;
  padding: .5rem;
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

  .medium-none {
    display: none !important;
  }
}
</style>
