import type { CSSProperties, VFC } from "react";

interface Props {
  id: string;
  label: string;
  prefCode: number;
  prefName: string;
}

const Styles: { [key: string]: CSSProperties } = {
  checkBox: {},
  label: {},
};

const CheckBox: VFC<Props> = ({ id, label, prefCode, prefName }: Props) => {
  const handleOnChangeCheckBox = (
    prefCode: number,
    prefName: string,
    check: boolean
  ) => {
    console.log(prefCode, prefName, check);
  };
  return (
    <div style={Styles.checkBox}>
      <input
        id={id}
        onChange={(e) =>
          handleOnChangeCheckBox(prefCode, prefName, e.target.checked)
        }
        type="checkbox"
      />
      <label htmlFor={id} style={Styles.label}>
        {label}
      </label>
    </div>
  );
};

export { CheckBox };
export type { Props };
