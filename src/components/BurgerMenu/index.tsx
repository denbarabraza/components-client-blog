import React, { FC, memo } from 'react';

import { IBurgerMenu } from './interface';
import { StyledBurgerMenu } from './styled.ts';
import { Theme } from '@/components/Theme';

export const BurgerMenu: FC<IBurgerMenu> = memo(({ open, handleMenuOpen }) => {
  const handleOpen = () => {
    handleMenuOpen();
  };

  return (
    <Theme>
      <StyledBurgerMenu open={open} onClick={handleOpen}>
        <div />
        <div />
        <div />
      </StyledBurgerMenu>
    </Theme>
  );
});
