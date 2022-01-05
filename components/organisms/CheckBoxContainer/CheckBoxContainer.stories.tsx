import type { Meta, Story } from "@storybook/react/types-6-0";

import { CheckBoxContainer } from ".";

const meta: Meta = {
  title: "organisms/CheckBoxContainer",
  component: CheckBoxContainer,
};

const Template: Story = () => <CheckBoxContainer />;

const Basic = Template.bind({});

export default meta;
export { Basic };
