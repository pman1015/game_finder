<template>
  <div>
    <InputPopup
      title="Login"
      :inputs="inputs"
      submit_label="Login"
      :submit="submit" />
  </div>
</template>
<script setup>
import InputPopup from '../components/InputPopup.vue';
function submit() {
  window.localStorage.setItem(
    'userToken',
    JSON.stringify({ username: 'admin' })
  );
}
const inputs = [
  {
    id: 0,
    placeholder: 'Username',
    type: 'text',
    error: '',
  },
  {
    id: 1,
    placeholder: 'Password',
    type: 'password',
    error: '',
  },
];
</script>
