import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.large} ${theme.spacings.huge};
  `}
`

export const IconImg = styled.img`
  width: 4.8rem;
  height: 4.8rem;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    color: ${theme.colors.black};
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    color: ${theme.colors.darkGray};
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    display: flex;
    gap: ${theme.spacings.xsmall};

    button {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};

      &:first-child {
        background: ${theme.colors.lightGray};
        color: ${theme.colors.darkGray};
      }

      &:last-child {
        background: ${theme.colors.danger};
      }
    }
  `}
`
