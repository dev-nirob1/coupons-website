<template>
   <div class="table-header">
      <slot></slot>
    </div>
</template>
<style scoped>
.table-header {
  display: none;
  /* display: flex; */
  justify-content: space-between;
  background-color: lightblue;
  border-bottom: 1px solid var(--border-color);

}

.table-header>div {
  padding: 10px;
}
@media (min-width: 768px) {
  .table-header {
    display: flex;
  }
}
</style>
