<template>
  <v-text-field
    v-trim
    outlined
    hide-details="auto"
    dense
    clearable
    :name="name"
    v-bind="$attrs"
    v-on="$listeners"
    @click:clear="onClearInput"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheTextField',

  props: {
    name: {
      type: String,
      required: false,
      default: () => '',
    },
  },

  methods: {
    onClearInput() {
      this.$emit('input', '')
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-text-field.scss';
</style>
