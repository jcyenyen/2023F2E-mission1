<template>
  <div class=" pt-[80px] lg:containers mb-4 lg:pt-[80px]">
    <header id="header" class="relative">
      <div class="relative z-[2] bottom-[-22px] w-[90%] lg:w-[33%] max-w-[360px] lg:max-w-[450px] mx-auto lg:absolute lg:left-[70%] lg:bottom-[-15px]">
        <img src="@/assets/images/header/Black-01.svg" alt="黑貓" class="w-[100%]" />
        <ButtonSm class="absolute z-[5] top-[75%] left-[0%] lg:left-[5%]" data-aos="fade-right">
          <template #backImg>
            <img src="@/assets/images/button/ArrowRight.svg" alt="箭頭" />
          </template>
          <template #content>
            <span class="me-2">候選人簡介</span>
          </template>
        </ButtonSm>
      </div>
      <div class="bg-gray-200 w-[100%] p-3 lg:p-4 rounded-[16px] relative">
        <img src="@/assets/images/header/Slogan.svg" alt="口號" class="block w-[100%] h-[100%]" data-aos="flip-left"/>
        <p
          class="flex items-center justify-center max-md:w-[95%]   rounded-[48px] text-primary-300 bg-[black] px-3 py-1 lg:px-4 lg:py-2 absolute top-[42%] lg:top-[44%] left-[2.5%] md:left-[10%] max-lg:w-[80%]  lg:left-[-20px] break-keep" data-aos="fade-right"
        >
          <img src="@/assets/images/header/vote.svg" class="me-2 w-[28px] md:w-[64px]" alt="" />
          <span class="title24 md:display48 me-2">立委請支持</span>
          <img src="@/assets/images/header/number.svg" alt="" class="me-2 w-[28px] md:w-[64px]" />
          <span class="title24 md:display48 me-2">黑新星</span>
          <img src="@/assets/images/header/vote.svg" class="w-[28px] md:w-[64px]" alt="" />
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
