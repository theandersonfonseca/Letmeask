import styled, { css, DefaultTheme } from 'styled-components';

import * as QuestionStyles from '../../components/Question/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${QuestionStyles.Wrapper}:not(:first-child) {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.textWhite};
  `}
`;

export const Content = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const LogoImg = styled.img`
  ${({ theme }) => css`
    max-height: 4.5rem;

    @media (max-width: 600px) {
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`;

export const Main = styled.main`
  ${({ theme }) => css`
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 ${theme.spacings.xsmall};
  `}
`;

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0 ${theme.spacings.small};
    display: flex;
    align-items: center;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: 'Poppins', sans-serif;
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.black};
  `}
`;

export const QuestionCount = styled.span`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xsmall};
    background: ${theme.colors.darkPink};
    border-radius: 999rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    color: ${theme.colors.white};
    font-weight: 500;
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Form = styled.form``;

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    border: 0;
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    background: ${theme.colors.white};
    box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 13rem;
  `}
`;

export const FormFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${theme.spacings.xsmall};

    button {
      width: auto;
    }
  `}
`;

export const FormFooterSpan = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkGray};
    font-weight: 500;
  `}
`;

export const FormFooterCallLogin = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    color: ${theme.colors.purple};
    text-decoration: underline;
    font-size: ${theme.font.sizes.small};
    cursor: pointer;
    margin-left: 0.4rem;
  `}
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
`;

export const Username = styled.span`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
    color: ${theme.colors.black};
    font-weight: 500;
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Questions = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`;

type LikeButtonProps = {
  hasLiked: string | undefined;
};

const likeButtonModifiers = {
  hasLiked: (theme: DefaultTheme) => css`
    color: ${theme.colors.purple};

    svg path {
      stroke: ${theme.colors.purple};
    }
  `,
};

export const LikeButton = styled.button<LikeButtonProps>`
  ${({ theme, hasLiked }) => css`
    display: flex;
    align-items: flex-end;
    color: ${theme.colors.darkGray};
    gap: ${theme.spacings.xxsmall};
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    ${!!hasLiked && likeButtonModifiers.hasLiked(theme)}
  `}
`;

export const LikeCount = styled.span``;
