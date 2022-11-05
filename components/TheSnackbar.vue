<template>
  <v-snackbar
    v-model="bindingData"
    :timeout="data.type === 'error' ? -1 : 3000"
    top
    :color="data.type"
    text
    elevation="0"
    v-bind="$attrs"
    v-on="$listeners"
  >
    {{ data.text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        :color="data.type"
        icon
        text
        v-bind="attrs"
        @click="bindingData = undefined"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { SnackbarProps } from '@/models/types'

export default Vue.extend({
  name: 'TheSnackbar',

  props: {
    data: {
      type: Object as PropType<SnackbarProps>,
      required: false,
      default: () => ({} as SnackbarProps),
    },

    value: {
      type: [String, Number, Boolean, Array],
      required: false,
      default: () => '',
    },
  },

  computed: {
    bindingData: {
      get(): string | number | boolean | Array<any> | undefined {
        return this.value
      },

      set(val?: string | number | boolean) {
        this.$emit('input', val)
      },
    },
  },

  watch: {
    '$route.path': {
      handler() {
        if (this.data.type === 'error') {
          this.bindingData = undefined
        }
      },

      deep: true,

      immediate: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-snack-bar.scss';
</style>
