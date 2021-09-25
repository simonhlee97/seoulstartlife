import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

declare interface Todo {
  id?: number
  user_id: string
  task: string
  is_complete?: boolean
  inserted_at?: string
}
declare interface Credentials {
  email?: string | undefined
  password?: string | undefined
  provider?: 'bitbucket' | 'github' | 'gitlab' | 'google' | undefined
}
