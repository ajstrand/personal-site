import { render as renderToString } from "preact-render-to-string";
import { MDXProvider } from "@mdx-js/preact";
import ServerErrorFallback from "./frontend/ServerErrorFallback.jsx";

const getComponentAndMeta = (pageObject, newUrl) => {
  let Component;
  let meta;
  if (pageObject === undefined) {
    console.warn(
      `No data found for the requested URL ${newUrl}, falling back to 404 page`,
    );
    const errorPage = get404Page();
    Component = errorPage["/404/"]?.Component;
    meta = errorPage["/404/"]?.meta;
  } else {
    Component = pageObject?.Component;
    meta = pageObject?.meta;
  }

  return { Component, meta };
};

export const render = (url) => {
  try {
    const pages = getPages();
    if (Object.keys(pages).length === 0) {
      console.error("Error getting pages: no pages exist", pages);
      return { html: renderToString(<ServerErrorFallback />) };
    }
    function cleanPath(str) {
      const bare = str.replace("./frontend", "").replace(".mdx", "");
      return bare + "/"
    }
    const newUrl = cleanPath(url);
    const pageObject = pages[newUrl];
    const { Component, meta } = getComponentAndMeta(pageObject, newUrl);
    const html = renderToString(
      <MDXProvider>
        <Component pages={pages} meta={meta} />
      </MDXProvider>,
    );

    return {html:html};
  } catch (error) {
    console.error("Error rendering URL:", url, error);
    const errorObj = {
      error: error.toString(),
      url: url,
    };
    const errorResponse = renderToString(
      <ServerErrorFallback error={errorObj} />,
    );
    return errorResponse;
  }
};

function get404Page() {
  const modules = import.meta.glob("./frontend/404.jsx", { eager: true });

  if (Object.keys(modules).length === 0) {
    return new Error("no modules were found, check the server");
  }

  const entries = Object.entries(modules).map(([modulePath, page]) => {
    const filePath = modulePath.replace("./frontend", "").replace(".jsx", "");
    const urlPath = filePath.replace(/\/index$/, "") + "/";

    return [
      urlPath,
      {
        Component: page.default,
        meta: page.meta,
        tableOfContents: page.tableOfContents,
        filePath,
        modulePath,
        urlPath,
      }
    ];
  });

  return Object.fromEntries(entries);
}

function getPages() {
  const modules = import.meta.glob("./frontend/**/*.mdx", { eager: true });

  if (Object.keys(modules).length === 0) {
    return new Error("no modules were found, check the server");
  }

  const entries = Object.entries(modules).map(([modulePath, page]) => {
    const filePath = modulePath.replace("./frontend", "").replace(".mdx", "");
    const urlPath = filePath.replace(/\/index$/, "") + "/";

    return [
      urlPath,
      {
        Component: page.default,
        meta: page.meta,
        tableOfContents: page.tableOfContents,
        filePath,
        modulePath,
        urlPath,
      }
    ];
  });

  return Object.fromEntries(entries);
}
