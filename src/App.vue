<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(()=>{
  AOS.init()
})
</script>

<template>
  <RouterView />
</template>

<style>
@media (min-width: 1024px) {

}
</style>
