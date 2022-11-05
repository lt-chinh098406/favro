<template>
  <v-tabs v-model="bindingData" show-arrows v-bind="$attrs" v-on="$listeners">
    <slot v-for="(_, name) in $slots" :slot="name" :name="name" />
    <template
      v-for="(_, name) in $scopedSlots"
      :slot="name"
      slot-scope="slotData"
    >
      <slot :name="name" v-bind="slotData" />
    </template>
  </v-tabs>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheTabs',

  props: {
    value: {
      type: [String, Number, Boolean, Array],
      required: false,
      default: () => '',
    },
  },

  computed: {
    bindingData: {
      get(): string | number | boolean | Array<any> {
        return this.value
      },

      set(val: string | number | boolean) {
        this.$emit('input', val)
      },
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-tabs.scss';
</style>
