<template>
  <nav class="navBar flex items-baseline justify-between">
    <div>
      <RouterLink class="font-base text-white text-heading" to="/"
        >Game Finder</RouterLink
      >
    </div>
    <div class="flex gap-3">
      <RouterLink
        class="font-base text-white text-subHeading underline hover:text-opacity-60"
        to="/"
        >Home</RouterLink
      >
      <RouterLink
        class="font-base text-white text-subHeading underline hover:text-opacity-60"
        to="/games"
        >Games</RouterLink
      >
    </div>
  </nav>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
.navBar {
  height: 94px;
  background: rgb(65, 63, 84);
  background: -moz-linear-gradient(
    180deg,
    rgba(65, 63, 84, 1) 0%,
    rgba(123, 119, 159, 0.83) 70%,
    rgba(144, 139, 186, 0) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(65, 63, 84, 1) 0%,
    rgba(123, 119, 159, 0.83) 70%,
    rgba(144, 139, 186, 0) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(65, 63, 84, 1) 0%,
    rgba(123, 119, 159, 0.83) 70%,
    rgba(144, 139, 186, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#413f54",endColorstr="#908bba",GradientType=1);
}
</style>
