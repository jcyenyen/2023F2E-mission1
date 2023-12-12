<template>
  <button
    class="px-3 py-2 bg-primary-300 hover:bg-primary-400 rounded-[48px] flex items-center justify-center box-content cursor-pointer"
  >
    <div>
      <slot name="frontImg" ></slot>
    </div>
    <p class="body16">
      <slot name="content"></slot>
    </p>
    <div >
      <slot name="backImg"></slot>
    </div>
  </button>
</template>
<script></script>
<style></style>
