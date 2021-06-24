import { ReactNode } from 'react';
import * as S from './styles';

type QuestionsProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
};

function Question({ content, author, children }: QuestionsProps) {
  return (
    <S.Wrapper>
      <S.Content>{content}</S.Content>

      <S.Footer>
        <S.UserInfo>
          <S.Avatar src={author.avatar} alt={author.name} />
          <S.AuthorName>{author.name}</S.AuthorName>
        </S.UserInfo>

        <S.ButtonsWrapper>{children}</S.ButtonsWrapper>
      </S.Footer>
    </S.Wrapper>
  );
}

export default Question;
