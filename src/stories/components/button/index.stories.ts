import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    className:
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    className:
      'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    className:
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 text-lg rounded',
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    className:
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 text-sm rounded',
  },
};
