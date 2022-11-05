import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosResponse } from 'axios'

export interface ApiResponse<T = any> extends AxiosResponse {
  meta: {
    [key: string]: any
  }
  data: T
}

let $axios: NuxtAxiosInstance

export const initializeAxios = (axiosInstance: NuxtAxiosInstance) => {
  $axios = axiosInstance
}

export { $axios }
