import Head from "next/head";
import type { VFC } from "react";

interface Props {
  readonly title: string;
}

const HtmlHead: VFC<Props> = ({ title }: Props) => (
  <Head>
    <link rel="icon" href="/favicon.ico" />
    <title key="title">{title}</title>
  </Head>
);

export { HtmlHead };
