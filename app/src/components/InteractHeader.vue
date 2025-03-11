<template>
  <div class="h-[15vh] flex items-center justify-center border-2 border-black bg-yellow-600">
    <routerlink to="/" class="m-2">
      <button>Money</button>
    </routerlink>
    <routerlink to="/" class="m-2">
      <button>Percent</button>
    </routerlink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
