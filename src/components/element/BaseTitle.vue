<script setup>
 defineProps({
    tag: {
        type: String,
        default: 'h3'
    }
})
</script>

<template>
    <tag class="
    ">
        <slot></slot>
    </tag>
</template>
<style scoped></style>
