<template>
    <section id="serviceMailbox" class="containers mb-4 lg:flex lg:justify-between">
      <div class="lg:w-[40%]">
        <SectionTitle title="服務信箱" subTitle="Service Mail" />
        <h3 class="title28 my-3 lg:mt-4">您的聲音，我們的行動！</h3>
        <p class="body16 text-gray-400">
            親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！
        </p>
      </div>
      <div class="max-lg:mt-4 lg:w-[57%] relative">
        <form class="py-4 px-3 lg:p-4 bg-primary-100 rounded-[16px] w-[100%]">
            <label for="name">
                <div class="body16 mb-2">姓名</div>
                <input id="name" v-model="formData.name" type="text" class="w-[100%] rounded-[8px] border-2 border-gray-100 h-[56px] mb-3">
            </label>
            <label for="email" >
                <div class="body16 mb-2">Email</div>
                <input id="email" v-model="formData.email" type="text" class="w-[100%] rounded-[8px] border-2 border-gray-100 h-[56px] mb-3">
            </label>
            <label for="phone" >
                <div class="body16 mb-2">電話/手機</div>
                <input id="phone" v-model="formData.phone" type="text" class="w-[100%] rounded-[8px] border-2 border-gray-100 h-[56px] mb-3">
            </label>
            <label for="advice">
                <div class="body16 mb-2">對我們的建議</div>
                <textarea id="advice" v-model="formData.advice" type="text" class="w-[100%] rounded-[8px] border-2 border-gray-100 h-[112px] mb-5" />
            </label>
            <button class="px-4 py-3 rounded-[16px] bg-primary-300 w-[100%]">確認送出</button>
        </form>
        <img src="@/assets/images/serviceMail/Black-02.svg" alt="" class="max-lg:hidden w-[40%] max-w-[297px] absolute bottom-[0%] left-[-30%] z-[-1]">
      </div>
    </section>
  </template>
  <script setup>
  import SectionTitle from '../sectiontitle.vue'
  import {ref} from 'vue'
  
  const formData = ref({
    name:'',
    email:'',
    phone:'',
    advice:''
  })
  </script>
  <style lagn="scss" scoped></style>
  