import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import type { CSSProperties, VFC } from "react";

interface Props {
  options: Highcharts.Options;
}

const Styles: { [key: string]: CSSProperties } = {
  graph: {},
};

const Graph: VFC<Props> = ({ options }: Props) => {
  return (
    <div style={Styles.graph}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export { Graph };
export type { Props };
