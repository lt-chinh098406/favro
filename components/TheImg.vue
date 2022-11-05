<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
  <v-img
    v-bind="$attrs"
    :src="url || $attrs.src || '/images/no_image.png'"
    @error="onError"
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
  </v-img>
</template>

<script lang="ts">
import Vue from 'vue'

interface DataProps {
  url: string
}

export default Vue.extend({
  name: 'TheImg',

  data(): DataProps {
    return {
      url: '',
    }
  },

  methods: {
    onError() {
      this.url = '/images/no_image.png'
    },
  },
})
</script>
