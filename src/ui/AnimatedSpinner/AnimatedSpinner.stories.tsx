import { SpinnerGap } from "@phosphor-icons/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AnimatedSpinner from ".";

export default {
  title: "ui/Spinner",
  component: AnimatedSpinner,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AnimatedSpinner>;

const Template: ComponentStory<typeof AnimatedSpinner> = (args) => (
  <AnimatedSpinner {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 14,
};

export const Custom = Template.bind({});
Custom.args = {
  Icon: SpinnerGap,
  size: 24,
};
