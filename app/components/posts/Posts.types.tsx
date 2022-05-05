import type { Post } from '~/models/post.server'

export interface Todo {
  id: number
  user_id: number
  title: string
  due_on: string
  status: 'pending' | 'completed'
}

export interface LoaderDataAllPosts {
  posts: Post[] | null
}

export interface LoaderDataSinglePost {
  post: Post | null
}

export interface Todos {
  todos: Todo[]
}

export interface LoaderDataPostsProps extends LoaderDataAllPosts, Todos {}
