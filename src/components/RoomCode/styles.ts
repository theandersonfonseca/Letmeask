import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    height: 4rem;
    border-radius: ${theme.border.radius};
    overflow: hidden;
    background: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.purple};
    cursor: pointer;
    display: flex;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.95);
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    height: 100%;
    background: ${theme.colors.purple};
    padding: 0 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
  `}
`;

export const CopyImg = styled.img``;

export const Code = styled.span`
  ${({ theme }) => css`
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 ${theme.spacings.xsmall} 0 1.2rem;
    width: 23rem;
    font-size: ${theme.font.sizes.small};
  `}
`;
