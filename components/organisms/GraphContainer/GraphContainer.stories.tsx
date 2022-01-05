import type { Meta, Story } from "@storybook/react/types-6-0";

import { GraphContainer } from ".";

const meta: Meta = {
  title: "organisms/GraphContainer",
  component: GraphContainer,
};

const Template: Story = () => <GraphContainer />;

const Basic = Template.bind({});

export default meta;
export { Basic };
