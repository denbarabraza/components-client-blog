import { Meta, StoryObj } from '@storybook/react';
import { Loader } from '@/components/Loader/index.tsx';

const meta: Meta<typeof Loader> = {
  title: 'ReactComponentLibrary/Loader',
  component: Loader,
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const LoaderSt: Story = {
  args: {
    borderTopColor: '#5a34a9',
    borderColor: '#eec14a',
    backgroundColorContainer: '#e5e5e5ff',
  },
};
