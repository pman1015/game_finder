<template>
  <div>
    <h2>Dashboard</h2>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const user = ref(null);
onMounted(() => {
  console.log('Dashboard mounted');
  const token = window.localStorage.getItem('userToken');
  console.log(`Token: ${token}`);
  user.value = JSON.parse(token);
  console.log(user.value.username);
});
</script>
