<template>
  <span
    class="text-ellipsis"
    :style="{
      '-webkit-line-clamp': rows,
      display: inline ? '-webkit-inline-box' : '-webkit-box',
    }"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    rows: {
      type: Number,
      required: false,
      default: 1,
    },

    inline: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/text-ellipsis.scss';
</style>
