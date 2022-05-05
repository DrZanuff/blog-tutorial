import { Posts } from '../../components/posts'
// import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type { LoaderDataPostsProps } from '../../components/posts/Posts.types'
import { getTodosPosts } from '../../models/post.server'

export const loader = async () => {
  return await getTodosPosts()
}

export default function PostsPage() {
  const { todos, posts } = useLoaderData<LoaderDataPostsProps>()

  return <Posts todos={todos} posts={posts} />
}
