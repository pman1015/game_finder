<template>
  <div @click="$emit('submit')" class="w-fit">
    <h1 v-if="label !== 'undefined'">{{ label }}</h1>
    <slot></slot>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  label: String,
});
const emits = defineEmits(['submit']);
</script>
