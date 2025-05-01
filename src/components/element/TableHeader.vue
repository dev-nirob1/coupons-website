<template>
   <div class="table-header">
      <slot></slot>
    </div>
</template>
<style scoped>
.table-header {
  display: none;
  font-weight: bold;
  padding: .75rem;
  /* display: flex; */
  justify-content: space-between;
  background-color: #e6f5f5;
}
@media (min-width: 768px) {
  .table-header {
    display: flex;
  }

}
</style>
