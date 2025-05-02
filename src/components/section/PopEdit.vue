<script setup>
const props = defineProps({
  data: {
    type: Object
  }
})
console.log('popEdit data', props.data);
</script>
<template>
  <h1>{{ data }}</h1>
</template>
