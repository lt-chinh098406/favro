<template>
  <v-app light class="the-default-layout"> </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { RawLocation } from 'vue-router'

interface MenuProps {
  url: RawLocation
  label: string
}

interface LoggedInMenuProps {
  url?: RawLocation
  callback?: Function
  label: string
  active?: boolean
}

interface DataProps {
  isDrawer: boolean
  menus: Array<MenuProps>
  loggedInMenus: Array<LoggedInMenuProps>
  bc: BroadcastChannel | null
}

export default Vue.extend({
  name: 'DefaultLayout',

  data(): DataProps {
    // const myPageUrl: any = {
    //   [this.Constants.common.PROVIDERS.INVESTOR]:
    //     this.Constants.routePage.CSWEB017,

    //   [this.Constants.common.PROVIDERS.CAPITAL_CALLER]:
    //     this.Constants.routePage.CLWEB013,
    // }

    return {
      isDrawer: false,
      menus: [],
      loggedInMenus: [],

      bc: null,
    }
  },

  methods: {
    goToHome() {
      this.$router.push(this.Constants.routePage.HOME)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-default-layout.scss';
</style>
