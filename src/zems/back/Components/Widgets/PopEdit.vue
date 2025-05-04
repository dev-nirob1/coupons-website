<script setup>
import InputField from '@/components/Element/InputField.vue';

const props = defineProps({
  data: {
    type: Object
  }
})
console.log('popEdit data', props.data);
</script>
<template>
  <div class="edit-coupon">
    <form>
      <InputField :value="data.name"  placeholder="Name" />
      <InputField :value="data.details"  placeholder="Name" />
      <InputField :value="data.code"  placeholder="Name" />
      <InputField :value="data.title"  placeholder="Name" />
      <InputField :value="data.discount_parcent"  placeholder="Name" />
      <InputField :value="data.expire_date"  placeholder="Name" />
      <InputField :value="data.cat_name"  placeholder="Name" />
      <InputField :v-model="data.exclusive"  placeholder="Name" />
      {{ data }}
    </form>
  </div>
</template>

<style scoped>
.edit-coupon {
  padding: 2rem;
}
</style>
