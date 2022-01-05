import type { CSSProperties, VFC } from "react";

import { usePrefecturesSwr } from "../../../lib/hooks/usePrefecturesSwr";
import { CheckField } from "../../molecules/CheckField/";
import { Title } from "../../atoms/Title";

const Styles: { [key: string]: CSSProperties } = {
  container: {},
  innner: {},
};

const CheckBoxContainer: VFC = () => {
  const { data, isLoading, isError } = usePrefecturesSwr();
  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;
  return (
    <div style={Styles.container}>
      <div style={Styles.innner}>
        <Title label="県一覧" />
        <CheckField prefectures={data.result} />
      </div>
    </div>
  );
};

export { CheckBoxContainer };