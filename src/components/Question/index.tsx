import { ReactNode } from 'react'
import * as S from './styles'

export type QuestionsProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
  children?: ReactNode
  isAnswered?: boolean
  isHighlighted?: boolean
}

function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false
}: QuestionsProps) {
  return (
    <S.Wrapper isAnswered={isAnswered} isHighlighted={isHighlighted}>
      <S.Content>{content}</S.Content>

      <S.Footer>
        <S.UserInfo>
          <S.Avatar src={author.avatar} alt={author.name} />
          <S.AuthorName>{author.name}</S.AuthorName>
        </S.UserInfo>

        <S.ButtonsWrapper>{children}</S.ButtonsWrapper>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Question
