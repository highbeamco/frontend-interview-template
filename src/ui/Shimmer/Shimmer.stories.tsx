import { Meta, StoryObj } from "@storybook/react";

import Shimmer from ".";

export default {
  component: Shimmer,
  tags: ["autodocs"],
  args: {},
  render: (args) => {
    return <Shimmer {...args} />;
  },
} satisfies Meta<typeof Shimmer>;

type Story = StoryObj<typeof Shimmer>;

export const Default = {} satisfies Story;
