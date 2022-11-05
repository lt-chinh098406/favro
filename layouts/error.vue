<template>
  <v-app dark>
    <h2>
      {{ message }}
    </h2>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'EmptyLayout',

  layout: 'blank',

  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    message(): string {
      return ''
    },
  },
})
</script>
