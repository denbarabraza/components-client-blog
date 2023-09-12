import { Meta, StoryObj } from '@storybook/react';

import { BurgerMenu } from '@/components/BurgerMenu/index.tsx';

const meta: Meta<typeof BurgerMenu> = {
  title: 'ReactComponentLibrary/BurgerMenu',
  component: BurgerMenu,
};

export default meta;

type Story = StoryObj<typeof BurgerMenu>;

export const BurgerMenuSt: Story = {
  args: {
    open: true,
    handleMenuOpen: () => {},
  },
};
