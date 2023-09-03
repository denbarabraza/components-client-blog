import styled, { css } from 'styled-components';

export const StyledBurgerMenu = styled.button<{ open: boolean }>`
  ${({ theme, open }) => css`
    @media (min-width: ${theme.dimensions.tablet}px) {
      display: none;
    }

    @media (max-width: ${theme.dimensions.tablet}px) {
      display: flex;
      width: ${theme.valueInPx.px40};
      margin-left: ${theme.valueInPx.px20};
      flex-direction: column;
      justify-content: center;
      grid-area: 1 / 2 / 2 / 3;
      grid-gap: ${theme.valueInPx.px5};
      align-items: flex-end;
      height: ${theme.valueInPercent.pr50};
      padding: 0;
      background: transparent;
      border: none;
      cursor: pointer;
      outline: none;
    }
    
    div {
      position: relative;
      z-index: 5000;
      width: ${theme.valueInPx.px30};
      height: ${theme.valueInPx.px3};
      border-radius: ${theme.valueInPx.px3};
      transition: all 0.3s linear;
      transform-origin: 1px;
      background-color: ${theme.usedColors.white};

      &:first-child {
        transform: ${open ? 'rotate(45deg)' : 'rotate(0)'};
      }

      &:nth-child(2) {
        opacity: ${open ? '0' : '1'};
        transform: ${open ? 'translateX(20px)' : 'translateX(0)'};
      }

      &:nth-child(3) {
        transform: ${open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
  `};
`;
