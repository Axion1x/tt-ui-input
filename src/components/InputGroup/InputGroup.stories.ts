import type { Meta, StoryObj } from "@storybook/react";
import InputGroup from "./InputGroup";

const meta: Meta<typeof InputGroup> = {
    title: "Components/InputGroup",
    component: InputGroup,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
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
        labelSize: { control: { type: "select", options: ["sm", "md"] } },
    },
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
    args: {
        labelText: "Label",
        tooltip: "Tooltip text",
        isRequired: false,
        isMarked: false,
        labelSize: "md",
        darkmode: false,
        isIconBefore: false,
        isIconAfter: false,
        isShortKey: false,
        labelPosition: 'top',
        inputSize: 'md',
        placeholder: 'Input...',
        border: true,
        alignment: 'left',
        state: 'default',
        type: 'text',
        annotationText: 'Some annotation text'
    },
};
