import type { CSSProperties, VFC } from "react";
import type { Prefecture } from "../../../types/prefectures";

import { CheckBox } from "../../atoms/CheckBox";

interface Props {
  prefectures: Prefecture[] | undefined;
  onChange: (prefCode: number, prefName: string, check: boolean) => void;
}

const Styles: { [key: string]: CSSProperties } = {
  checkField: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "20px",
  },
};

const CheckField: VFC<Props> = ({ prefectures, onChange }: Props) => {
  return (
    <div style={Styles.checkField}>
      {prefectures?.map((value) => (
        <CheckBox
          key={value.prefCode}
          label={value.prefName}
          id={"pref" + value.prefCode}
          prefCode={value.prefCode}
          prefName={value.prefName}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export { CheckField };
export type { Props };
