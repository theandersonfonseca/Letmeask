import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const Aside = styled.aside`
  ${({ theme }) => css`
    flex: 7;
    background: ${theme.colors.purple};
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12rem 8rem;

    @media (max-width: 850px) {
      display: none;
    }
  `}
`;

export const IllustrationImg = styled.img`
  max-width: 32rem;
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    font: ${theme.font.bold} ${theme.font.sizes.huge} 'Poppins', sans-serif;
    line-height: 4.2rem;
    margin-top: ${theme.spacings.xsmall};
  `}
`;

export const SubTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 3.2rem;
    margin-top: ${theme.spacings.xsmall};
    color: ${theme.colors.textWhite};
  `}
`;

export const Main = styled.main`
  ${({ theme }) => css`
    flex: 8;
    padding: 0 ${theme.spacings.medium};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 32rem;
  align-items: stretch;
  text-align: center;
`;

export const LogoImg = styled.img`
  align-self: center;
`;

export const GoogleButton = styled.button`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.huge};
    height: 5rem;
    border-radius: ${theme.border.radius};
    font-weight: 500;
    background: ${theme.colors.red};
    color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  `}
`;

export const GoogleImgIcon = styled.img`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
  `}
`;

export const UserInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const Avatar = styled.img`
  ${({ theme }) => css`
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    margin-top: ${theme.spacings.medium};
  `}
`;

export const AuthorName = styled.span`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.large};
  `}
`;

export const Separator = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.mediumGray};
    margin: ${theme.spacings.medium} 0;
    align-items: center;
    display: flex;

    &::before {
      content: '';
      flex: 1;
      height: 0.1rem;
      background: ${theme.colors.mediumGray};
      margin-right: ${theme.spacings.xsmall};
    }

    &::after {
      content: '';
      flex: 1;
      width: 100%;
      height: 0.1rem;
      background: ${theme.colors.mediumGray};
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    button {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 5rem;
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xsmall};
    background: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.mediumGray};
  `}
`;

export const Call = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkGray};
    margin-top: ${theme.spacings.small};

    a {
      color: ${theme.colors.red};
    }
  `}
`;
