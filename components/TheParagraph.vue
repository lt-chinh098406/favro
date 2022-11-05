<template>
  <div class="paragraph">
    <p class="paragraph__title">{{ heading }}</p>
    <div class="paragraph__area-content">
      <slot>
        <p class="paragraph__content">{{ content }}</p>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheParagraph',

  props: {
    heading: {
      type: String,
      required: false,
      default: () => '',
    },

    content: {
      type: String,
      required: false,
      default: () => '',
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-paragraph.scss';
</style>
