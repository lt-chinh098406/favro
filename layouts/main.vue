<template>
  <the-default-layout class="main-layout"> </the-default-layout>
</template>

<script lang="ts">
import Vue from 'vue'

interface DataProps {}

export default Vue.extend({
  name: 'MainLayout',

  middleware: ['auth', 'user-official'],

  data(): DataProps {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/layouts/main.scss';
</style>
