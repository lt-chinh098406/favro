<template>
  <v-progress-linear
    indeterminate
    absolute
    top
    color="primary"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheLoading',
})
</script>
