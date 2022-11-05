import { Plugin } from '@nuxt/types'
import Vue from 'vue'
import { SnackbarTypeProps } from '~/models/types'

const repositoryPlugin: Plugin = ({ store }) => {
  Vue.prototype.$snackbar = (type: SnackbarTypeProps, text: string) => {
    store.commit('common/TOGGLE_SNACKBAR', {
      text,
      show: true,
      type,
    })
  }
}

export default repositoryPlugin
