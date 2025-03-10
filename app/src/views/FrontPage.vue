<template>
  <main>
    <FrontHeader />
    <div class="bg-red-700 flex flex-wrap justify-center">
      <TestCard v-for="school in schools" :key="school.location" :school="school" />
    </div>
  </main>
</template>

<script setup>
import FrontHeader from '@/components/FrontHeader.vue'
import TestCard from '@/components/TestCard.vue'
import { onMounted, reactive, ref } from 'vue'
let schools = ref([])
async function getSchools() {
  try {
    let res = await fetch('https://data.cityofnewyork.us/resource/ven4-h25u.json?$limit=1577')
    let data = await res.json()
    schools.value = data
  } catch (error) {
    alert('Failed to fetch schools data.')
  }
}
onMounted(() => {
  getSchools()
})
</script>

<style scoped></style>
