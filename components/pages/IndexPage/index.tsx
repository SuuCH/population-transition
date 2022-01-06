import type { CSSProperties, VFC } from "react";

import { CheckBoxContainer } from "../../organisms/CheckBoxContainer";
import { GraphContainer } from "../../organisms/GraphContainer";

const Styles: { [key: string]: CSSProperties } = {
  container: {},
};

const IndexPage: VFC = () => {
  return (
    <>
      <main style={Styles.container}>
        <CheckBoxContainer />
        <GraphContainer />
      </main>
    </>
  );
};

export { IndexPage };
