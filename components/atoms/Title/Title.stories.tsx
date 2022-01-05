import type { Meta, Story } from "@storybook/react/types-6-0";

import type { Props } from ".";
import { Title } from ".";

const meta: Meta = {
  title: "atoms/Title",
  component: Title,
};

const Template: Story<Props> = (props: Props) => <Title {...props} />;

const Pref = Template.bind({});
Pref.args = {
  label: "県一覧",
};

const Graph = Template.bind({});
Graph.args = {
  label: "グラフ",
};

export default meta;
export { Pref, Graph };
