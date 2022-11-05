<template>
  <v-btn
    elevation="0"
    v-bind="$attrs"
    :class="['the-button', { 'is-block': !inline }]"
    v-on="$listeners"
  >
    <slot v-for="(_, name) in $slots" :slot="name" :name="name" />
    <template
      v-for="(_, name) in $scopedSlots"
      :slot="name"
      slot-scope="slotData"
    >
      <slot :name="name" v-bind="slotData" />
    </template>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheButton',

  props: {
    inline: Boolean,
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-button.scss';
</style>
