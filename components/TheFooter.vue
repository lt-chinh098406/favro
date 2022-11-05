<template>
  <div class="the-footer js-footer">
    <the-container class="the-footer__inner">
      <v-row fluid class="the-footer__top">
        <v-col cols="12" sm="4" class="the-footer__left">
          <ul class="the-footer__menu">
            <li
              v-for="(item, index) in menus"
              :key="index"
              class="the-footer__menu__item"
            >
              <nuxt-link :to="item.url">{{ item.label }}</nuxt-link>

              <ul
                v-if="item.children && item.children.length"
                class="the-footer__menu"
              >
                <li
                  v-for="(child, childIndex) in item.children"
                  :key="childIndex"
                  class="the-footer__menu__item"
                >
                  <nuxt-link :to="child.url">{{ child.label }}</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" sm="8" class="the-footer__right">
          <h3 class="the-footer__company-name">{{ $t('companyName') }}</h3>

          <ul class="the-footer__menu">
            <li class="the-footer__menu__item">
              <nuxt-link :to="Constants.routePage.CSWEB034">{{
                $t('common.footer.operatingCompany')
              }}</nuxt-link>
            </li>
            <li class="the-footer__menu__item">
              <nuxt-link :to="Constants.routePage.CSWEB034">{{
                $t('common.footer.pressRelease')
              }}</nuxt-link>
            </li>
            <li class="the-footer__menu__item">
              <nuxt-link :to="Constants.routePage.CSWEB026">{{
                $t('common.footer.news')
              }}</nuxt-link>
            </li>

            <li class="the-footer__menu__item">
              <nuxt-link :to="Constants.routePage.CSWEB031">{{
                $t('common.footer.inquiry')
              }}</nuxt-link>
            </li>
          </ul>

          <div class="the-footer__info">
            <div
              v-for="(item, index) in infos"
              :key="index"
              class="the-footer__info__item"
            >
              <div class="the-footer__info__item__label">{{ item.label }}</div>
              <div
                class="the-footer__info__item__content"
                v-text="item.content"
              />
            </div>
          </div>
        </v-col>
      </v-row>
      <p class="the-footer__copyright">
        {{ $t('common.footer.copyright') }}
      </p>
    </the-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { RawLocation } from 'vue-router'
import VueI18n from 'vue-i18n'

interface MenuProps {
  url: RawLocation
  label: VueI18n.TranslateResult
  children?: Array<MenuProps>
}

interface InfoProps {
  label: VueI18n.TranslateResult
  content: VueI18n.TranslateResult
}

interface DataProps {
  menus: Array<MenuProps>
  infos: Array<InfoProps>
}

export default Vue.extend({
  name: 'TheFooter',

  data(): DataProps {
    return {
      menus: [],

      infos: [],
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-footer.scss';
</style>
