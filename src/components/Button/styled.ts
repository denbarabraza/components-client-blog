import styled, { css } from 'styled-components';

export const ButtonItem = styled.button<{ backgroundColor: string; hoverColor: string }>`
  ${({ theme, backgroundColor, hoverColor }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${theme.valueInPx.px200};
    height: ${theme.valueInPx.px60};
    background: ${backgroundColor};
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.usedColors.black};
    line-height: ${theme.valueInPx.px25};
    transition: transform 250ms;
    cursor: pointer;
    border: none;

    &:hover {
      background-color: ${hoverColor};
      transform: translateX(10px);
    }

    &:disabled {
      background-color: ${theme.usedColors.grayOpacity};
    }

    @media (max-width: ${theme.dimensions.tablet}px) {
      margin: 0 auto;
    }
  `};
`;
