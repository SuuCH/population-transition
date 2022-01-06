import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import type { VFC } from "react";

interface Props {
  options: Highcharts.Options;
}

const Graph: VFC<Props> = ({ options }: Props) => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export { Graph };
export type { Props };
