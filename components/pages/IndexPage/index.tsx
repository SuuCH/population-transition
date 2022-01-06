import type { CSSProperties, VFC } from "react";

import { CheckBoxContainer } from "../../organisms/CheckBoxContainer";
import { GraphContainer } from "../../organisms/GraphContainer";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { HtmlHead } from "../HtmlHead";

const Styles: { [key: string]: CSSProperties } = {
  container: {},
};

const IndexPage: VFC = () => {
  return (
    <>
      <HtmlHead title="PopulationTransition" />
      <Header />
      <main style={Styles.container}>
        <CheckBoxContainer />
        <GraphContainer />
      </main>
      <Footer />
    </>
  );
};

export { IndexPage };
