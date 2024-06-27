import { Rocket } from "@phosphor-icons/react";
import { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonSize, ButtonVariant } from ".";

const buttonVariants = [
  "default",
  "primary",
  "secondary",
  "tertiary",
  "danger",
  "ghost",
  "plain",
] satisfies ButtonVariant[]; // Array<[key in X]>

const buttonSizes = ["xs", "sm", "md"] satisfies ButtonSize[]; // Array<[key in X]>

const meta = {
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    isSquare: false,
    isLoading: false,
  },
  argTypes: {
    variant: {
      options: buttonVariants,
      control: "radio",
    },
    size: {
      options: buttonSizes,
      control: "radio",
    },
    children: {
      control: "radio",
      options: ["text-only", "long-text", "icon-only", "icon-and-text"],
      mapping: {
        "text-only": "Button",
        "long-text": "Button with long text",
        "icon-only": <Rocket size={14} />,
        "icon-and-text": (
          <>
            <Rocket size={14} /> Button with icon
          </>
        ),
      },
    },
  },
  render: (args) => {
    return <Button {...args} />;
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary = {} satisfies Story;

export const Loading = {
  args: {
    isLoading: true,
  },
} satisfies Story;
