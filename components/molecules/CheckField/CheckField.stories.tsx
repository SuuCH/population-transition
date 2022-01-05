import type { Meta, Story } from "@storybook/react/types-6-0";

import type { Props } from ".";
import { CheckField } from ".";

const meta: Meta = {
  title: "molecules/CheckField",
  component: CheckField,
};

const Template: Story<Props> = (props: Props) => <CheckField {...props} />;

const Basic = Template.bind({});
Basic.args = {
  prefectures: [
    {
      id: 1,
      name: "北海道",
    },
    {
      id: 2,
      name: "青森県",
    },
    {
      id: 3,
      name: "岩手県",
    },
  ],
};

export default meta;
export { Basic };
