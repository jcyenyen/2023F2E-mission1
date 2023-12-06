<template>
  <div class="containers">
    <header id="header">
      <div class="relative w-[100%] max-w-[343px] mx-auto">
        <img src="@/assets/images/header/Black-01.svg" alt="黑貓" />
        <ButtonSm class="absolute z-[5] top-[75%] left-[-5%]">
          <template #backImg>
            <img src="@/assets/images/button/ArrowRight.svg" alt="箭頭" />
          </template>
          <template #content>
            <span class="me-2">候選人簡介</span>
          </template>
        </ButtonSm>
      </div>
      <div class="bg-gray-200 w-[100%] p-3 rounded-[16px] relative">
        <img src="@/assets/images/header/Slogan.svg" alt="口號" />
        <p
          class="flex items-center justify-center w-[100%] rounded-[48px] text-primary-300 bg-[black] px-3 py-1 absolute top-[42%] left-[0%] break-keep"
        >
          <img src="@/assets/images/header/vote.svg" class="me-2" alt="" />
          <span class="title24 me-2">立委請支持</span>
          <img src="@/assets/images/header/number.svg" alt="" class="me-2" />
          <span class="title24 me-2">黑新星</span>
          <img src="@/assets/images/header/vote.svg" class="" alt="" />
        </p>
      </div>
    </header>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import ButtonSm from '@/components/buttonSm.vue'
</script>
<style lang="scss" scoped>
.nav_list + .nav_list {
  @apply ml-4;
}
.nav_media + .nav_media {
  @apply ml-3;
}
</style>
