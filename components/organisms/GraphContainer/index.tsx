import type { CSSProperties, VFC } from "react";
import type { Composition } from "../../../types/prefectures";

import { Graph } from "../../atoms/Graph";
import { Title } from "../../atoms/Title";
import { SeriesOptionsType } from "highcharts";
import { useRecoilValue } from "recoil";
import { graphDataState } from "../../../lib/atoms/atoms";

const Styles: { [key: string]: CSSProperties } = {
  container: {},
  innner: {},
};

const GraphContainer: VFC = () => {
  const graphDatas = useRecoilValue(graphDataState);
  const categories: string[] = [];
  const series: SeriesOptionsType[] = [];
  graphDatas.map((graphData) => {
    const seriesData: number[] = [];
    graphData.data.map((value: Composition) => {
      categories.push(String(value.year));
      seriesData.push(value.value);
    });
    series.push({
      type: "line",
      name: graphData.prefName,
      data: seriesData,
    });
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
