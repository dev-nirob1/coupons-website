<script setup>
defineProps({
  data: {
    type: Object
  }
})
</script>

<template>
  <div class="large-2 p-2">
    <div>
      {{ data?.name }}
    </div>
    <div>
      {{ data?.cat_name }}
    </div>
    <div>
      {{ data?.details }}
    </div>
    <div>
      {{ data?.code }}
    </div>
    <div>
      {{ data?.discount_percent }}%
    </div>
    <div>
      {{ data?.expire_date }}
    </div>
    <div>
      {{ data?.title }}
    </div>
  </div>
  {{data}}
</template>
