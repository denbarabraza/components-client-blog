import styled, { css } from 'styled-components';

export const InputItem = styled.input<{ borderColor: string; focusColor: string }>`
  ${({ theme, borderColor, focusColor }) => css`
    width: ${theme.valueInPercent.pr100};
    padding: ${theme.valueInPx.px16};
    border: 1px solid ${borderColor};
    border-radius: ${theme.valueInPx.px5};
    border-right: none;
    font-size: ${theme.fontSizes.xl};
    color: ${theme.usedColors.black};

    &::placeholder {
      color: ${theme.usedColors.black};
    }

    &:focus {
      border: 1px solid ${focusColor};
      border-right: none;
    }
  `};
`;
