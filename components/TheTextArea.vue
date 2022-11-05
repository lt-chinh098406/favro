<template>
  <v-textarea
    v-trim
    outlined
    hide-details="auto"
    dense
    clearable
    no-resize
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheTextField',
})
</script>
