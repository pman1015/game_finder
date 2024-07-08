<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavHeader from './components/NavHeader.vue';
import PageFooter from './components/PageFooter.vue';
</script>

<template>
  <div class="bg-background h-screen">
    <header>
      <NavHeader />
    </header>
    <body class="flex items-top pt-4 justify-center h-full-screen">
      <RouterView />
    </body>
    <footer>
      <PageFooter />
    </footer>
  </div>
</template>
