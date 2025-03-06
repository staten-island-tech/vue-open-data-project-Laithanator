<template>
  <div class="border-2 border-black shadow-md w-[30%] h-[40%] flex flex-col items-center p-4">
    <h1 class="text-2xl">{{ school.location }}</h1>
  </div>
</template>

<script setup>
defineProps(['school'])
</script>

<style scoped></style>
