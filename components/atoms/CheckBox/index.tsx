import type { CSSProperties, VFC } from "react";

interface Props {
  id: string;
  label: string;
  prefCode: number;
  prefName: string;
  onChange: (prefCode: number, prefName: string, check: boolean) => void;
}

const Styles: { [key: string]: CSSProperties } = {
  checkBox: {},
  label: {},
};

const CheckBox: VFC<Props> = ({
  id,
  label,
  prefCode,
  prefName,
  onChange,
}: Props) => {
  return (
    <div style={Styles.checkBox}>
      <input
        id={id}
        onChange={(e) => onChange(prefCode, prefName, e.target.checked)}
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
