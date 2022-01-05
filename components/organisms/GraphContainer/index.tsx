import type { CSSProperties, VFC } from "react";
import type { Composition } from "../../../types/prefectures";

import { useCompositionSwr } from "../../../lib/hooks/useCompositionSwr";

import { Graph } from "../../atoms/Graph";
import { Title } from "../../atoms/Title";
import { SeriesOptionsType } from "highcharts";

const Styles: { [key: string]: CSSProperties } = {
  container: {},
  innner: {},
};

const GraphContainer: VFC = () => {
  const { data, isLoading, isError } = useCompositionSwr(1);
  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;
  const categories: string[] = [];
  const series: SeriesOptionsType[] = [];
  const seriesData: number[] = [];
  data.result.data[0].data.map((value: Composition) => {
    categories.push(String(value.year));
    seriesData.push(value.value);
  });
  series.push({
    type: "line",
    name: "北海道",
    data: seriesData,
  });
  const options: Highcharts.Options = {
    title: {
      text: "総人口推移",
    },
    xAxis: {
      title: {
        text: "年",
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: "人口数",
      },
    },
    series: series,
  };
  return (
    <div style={Styles.container}>
      <div style={Styles.innner}>
        <Title label="人口推移グラフ" />
        <Graph options={options} />
      </div>
    </div>
  );
};

export { GraphContainer };
