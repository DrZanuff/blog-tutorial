export interface Todo {
  id: number
  user_id: number
  title: string
  due_on: string
  status: 'pending' | 'completed'
}

export interface Post {
  slug: string
  title: string
}

export interface PostsProps {
  todoList: Todo[]
  postList: Post[]
}

export interface LoaderData {
  posts: Post[]
  todos: Todo[]
}
