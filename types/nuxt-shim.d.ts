import { NuxtCookies } from 'cookie-universal-nuxt'
import { LoDashStatic } from 'lodash'
import numeral from 'numeral'
import format from 'string-format'
import { ConstantsProps } from '@/constants'
import { UtilsProps } from '@/utils'
import { RepositoryProps } from '@/repositories'
import { SnackbarTypeProps } from '@/models/types'

declare module 'vue/types/vue' {
  interface Vue {
    Constants: ConstantsProps
    Utils: UtilsProps
    $cookies: NuxtCookies
    $_: LoDashStatic
    $repo: RepositoryProps
    $numeral: typeof numeral
    $format: typeof format
    $snackbar: (type: SnackbarTypeProps, text: string) => void
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
  interface Store<S> {
    Constants: ConstantsProps
    Utils: UtilsProps
    $cookies: NuxtCookies
    $_: LoDashStatic
    $repo: RepositoryProps
  }
}

declare module '@nuxt/types' {
  interface Context {
    Constants: ConstantsProps
    Utils: UtilsProps
    $cookies: NuxtCookies
    $_: LoDashStatic
    $repo: RepositoryProps
    $numeral: typeof numeral
    $format: typeof format
  }
}
