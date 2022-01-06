import type { CSSProperties, VFC } from "react";

interface Props {
  label: string;
}

const Styles: { [key: string]: CSSProperties } = {
  titlePanel: {
    marginLeft: "3.0rem",
  },
  text: {
    fontSize: "2.0rem",
    textDecoration: "underline",
    textDecorationColor: "black",
  },
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
