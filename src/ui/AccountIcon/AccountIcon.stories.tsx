import { Meta, StoryObj } from "@storybook/react";

import AccountIcon, { AccountType } from ".";

export default {
  component: AccountIcon,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      type: {
        name: "enum",
        value: [
          "highbeam-account",
          "highbeam-high-yield-account",
          "highbeam-capital-account",
        ] satisfies AccountType[], // NB(alex): Wish there were a way to do `Array<[key in X]>`
      },
    },
  },
  args: {
    type: "highbeam-account",
    size: 18,
  },
  render: (args) => {
    return <AccountIcon {...args} />;
  },
} satisfies Meta<typeof AccountIcon>;

type Story = StoryObj<typeof AccountIcon>;

export const Default = {} satisfies Story;
