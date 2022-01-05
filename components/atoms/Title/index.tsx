import type { CSSProperties, VFC } from "react";

interface Props {
  label: string;
}

const Styles: { [key: string]: CSSProperties } = {
  titlePanel: {},
  text: {},
};

const Title: VFC<Props> = ({ label }: Props) => {
  return (
    <div style={Styles.titlePanel}>
      <p style={Styles.text}>{label}</p>
    </div>
  );
};

export { Title };
export type { Props };
