import { ComponentStory, ComponentMeta } from "@storybook/react";

import Avatar from ".";

export default {
  title: "Core/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = ({ initials }) => (
  <Avatar initials={initials} variant="purple-dark" size={32} />
);

export const Default = Template.bind({});
Default.args = {
  initials: "HB",
};
