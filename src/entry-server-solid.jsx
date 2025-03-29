import { renderToString } from "solid-js/web";
import { MDXProvider } from "./solid-mdx";

/**
 * @param {string} _url
 */
export function render(_url) {
  const Data = getIndexPage();
  console.log(Data);
  const App = () => {
    <MDXProvider>
      <Data />
    </MDXProvider>;
  };
  const app = renderToString(() => <App />);
  //const app = renderToString(() => <App />)

  // const Shell = () => (

  // <html lang="en">
  //   <head>
  //     <title>🔥 Solid SSR 🔥</title>
  //     <meta charset="UTF-8" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     <link rel="stylesheet" href="/styles.css" />
  //     <HydrationScript/>
  //   </head>
  //   <body>
  //     <div id="root">
  //     <App/>

  //     </div>
  //     <script type="module" src="/src/entry-client.jsx" />
  //   </body>
  // </html>
  // )
  // let page = renderToString(() => <Shell/>)
  // page = `<!DOCTYPE html>${page}`
  return { app, type: "text/html", status: 200 };
}

function gatherPages() {
  const modules = import.meta.glob("./pages/**/*.{jsx,mdx}", { eager: true });
  if (modules.length === 0) {
    return new Error("no modules");
  }
  return Object.entries(modules).reduce((pages, [modulePath, page]) => {
    const filePath = modulePath
      .replace(/^\.\/pages/, "")
      .replace(/(\.jsx|\.mdx)$/, "");
    const urlPath = filePath.endsWith("/index")
      ? filePath.replace(/index$/, "")
      : `${filePath}/`;
    pages[urlPath] = {
      Component: page.default,
      meta: page.meta,
      tableOfContents: page.tableOfContents,
      filePath,
      modulePath,
      urlPath,
    };
    return pages;
  }, {});
}

function getIndexPage() {
  const modules = import.meta.glob("./pages/**/index.mdx", { eager: true });
  if (modules.length === 0) {
    return new Error("no modules");
  }
  return Object.entries(modules).reduce((pages, [modulePath, page]) => {
    const filePath = modulePath
      .replace(/^\.\/pages/, "")
      .replace(/(\.jsx|\.mdx)$/, "");
    const urlPath = filePath.endsWith("/index")
      ? filePath.replace(/index$/, "")
      : `${filePath}/`;
    pages[urlPath] = {
      Component: page.default,
      meta: page.meta,
      tableOfContents: page.tableOfContents,
      filePath,
      modulePath,
      urlPath,
    };
    return pages;
  }, {});
}
