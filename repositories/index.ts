import auth, { RepoAuthProps } from '@/repositories/auth'

export interface RepositoryProps {
  auth: RepoAuthProps
}

const repositories: RepositoryProps = {
  auth,
}

export default repositories
