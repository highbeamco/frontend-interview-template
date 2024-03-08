import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Click",
    size: "normal",
  },
};

export const Warning: Story = {
  args: {
    variant: "danger",
    children: "Delete now",
    size: "normal",
  },
};
