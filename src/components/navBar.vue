<template>
  <div class="containers">
    <div class="flex justify-between">
      <router-link to="/">
        <img src="@/assets/images/navBar/logo-black.svg" alt="黑新星" class="w-[186px] h-[48px]" />
      </router-link>
      <div class="flex items-center max-lg:hidden">
        <ButtonSm class="me-3">
          <template #frontImg>
            <img src="@/assets/images/navBar/HandCoins.svg" alt="小額捐款">
          </template>
          <template #content>
            小額捐款
          </template> 
        </ButtonSm>
        <ul class="flex">
          <li v-for="list in navList" :key="list.id" class="body16 nav_list">
            {{ list.name }}
          </li>
        </ul>
      </div>
      <ul class="flex items-center max-lg:hidden">
        <li v-for="list in socialMediaList" :key="list.name" class="nav_media">
          <img :src="`/src/assets/images/navBar/${list.file}.svg`" :alt="`${list.name}`" />
        </li>
      </ul>
      <img src="@/assets/images/navBar/List.svg" alt="漢堡" class="lg:hidden" @click="isShowSidebar=!isShowSidebar"/>
    </div>
    <!-- mobile -->
    <div v-if="isShowSidebar" class="w-[100%] h-[100vh] fixed backdrop-blur-[4px] top-[0px] left-[0px]" @click.self="isShowSidebar=!isShowSidebar">
      <div class="relative w-[60%] h-[100vh] left-[40%] bg-white px-3 py-4">
        <router-link to="/">
          <img
            src="@/assets/images/navBar/logo-black.svg"
            alt="黑新星"
            class="w-[186px] h-[48px] mb-4 mx-auto"
          />
        </router-link>
        <ButtonSm class="mb-3">
          <template #frontImg>
            <img src="@/assets/images/navBar/HandCoins.svg" alt="小額捐款">
          </template>
          <template #content>
            小額捐款
          </template> 
        </ButtonSm>
        <ul class="flex flex-col justify-start border-b">
          <li v-for="list in navList" :key="list.id" class="body16 mb-3 w-[64px]">
            {{ list.name }}
          </li>
        </ul>
        <ul class="flex flex-col justify-start">
          <li v-for="list in socialMediaList" :key="list.name" class="flex items-center mt-3">
            <img :src="`/src/assets/images/navBar/${list.file}.svg`" :alt="`${list.name}`" class="me-1"/>
            <span>{{ list.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import ButtonSm from '@/components/buttons/buttonSm.vue'

const navList = [
  { name: '候選主張', id: 'candidate' },
  { name: '最新活動', id: 'latestEvents' },
  { name: '政策議題', id: 'policyIssue' },
  { name: '服務信箱', id: 'serviceMailbox' }
]

const socialMediaList = [
  { name: 'Facebook', file: 'FacebookLogo' },
  { name: 'Instagram', file: 'InstagramLogo' },
  { name: 'YouTube', file: 'YoutubeLogo' }
]

const isShowSidebar = ref(false)
</script>
<style lang="scss" scoped>
.nav_list + .nav_list {
  @apply ml-4;
}
.nav_media + .nav_media {
  @apply ml-3;
}
</style>
