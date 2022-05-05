import type {
  LoaderDataPostsProps,
  LoaderDataAdmin,
} from '../components/posts/Posts.types'
import { prisma } from '~/db.server'
import type { Post } from '@prisma/client'
export type { Post }

export async function getTodosPosts(): Promise<LoaderDataPostsProps> {
  const data = await fetch('https://gorest.co.in/public/v2/todos')

  const response = await data.json()

  const postList = (await prisma.post.findMany()) as Post[]

  return {
    todos: response,
    posts: postList,
  } as LoaderDataPostsProps
}

export async function getAllPosts(): Promise<LoaderDataAdmin> {
  const posts = (await prisma.post.findMany()) as Post[]

  return posts
}

export async function getPost(slug: string): Promise<Post> {
  const post = (await prisma.post.findUnique({ where: { slug } })) as Post

  return post
}

export async function createPost(
  post: Pick<Post, 'title' | 'slug' | 'markdown'>
) {
  return prisma.post.create({ data: post })
}
