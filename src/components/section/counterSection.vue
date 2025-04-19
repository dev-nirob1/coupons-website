<script setup>
import {useCounterStore} from '@/stores/counterStore.js'

const counter = useCounterStore()
// console.log(counter.count, counter.increment)

  console.log('Store initialized:', counter);
  console.log('Count value:', counter.count);
  console.log('doubeCount value:', counter.doubleCount);

</script>
<template>
  <div class="text-center">
    <button>{{counter.doubleCount}}</button>
    <span>{{counter.count}}</span>
    <button @click="counter.increment()">increment</button>
  </div>
</template>
