<template>
  <section id="smallDonations" class="containers mb-4 lg:flex lg:justify-between">
    <div class="lg:w-[40%] lg:flex lg:flex-col lg:justify-between">
      <div>
        <SectionTitle title="小額捐款" subTitle="Small Donations" />
        <h3 class="title28 my-3 lg:mt-4" data-aos="fade-right">您的每筆捐款，<br />是每隻毛孩未來的大大動力！</h3>
      </div>
      <div class="w-[100%] bg-gray-500 text-primary-300 p-3 lg:px-4 rounded-[16px] mb-4 lg:mb-[0px] lg:h-[141px]" data-aos="flip-up">
        <h4 class="subTitle20">目前贊助總金額</h4>
        <p class="display48">987,655,873</p>
      </div>
    </div>
    <ul class="lg:w-[57%]">
      <li
        v-for="donation in donationBoard"
        :key="donation.name"
        class="rounded-[16px] border-[2px] border-primary-500 p-3 mt-3 lg:px-4 lg:flex lg:justify-between hover:bg-gray-500 hover:text-primary-300 cursor-pointer"
      >
        <div class="flex flex-col justify-between">
          <div class="flex title28 mb-3 leading-[1.75rem]">
            <h4 class="border-e border-[black] me-3 pe-3">
              {{ donation.name }}
            </h4>
            <p>
              <template v-if="donation.donateMoney">
                <span class="body16 text-gray-300 me-2">NT$</span>{{ donation.donateMoney }}
              </template>
              <template v-else>
                <span class="leading-[1.75rem]"> 自訂贊助金額 </span>
              </template>
            </p>
          </div>
          <p class="bg-primary-200 text-gray-500 px-3 py-2 body16 w-[161px] rounded-[8px]">
            已有{{ donation.donatePeople }}人贊助
          </p>
        </div>
        <img :src="getImageUrl('smallDonations',donation.img)" :alt="`${donation.name}`" class="w-[106px] max-lg:hidden">
      </li>
    </ul>
  </section>
</template>
<script setup>
import SectionTitle from '../sectiontitle.vue'

const donationBoard = [
  {
    name: '喵衛星',
    donateMoney: '600',
    donatePeople: '1,000',
    img: 'MoonStars.svg'
  },
  {
    name: '喵行星',
    donateMoney: '6,000',
    donatePeople: '3,000',
    img: 'Planet.svg'
  },
  {
    name: '喵恆星',
    donateMoney: '60,000',
    donatePeople: '5,000',
    img: 'Sun.svg'
  },
  {
    name: '喵慧星',
    donateMoney: null,
    donatePeople: '2,000',
    img: 'ShootingStar.svg'
  }
]

const getImageUrl = (components,fileName) => {
  return new URL(`../../assets/images/${components}/${fileName}`, import.meta.url).href;
};

</script>
<style lagn="scss" scoped></style>
