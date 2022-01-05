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
      prefCode: 1,
      prefName: "北海道",
    },
    {
      prefCode: 2,
      prefName: "青森県",
    },
    {
      prefCode: 3,
      prefName: "岩手県",
    },
  ],
};

export default meta;
export { Basic };
