import { Posts } from './Posts'
// import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type { LoaderData } from './Posts.types'
import { posts } from './links'

export const loader = async () => {
  //const data = await axios.get<Todo[]>('https://gorest.co.in/public/v2/todos')
  const data = await fetch('https://gorest.co.in/public/v2/todos')

  const response = await data.json()

  return {
    todos: response,
    posts: posts,
  } as LoaderData
}

export default function PostsPage() {
  const { todos, posts } = useLoaderData<LoaderData>()

  return <Posts todoList={todos} postList={posts} />
}
