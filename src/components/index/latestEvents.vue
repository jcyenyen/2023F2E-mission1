<template>
  <section id="latest-events" class="containers mb-4 lg:flex lg:justify-between">
    <SectionTitle title="最新活動" subTitle="Latest Events" />
    <ul class="lg:w-[75%]">
      <li v-for="event in latestEvents" :key="event.title" class="lg:flex lg:mb-4">
        <div class="max-lg:my-3 w-[100%] lg:w-[264px] lg:me-3">
          <img :src="`/src/assets/images/events/${event.img}.svg`" :alt="`${event.title}`" class="block rounded-[16px] w-[100%]"/>
        </div>
        <div class="lg:w-[68%]">
          <h3 class="title28 text-primary-500">
            {{ event.title }}
          </h3>
          <p class="body16 text-ellipsis overflow-hidden my-2">
            {{ event.content }}
          </p>
          <div class="flex justify-between items-center">
            <p class="body16 text-primary-500">{{ event.date }}</p>
            <ButtonSm class="">
              <template #backImg>
                <img src="@/assets/images/button/ArrowRight.svg" alt="箭頭" />
              </template>
              <template #content>
                <span class="me-2">閱讀更多</span>
              </template>
            </ButtonSm>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
<script setup>
import SectionTitle from '../sectiontitle.vue'
import ButtonSm from '../buttonSm.vue'

const latestEvents = [
  {
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    content:
      '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
    date: '12.26.2023',
    img: 'events01'
  },
  {
    title: '掃街模式開啟！帶著你的貓耳，和我一起走！',
    content:
      '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。',
    date: '12.24.2023',
    img: 'events02'
  },
  {
    title: '收容所模特兒大比拼！',
    content:
      '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
    date: '12.20.2023',
    img: 'events03'
  }
]
</script>
<style lagn="scss" scoped>

p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
