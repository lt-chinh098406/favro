import fs from 'fs'
import path from 'path'
import colors from 'vuetify/es5/util/colors'
import StylelintPlugin from 'stylelint-webpack-plugin'
import Constants from './constants'

const locales = fs
  .readdirSync(path.join(__dirname, 'locales'))
  .map((file) => file.replace(/\.json/, ''))

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - The Agile Collaborative Planning App for SaaS & Games',
    title: 'Favro',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main.scss'],

  loading: false,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/constants',
    '@/plugins/utils',
    '@/plugins/vue-frag',
    '@/plugins/lodash',
    '@/plugins/locales',
    '@/plugins/store',
    '@/plugins/repositories',
    '@/plugins/vue-debounce',
    '@/plugins/string-format',
    '@/plugins/axios',
    '@/plugins/v-trim',
    '@/plugins/numeral',
    '@/plugins/snackbar',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/style-resources',
  ],

  i18n: {
    locales: locales.map((locale) => ({
      code: locale,
      file: `${locale}.json`,
    })),
    defaultLocale: process.env.NUXT_APP_LOCALE || Constants.common.LOCALE,
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: process.env.NUXT_APP_LOCALE || Constants.common.LOCALE,
    },
    baseUrl: '/',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: process.env.NUXT_APP_LOCALE || Constants.common.LOCALE,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '',
  },

  // Config style resource
  styleResources: {
    scss: [
      '~/assets/styles/base/mixins.scss',
      '~/assets/styles/base/colors.scss',
    ],
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles/base/variables.scss'],
    theme: {
      dark: false,
      themes: {
        options: {
          customProperties: true,
        },
        light: {
          primary: '#E60020',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: '#D21919',
          success: colors.blue.darken1,
        },
      },
    },
  },

  tailwindcss: {
    viewer: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.plugins.push(
          new StylelintPlugin({
            files: ['**/*.scss'],
          })
        )
      }
    },

    splitChunks: {
      layouts: false,
      pages: false,
      commons: true,
    },

    postcss: {
      plugins: {
        'postcss-pxtorem': {},
      },
      preset: {
        autoprefixer: {
          grid: true,
        },
      },
    },
  },

  publicRuntimeConfig: {},

  watchers: {
    chokidar: { ignored: /.git|node_modules/ },
    webpack: { ignored: /.git|node_modules/ },
  },
}
