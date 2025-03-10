<template>
  <div
    class="border-2 border-black shadow-md w-[28vw] h-[30vh] flex flex-col items-center p-4 mt-5 ml-5 mr-5 bg-slate-300"
  >
    <h1 class="text-2xl">{{ school.location }}</h1>
  </div>
</template>

<script setup>
defineProps(['school'])
</script>

<style scoped></style>
