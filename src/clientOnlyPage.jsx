import { render } from "preact";

import { MDXProvider } from "@mdx-js/preact";

import { DefaultLayout } from "./layouts/DefaultLayout";
import Index from "./pages/index.mdx";

const Client = () => {
  const meta = {};
  return (
    <MDXProvider>
      <DefaultLayout meta={meta}>
        <Page>
          <Index />
        </Page>
      </DefaultLayout>
    </MDXProvider>
  );
};

const root = document.querySelector("#root");

render(<Client />, clientRoot);
