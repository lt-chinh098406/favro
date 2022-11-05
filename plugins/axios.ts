import { Plugin } from '@nuxt/types'
import { initializeAxios } from '@/utils/axios'

const axios: Plugin = ({
  $axios,
  $cookies,
  Constants,
  Utils,
  $_,
  $repo,
  store,
  route,
  redirect,
}) => {
  $axios.onRequest((config) => {
    const accessToken = $cookies.get(Constants.common.ACCESS_TOKEN_KEY)

    if (accessToken && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    if (!$_.isEmpty(config.data)) {
      config.data = Utils.helper.toSnakeCase(config.data)
    }

    if (!$_.isEmpty(config.params)) {
      config.params = Utils.helper.toSnakeCase(config.params)
    }
  })

  $axios.onResponse((res) => {
    return Utils.helper.toCamelCase(res.data)
  })

  $axios.onError(async (error) => {
    const code = error.response?.status
    const originalRequest = error.config

    console.error(originalRequest.url, code)
    const refreshToken = $cookies.get(Constants.common.REFRESH_TOKEN_KEY)

    if (refreshToken && code === Constants.common.STATUS_CODE.UNAUTHORIZED) {
      try {
        const param = {
          refresh: $cookies.get(Constants.common.REFRESH_TOKEN_KEY),
        }
        const access = ''
        const refresh = ''

        $cookies.set(Constants.common.ACCESS_TOKEN_KEY, access, {
          maxAge: Constants.common.TOKEN_AGE,
          sameSite: 'lax',
          path: '/',
        })
        $cookies.set(Constants.common.REFRESH_TOKEN_KEY, refresh, {
          maxAge: Constants.common.REFRESH_TOKEN_AGE,
          sameSite: 'lax',
          path: '/',
        })

        originalRequest.headers.Authorization = `Bearer ${access}`

        return $axios.request(originalRequest)
      } catch (err) {
        const isInvestor =
          /^(\/customers.*?$)/g.test(route.path) ||
          /^(customers.*?$)/g.test(route.query?.provider as string)

        store.dispatch('auth/logout')

        return Promise.reject(err)
      }
    }

    return Promise.reject(error)
  })

  initializeAxios($axios)
}

export default axios
