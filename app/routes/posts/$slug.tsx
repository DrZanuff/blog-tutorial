import { marked } from 'marked'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import { Slug } from '../../components/slug'
import { getPost } from '~/models/post.server'
import type { Post } from '~/models/post.server'
import invariant from 'tiny-invariant'

interface PostSlugReturn {
  post: Post
  html: string
}

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'params.slug is required')

  const post = await getPost(String(params.slug))

  invariant(post, 'Post no found...')

  const html = marked(post.markdown)

  return json({ post, html })
}

export default function PostSlug() {
  const { post, html } = useLoaderData<PostSlugReturn>()

  return <Slug post={post} html={html} />
}
