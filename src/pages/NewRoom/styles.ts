import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`

export const Aside = styled.aside`
  ${({theme}) => css`
    flex: 7;
    background: ${theme.colors.purple};
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12rem 8rem;
  `}
`

export const IllustrationImg = styled.img`
  max-width: 32rem;
`

export const Title = styled.strong`
  ${({theme}) => css`
    font: ${theme.font.bold} ${theme.font.sizes.huge} 'Poppins', sans-serif;
    line-height: 4.2rem;
    margin-top: ${theme.spacings.xsmall};
  `}
`

export const SubTitle = styled.p`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 3.2rem;
    margin-top: ${theme.spacings.xsmall};
    color: ${theme.colors.textWhite};
  `}
`

export const Main = styled.main`
  ${({theme}) => css`
    flex: 8;
    padding: 0 ${theme.spacings.medium};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 32rem;
  align-items: stretch;
  text-align: center;
`

export const LogoImg = styled.img`
  align-self: center;
`

export const Label = styled.h2`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.xxlarge};
    margin: ${theme.spacings.huge} 0 ${theme.spacings.small};
    font-family: 'Poppins', sans-serif;
  `}
`

export const Form = styled.form`
  ${({theme}) => css`
    button {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`

export const Input = styled.input`
  ${({theme}) => css`
    width: 100%;
    height: 5rem;
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xsmall};
    background: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.mediumGray};
  `}
`

export const Call = styled.p`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkGray};
    margin-top: ${theme.spacings.xsmall};

    a {
      color: ${theme.colors.red}; 
    }
  `}
`