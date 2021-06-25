import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.spacings.xxsmall};
    right: ${theme.spacings.xxsmall};
  `}
`
