import { Meta, StoryObj } from "@storybook/react";

import AnimatedSpinner from ".";

export default {
  component: AnimatedSpinner,
  render: () => <AnimatedSpinner />,
} satisfies Meta<typeof AnimatedSpinner>;

type Story = StoryObj<typeof AnimatedSpinner>;

export const Default = {} satisfies Story;
