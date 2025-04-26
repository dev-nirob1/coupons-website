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
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 2rem;
}

.table-row > div {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
}

@media (min-width: 768px) {

  .table-row {
    flex-direction: row;
    margin: 0;
  }

  .table-row .medium-none {
    display: none;
  }
}
</style>
