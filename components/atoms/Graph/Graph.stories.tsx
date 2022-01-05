import type { Meta, Story } from "@storybook/react/types-6-0";

import type { Props } from ".";
import { Graph } from ".";

const meta: Meta = {
  title: "atoms/Graph",
  component: Graph,
};

const Template: Story<Props> = (props: Props) => <Graph {...props} />;

const Basic = Template.bind({});
Basic.args = {
  options: {
    title: {
      text: "My chart",
    },
    series: [
      {
        type: "line",
        data: [1, 2, 3],
      },
    ],
  },
};

export default meta;
export { Basic };
