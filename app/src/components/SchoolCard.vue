<template>
  <div
    class="border-2 border-black shadow-lg w-[28vw] h-[30vh] flex flex-col items-center justify-center p-6 mt-5 ml-5 mr-5 bg-slate-300 rounded-lg"
  >
    <h1 class="text-3xl font-bold text-gray-800">{{ school.location }}</h1>
    <h2 class="text-lg font-semibold text-gray-700 mt-2">
      Total Funding Received:
      <span class="text-green-600">${{ school.s1_label_b_fsf_tl_09_c4e_ctt }}</span>
    </h2>
    <h2 class="text-lg font-semibold text-gray-700">
      Percent FSF Received:
      <span class="text-blue-600">{{ Math.floor(school.s3_label_j_fsf_final * 100) }}%</span>
    </h2>
  </div>
</template>

<script setup>
defineProps(['school'])
</script>

<style scoped></style>
