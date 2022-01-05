import type { Meta, Story } from "@storybook/react/types-6-0";

import type { Props } from ".";
import { CheckBox } from ".";

const meta: Meta = {
  title: "atoms/CheckBox",
  component: CheckBox,
};

const Template: Story<Props> = (props: Props) => <CheckBox {...props} />;

const Basic = Template.bind({});
Basic.args = {
  label: "広島県",
};

export default meta;
export { Basic };
