<template>
  <section id="policyIssue" class="containers mb-4">
    <SectionTitle title="政策議題" subTitle="Policy Issues" />
    <div class="flex mt-4">
      <div
        v-for="tab in tabList"
        :key="tab.id"
        class=" subTitle20 p-3 rounded-t-[16px] text-center w-[100%] cursor-pointer"
        :class="{ 'bg-primary-100': activeTab === tab.id,'bg-primary-400': activeTab !== tab.id,'hover:bg-primary-300': activeTab !== tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.tabName }}
      </div>
    </div>
    <div class="bg-primary-100 px-3 py-4 text-center">
      <h3 class="title28 text-primary-500 mb-5">
        {{ activeContent.title }}
      </h3>
      <div class="lg:flex lg:justify-between">
        <div
          v-for="contentList in activeContent.contentList"
          :key="contentList.title"
          class="flex flex-col items-center mb-4 content_box lg:w-[33%] lg:px-4"
        >
          <img
            :src="`/src/assets/images/policyIssues/${contentList.icon}`"
            :alt="`{contentList.title}`"
            class="w-[128px]"
          />
          <h4 class="title28">
            {{ contentList.title }}
          </h4>
          <p class="body16">
            {{ contentList.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import SectionTitle from '../sectiontitle.vue'
import { ref, computed } from 'vue'

const tabList = ref([
  {
    id: 'tab1',
    tabName: '寵物醫療保障方案',
    title: '為毛孩子謀福利！推動寵物醫療保障方案',
    contentList: [
      {
        title: '設立寵物醫療基金',
        content: '每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用。',
        icon: 'PiggyBank.svg'
      },
      {
        title: '提供醫療補助',
        content: '每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力。',
        icon: 'FirstAidKit.svg'
      },
      {
        title: '合作動物醫院',
        content: '目前已有和超過 200 家動物醫院進行初步的合作討論。',
        icon: 'Handshake.svg'
      }
    ]
  },
  {
    id: 'tab2',
    tabName: '寵物休閒與娛樂場所',
    title: '打造休閒天堂！推廣寵物休閒與娛樂場所',
    contentList: [
      {
        title: '建立寵物公園',
        content:
          '每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園。',
        icon: 'Park.svg'
      },
      {
        title: '推廣寵物友善商家',
        content:
          '鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫。',
        icon: 'Storefront.svg'
      },
      {
        title: '舉辦寵物活動和工作坊',
        content:
          '與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等。',
        icon: 'PawPrint.svg'
      }
    ]
  },
  {
    id: 'tab3',
    tabName: '推廣寵物飼養教育',
    title: '推廣寵物飼養教育，讓愛更加專業',
    contentList: [
      {
        title: '建立寵物飼養教育中心',
        content:
          '每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。',
        icon: 'Buildings.svg'
      },
      {
        title: '推廣寵物飼養課程',
        content:
          '與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。',
        icon: 'BowlFood.svg'
      },
      {
        title: '製作教育資料',
        content: '出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識',
        icon: 'Video.svg'
      }
    ]
  }
])

const activeTab = ref('tab1')

const activeContent = computed(() => {
  const activeIndex = tabList.value.findIndex((v) => activeTab.value === v.id)
  return tabList.value[activeIndex]
})
</script>
<style lagn="scss" scoped>
.content_box {
  position: relative;
  z-index: 0;
  &::before {
    content: '';
    position: absolute;
    left: 53%;
    top: 33%;
    width: 240px;
    height: 110px;
    background-color: #d1fa31;
    border-radius: 100%;
    transform: rotate(-15deg) translate(-50%, -50%);
    z-index: -1;
  }
}
</style>
