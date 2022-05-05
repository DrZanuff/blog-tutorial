import type { Post } from '~/models/post.server'

export interface SlugProps {
  post: Post
  html: string
}
