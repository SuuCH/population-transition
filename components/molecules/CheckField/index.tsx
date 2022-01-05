import type { CSSProperties, VFC } from "react";
import type { prefecture } from "../../../types/prefectures";

import { CheckBox } from "../../atoms/CheckBox";

interface Props {
  prefectures: prefecture[] | undefined;
}

const Styles: { [key: string]: CSSProperties } = {
  checkField: {},
};

const CheckField: VFC<Props> = ({ prefectures }: Props) => {
  return (
    <div style={Styles.checkField}>
      {prefectures?.map((value) => (
        <CheckBox
          key={value.prefCode}
          label={value.prefName}
          id={"pref" + value.prefCode}
          prefCode={value.prefCode}
          prefName={value.prefName}
        />
      ))}
    </div>
  );
};

export { CheckField };
export type { Props };
