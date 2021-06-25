import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

const wrapperModifiers = {
  isOutlined: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.purple};
    color: ${theme.colors.purple};
  `
}

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, isOutlined }) => css`
    height: 5rem;
    width: 100%;
    padding: 0 ${theme.spacings.medium};
    border-radius: ${theme.border.radius};
    font-weight: 500;
    background: ${theme.colors.purple};
    color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    transition: filter 0.2s;

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    ${isOutlined && wrapperModifiers.isOutlined(theme)}
  `}
`
