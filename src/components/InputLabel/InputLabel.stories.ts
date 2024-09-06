import type { Meta, StoryObj } from "@storybook/react";
import InputLabel from "./InputLabel";

const meta: Meta<typeof InputLabel> = {
  title: "Components/InputLabel",
  component: InputLabel,
  tags:['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    labelSize: { control: { type: "select", options: ["sm", "md"] } },
    state: { control: { type: "select", options: ["default", "hover", "focus", "error", "disabled", "error-focus"] } },
    darkmode: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof InputLabel>;

export const Default: Story = {
  args: {
    labelText: "Label",
    tooltip: "Tooltip text",
    isRequired: false,
    isMarked: false,
    labelSize: "md",
    darkmode: false,
  },
};
