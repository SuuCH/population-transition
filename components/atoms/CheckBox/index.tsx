import type { CSSProperties, VFC } from "react";

interface Props {
  id: string;
  label: string;
  prefCode: number;
  prefName: string;
  onChange: (prefCode: number, prefName: string, check: boolean) => void;
}

const Styles: { [key: string]: CSSProperties } = {
  checkBox: {
    borderRadius: "10px",
    border: "1px solid",
    padding: "5px",
    margin: "10px",
    textAlign: "center",
  },
  box: {
    cursor: "pointer",
  },
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
        style={Styles.box}
        type="checkbox"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export { CheckBox };
export type { Props };
