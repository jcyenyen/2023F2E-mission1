<template>
  <button
    class="px-3 py-2 bg-primary-300 hover:bg-primary-400 rounded-[48px] flex items-center justify-center"
  >
    <div class="me-2">
      <slot name="frontImg" ></slot>
    </div>
    <p class="body16">
      <slot name="content"></slot>
    </p>
    <slot name="backImg"></slot>
  </button>
</template>
<script></script>
<style></style>
