<template>
  <h2 :class="['heading', `heading--${size}`]">
    <span :class="{ heading__highlight: highlight }">
      <slot />
    </span>
  </h2>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheHeading',

  props: {
    size: {
      type: String,
      required: false,
      default: () => 'lg',
    },

    highlight: Boolean,
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-heading.scss';
</style>
