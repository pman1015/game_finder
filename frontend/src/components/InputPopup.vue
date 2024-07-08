<template>
  <div
    class="bg-outline h-fit w-fit flex items-center rounded-xl flex-col pl-6 pr-6">
    <h1 class="font-base text-white text-heading">{{ title }}</h1>
    <ul class="pb-4 gap-2 flex flex-col">
      <li v-for="input in inputs" :key="input.id">
        <h2 class="font-base text-white text-med">
          {{ input.placeholder }}
        </h2>
        <input
          class="rounded-lg font-base border-accent border-2 w-full bg-shadow"
          :placeholder="input.placeholder"
          :type="input.type" />
      </li>
    </ul>
    <Button @submit="console.log('submit')">
      <div class="p-2 m-2 w-fit rounded-xl bg-accent hover:brightness-110">
        <h3 class="font-base text-large text-white pl-6 pr-6">
          {{ submit_label }}
        </h3>
      </div>
    </Button>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
import Button from './Button.vue';
const props = defineProps({
  title: String,
  inputs: Array,
  submit: Function,
  submit_label: String,
});
console.log(props);
</script>
