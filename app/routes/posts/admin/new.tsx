import { Outlet } from '@remix-run/react'
import { Form } from '@remix-run/react'
import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { createPost } from '~/models/post.server'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()

  const title = String(formData.get('title'))
  const slug = String(formData.get('slug'))
  const markdown = String(formData.get('markdown'))

  await createPost({ title, slug, markdown })

  return redirect('/posts/admin')
}

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`
const button = `rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300`

export default function NewPost() {
  return (
    <Form method="post">
      <Outlet />
      <p>
        <label>
          Post Title:{' '}
          <input type="text" name="title" className={inputClassName} />
        </label>
      </p>
      <p>
        <label>
          Post Slug:{' '}
          <input type="text" name="slug" className={inputClassName} />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">Markdown:</label>
        <br />
        <textarea
          id="markdown"
          rows={20}
          name="markdown"
          className={`${inputClassName} font-mono`}
        />
      </p>
      <p className="mb-2 text-right">
        <button type="submit" className={button}>
          Create Post
        </button>
      </p>
    </Form>
  )
}
