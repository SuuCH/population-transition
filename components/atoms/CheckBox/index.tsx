import type { ChangeEvent, CSSProperties, VFC } from "react";

interface Props {
  id: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Styles: { [key: string]: CSSProperties } = {
  checkBox: {},
  label: {},
};

const CheckBox: VFC<Props> = ({ id, label, onChange }: Props) => {
  return (
    <div style={Styles.checkBox}>
      <input id={id} onChange={onChange} type="checkbox" />
      <label htmlFor={id} style={Styles.label}>
        {label}
      </label>
    </div>
  );
};

export { CheckBox };
export type { Props };
