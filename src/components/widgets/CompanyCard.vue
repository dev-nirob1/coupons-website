<script setup>
defineProps({
  company: {
    type: Object
  }
})
</script>
<template>
   <div class="company-card">
       {{company.name}}
      </div>
</template>
<style scoped>
.company-card{
  border: 1px solid red;
  padding: 1.5rem;
}
</style>
