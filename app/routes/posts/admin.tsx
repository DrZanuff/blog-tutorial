import { json } from '@remix-run/node'
import { Link, useLoaderData, Outlet } from '@remix-run/react'

import type { LoaderDataAllPosts } from '../../components/posts/Posts.types'
import { getAllPosts } from '~/models/post.server'

export const loader = async () => {
  return json({ posts: await getAllPosts() })
}

export default function PostAdmin() {
  const posts = useLoaderData() as LoaderDataAllPosts

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">Blog Admin</h1>
      <div className="grid grid-cols-4 gap-6">
        <nav className="col-span-4 md:col-span-1">
          <ul>
            {posts.posts.map((post) => (
              <li key={post.slug}>
                <Link
                  to={`/posts/${post.slug}`}
                  className="text-blue-600 underline"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="col-span-4 md:col-span-3">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
