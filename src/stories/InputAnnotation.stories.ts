import type { Meta, StoryObj } from "@storybook/react";
import InputAnnotation from "../components/InputAnnotation/InputAnnotation";

const meta: Meta<typeof InputAnnotation> = {
  title: "Components/Annotation",
  component: InputAnnotation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: { control: { type: "select", options: ["default", "hover", "focus", "error", "disabled", "error-focus"] } },
    darkmode: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof InputAnnotation>;

export const Default: Story = {
  args: {
    annotationText: "This is an annotation",
    darkmode: false,
    state: "default",
  },
};
