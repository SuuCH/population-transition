import type { ChangeEvent, CSSProperties, VFC } from "react";
import type { prefecture } from "../../../types/prefectures";

import { CheckBox } from "../../atoms/CheckBox";

interface Props {
  prefectures: prefecture[] | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Styles: { [key: string]: CSSProperties } = {
  checkField: {},
};

const CheckField: VFC<Props> = ({ prefectures, onChange }: Props) => {
  return (
    <div style={Styles.checkField}>
      {prefectures?.map((value) => (
        <CheckBox
          key={value.id}
          label={value.name}
          id={"pref" + value.id}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export { CheckField };
export type { Props };
