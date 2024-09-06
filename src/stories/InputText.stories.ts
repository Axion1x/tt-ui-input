import type { Meta, StoryObj } from '@storybook/react';
import InputText from '../components/InputText/InputText';

const meta = {
    title: 'components/Input',
    component: InputText,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      isIconBefore: { control: 'boolean' },
      isIconAfter: { control: 'boolean' },
      isShortKey: { control: 'boolean' },
      labelPosition: {
        control: { type: 'radio' },
        options: ['top', 'left'],
      },
      inputSize: {
        control: { type: 'radio' },
        options: ['sm', 'md', 'lg', 'xl'],
      },
      darkmode: { control: 'boolean' },
      state: {
        control: { type: 'radio' },
        options: ['default', 'hover', 'focus', 'error', 'disabled', 'error-focus'],
      },
      type: {
        control: { type: 'radio' },
        options: ['text', 'number', 'email', 'password'],
      },
    },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isIconBefore: false,
    isIconAfter: false,
    isShortKey: false,
    labelPosition: 'top',
    inputSize: 'md',
    placeholder: 'Input...',
    border: true,
    alignment: 'left',
    darkmode: false,
    state: 'default',
    type: 'text',
  },
};
