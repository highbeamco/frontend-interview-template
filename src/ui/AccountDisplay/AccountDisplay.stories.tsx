import { Meta, StoryObj } from "@storybook/react";
import AccountIcon from "ui/AccountIcon";

import BankAccountV2, { AccountDisplayIconSize } from ".";

export default {
  component: BankAccountV2,
  tags: ["autodocs"],
  argTypes: {
    icon: { control: { disable: true } },
    iconSize: {
      type: {
        name: "enum",
        value: [16, 18, 20, 24] satisfies AccountDisplayIconSize[], // NB(alex): Wish there were a way to do `Array<[key in X]>`
      },
      control: "inline-radio",
    },
    weight: {
      type: {
        name: "enum",
        value: [400, 500, 700],
      },
      control: "select",
    },
  },
  args: {
    icon: <AccountIcon type="highbeam-account" />,
    iconSize: 18,
    accountName: "Primary",
    accountNumber: "0941",
  },
  render: (args) => {
    return <BankAccountV2 {...args} />;
  },
} satisfies Meta<typeof BankAccountV2>;

type Story = StoryObj<typeof BankAccountV2>;

export const Default = {} satisfies Story;

export const CapitalAccount = {
  args: {
    icon: <AccountIcon type="highbeam-capital-account" />,
    accountName: "Line of credit",
    accountNumber: undefined,
  },
} satisfies Story;

export const InAParagraph = () => {
  return (
    <div style={{ maxWidth: 550 }}>
      <div style={{ fontSize: 14 }}>
        There are no late fees with the Highbeam Card. In case{" "}
        <BankAccountV2
          as="span"
          iconSize={16}
          weight={700}
          style={{ verticalAlign: "bottom", marginLeft: 4, marginRight: 4 }}
          icon={<AccountIcon type="highbeam-account" />}
          accountName="Primary"
          accountNumber="5432"
        />
        account balance is insufficient, the balance will convert into a
        <BankAccountV2
          as="span"
          iconSize={16}
          style={{ verticalAlign: "bottom", marginLeft: 4, marginRight: 4 }}
          icon={<AccountIcon type="highbeam-capital-account" />}
          weight={700}
          accountName="Line of credit"
        />
        drawdown.
      </div>
    </div>
  );
};
