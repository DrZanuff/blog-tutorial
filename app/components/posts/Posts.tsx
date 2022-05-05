import type { LoaderDataPostsProps } from './Posts.types'
import { Link } from '@remix-run/react'
import { format } from 'date-fns'
import * as S from './Posts.styles'

function Posts({ posts, todos }: LoaderDataPostsProps) {
  return (
    <S.PostsContainer>
      <h1>Posts</h1>
      <S.PostList>
        {posts?.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </S.PostList>

      <div className="m-3 border-2 border-cyan-900 p-2">
        <Link to="admin" className="text-red-600 underline">
          Admin
        </Link>
      </div>

      <S.TodoList>
        {todos.map((todo) => (
          <S.TodoContainer key={todo.id}>
            <h1>{todo.title}</h1>
            <h2>{todo.status}</h2>
            <h3>{format(new Date(todo.due_on), 'MM/dd/yyyy')}</h3>
          </S.TodoContainer>
        ))}
      </S.TodoList>
    </S.PostsContainer>
  )
}

export { Posts }
