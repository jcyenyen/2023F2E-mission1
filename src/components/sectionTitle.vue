<template>
  <h2 class="text-primary-500 display48" data-aos="fade-up">
    {{ props.title }}
    <span class="subTitle20 block mt-2"> {{ props.subTitle }} </span>
  </h2>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    title:{type:String,require:true},
    subTitle:{type:String,require:true}
})

</script>
<style>

</style>
