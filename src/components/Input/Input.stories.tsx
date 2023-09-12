import { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/components/Input/index.tsx';

const meta: Meta<typeof Input> = {
  title: 'ReactComponentLibrary/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const InputSt: Story = {
  args: {
    dataCy: 'dataCy',
    placeholder: 'Enter your value',
    borderColor: '#0000007F',
    focusColor: '#fbd050',
    onChange: () => {},
    value: '',
  },
};
