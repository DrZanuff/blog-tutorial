import * as S from './Slug.styles'
import type { SlugProps } from './Slug.types'

export function Slug({ post, html }: SlugProps) {
  return (
    <S.SlugContainer>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </S.SlugContainer>
  )
}
