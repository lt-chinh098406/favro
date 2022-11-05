<template>
  <v-container
    :class="{
      [`container--border-${border}`]: !!border,
      'container--no-padding': noPadding,
      [`container--${size}`]: !!size,
    }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheContainer',

  props: {
    border: {
      type: String,
      required: false,
      default: () => '',
    },

    noPadding: Boolean,

    size: {
      type: String,
      required: false,
      default: () => '',
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-container.scss';
</style>
