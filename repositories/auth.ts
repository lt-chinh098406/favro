import { $axios, ApiResponse } from '@/utils/axios'
import { User } from '@/models/user'
import RouteApi from '@/constants/route-api'

export type RepoAuthProps = {
  me: () => Promise<ApiResponse<User>>
}

const me = () => $axios.get(RouteApi.USER_ME) as Promise<ApiResponse<User>>

const repository: RepoAuthProps = {
  me,
}

export default repository
