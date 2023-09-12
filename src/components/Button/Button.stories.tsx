import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/Button/index.tsx';

const meta: Meta<typeof Button> = {
  title: 'ReactComponentLibrary/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonSt: Story = {
  args: {
    dataCy: 'buttonCy',
    backgroundColor: '#fbd050',
    hoverColor: '#eec14a',
    isValid: true,
    type: 'button',
    title: 'Read More',
  },
};
