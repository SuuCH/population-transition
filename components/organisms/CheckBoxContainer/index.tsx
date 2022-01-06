import type { CSSProperties, VFC } from "react";

import { usePrefecturesSwr } from "../../../lib/hooks/usePrefecturesSwr";
import { CheckField } from "../../molecules/CheckField/";
import { Title } from "../../atoms/Title";
import { graphDataState } from "../../../lib/atoms/atoms";
import { useRecoilState } from "recoil";
import { fetcher } from "../../../lib/api/fetcher";

const Styles: { [key: string]: CSSProperties } = {
  container: {},
  innner: {},
};

const CheckBoxContainer: VFC = () => {
  const [graphData, setGraphData] = useRecoilState(graphDataState);
  const handleOnChangeCheckBox = async (
    prefCode: number,
    prefName: string,
    check: boolean
  ) => {
    if (check) {
      const responseData = await fetcher(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${String(
          prefCode
        )}`
      );
      setGraphData([
        ...graphData,
        {
          prefName: prefName,
          data: responseData.result.data[0].data,
        },
      ]);
    } else {
      const deleteIndex = graphData.findIndex(
        (value) => value.prefName === prefName
      );
      setGraphData(graphData.filter((_, index) => index !== deleteIndex));
    }
  };
  const { data, isLoading, isError } = usePrefecturesSwr();
  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;
  return (
    <div style={Styles.container}>
      <div style={Styles.innner}>
        <Title label="県一覧" />
        <CheckField
          prefectures={data.result}
          onChange={handleOnChangeCheckBox}
        />
      </div>
    </div>
  );
};

export { CheckBoxContainer };
