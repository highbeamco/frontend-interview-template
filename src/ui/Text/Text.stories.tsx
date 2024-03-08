import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from ".";

const TEXT = "Business banking, reimagined for ecommerce.";

export default {
  title: "Core/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const All = () => (
  <>
    <h2>Regular</h2>

    <Text size={12}>{TEXT}</Text>
    <Text size={14}>{TEXT}</Text>
    <Text size={16}>{TEXT}</Text>
    <Text size={18}>{TEXT}</Text>
    <Text size={20}>{TEXT}</Text>
    <Text size={28}>{TEXT}</Text>

    <h2>Medium</h2>

    <Text size={12} weight="medium">
      {TEXT}
    </Text>
    <Text size={14} weight="medium">
      {TEXT}
    </Text>
    <Text size={16} weight="medium">
      {TEXT}
    </Text>
    <Text size={18} weight="medium">
      {TEXT}
    </Text>
    <Text size={20} weight="medium">
      {TEXT}
    </Text>
    <Text size={28} weight="medium">
      {TEXT}
    </Text>

    <h2>Bold</h2>

    <Text size={12} weight="bold">
      {TEXT}
    </Text>
    <Text size={14} weight="bold">
      {TEXT}
    </Text>
    <Text size={16} weight="bold">
      {TEXT}
    </Text>
    <Text size={18} weight="bold">
      {TEXT}
    </Text>
    <Text size={20} weight="bold">
      {TEXT}
    </Text>
    <Text size={28} weight="bold">
      {TEXT}
    </Text>
  </>
);
export const CustomComponent = Template.bind({});
CustomComponent.args = {
  size: 12,
  children: TEXT,
  numeric: false,
  as: "span",
};
