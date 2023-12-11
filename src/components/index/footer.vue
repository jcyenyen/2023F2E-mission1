<template>
  <footer class="containers py-4 bg-[black]">
    <div class="lg:flex lg:justify-between">
      <img src="@/assets/images/footer/logo-02.svg" alt="" class="w-[161px] h-[64px]" />
      <ul class="flex items-center my-3 lg:hidden">
        <li v-for="list in socialMediaList" :key="list.name" class="me-3">
          <img
            :src="`/src/assets/images/footer/${list.file}.svg`"
            :alt="`${list.name}`"
            class="text-white"
          />
        </li>
      </ul>
      <div class="lg:flex">
        <div class="body16 mb-4 lg:me-4">
          <h5 class="text-primary-300 mb-2">快速連結</h5>
          <ul class="flex lg:flex-col">
            <li v-for="nav in navList" :key="nav.id" class="text-white me-3">
              {{ nav.name }}
            </li>
          </ul>
        </div>
        <div class="body16 mb-4">
          <h5 class="text-primary-300 mb-2">與我們聯繫</h5>
          <ul class="text-white">
            <li class="flex mb-1">
              <img src="@/assets/images/footer/MapPin.svg" alt="地址" class="me-1" />
              <p>新星區閃耀大道88號 喵喵大樓3樓</p>
            </li>
            <li class="flex mb-1">
              <img src="@/assets/images/footer/Phone.svg" alt="電話" class="me-1" />
              <p>(02) 888-5678</p>
            </li>
            <li class="flex">
              <img src="@/assets/images/footer/Envelope.svg" alt="信箱" class="me-1" />
              <p>supernova.black@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p class="text-center text-white text-[14px] leading-[28px]">
      © 2023 黑新星 Supernova Black 版權所有。
    </p>
  </footer>
</template>
<script setup>
import { ref } from 'vue'

const socialMediaList = [
  { name: 'Facebook', file: 'FacebookLogo' },
  { name: 'Instagram', file: 'InstagramLogo' },
  { name: 'YouTube', file: 'YoutubeLogo' }
]

const navList = [
  {
    name: '首頁',
    id: 'header'
  },
  {
    name: '最新活動',
    id: 'latest-events'
  },
  {
    name: '政策議題',
    id: 'policy-issues'
  },
  {
    name: '小額捐款',
    id: 'small-donations'
  }
]
</script>
<style lagn="scss" scoped></style>
