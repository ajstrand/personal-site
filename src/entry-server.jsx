import { render } from "preact-render-to-string";
import { MDXProvider } from "@mdx-js/preact";

import { DefaultLayout } from "./layouts/DefaultLayout";

export class Renderer {
  pages = null;
  feeds = null;
  transformedTemplate = null;

  constructor(transformedTemplate) {
    this.pages = gatherPages();
    this.transformedTemplate = transformedTemplate;
  }

  render(pathname) {
    return this.renderPage(pathname);
  }

  renderPage(pathname) {
    if (!pathname.endsWith("/")) pathname = `${pathname}/`;

    let meta;
    let Component;
    let tableOfContents;
    const pageToBuild = this.pages[pathname];
    if (pageToBuild) {
      Component = this.pages[pathname].Component;
      meta = this.pages[pathname].meta;
    } else {
      const warnMessage = `${pageToBuild} was not found with the pathname ${pathname}. 
      check that ${pathname} is correctly spelled/has leading or ending slashes. 
      ${pageToBuild} will be rendered as a 404 page.`;
      console.warn(warnMessage);
      Component = this.pages["/404/"].Component;
      meta = this.pages["/404/"].meta;
    }
    const Layout = DefaultLayout;

    // const html = render(
    //   <MDXProvider>
    //     <Component
    //       meta={meta}
    //       tableOfContents={tableOfContents}
    //       pages={this.pages}
    //     />
    //   </MDXProvider>
    // );

    const html = render(
      <MDXProvider>
        <Layout
          meta={meta}
          tableOfContents={tableOfContents}
          pages={this.pages}
        >
          <Component
            meta={meta}
            tableOfContents={tableOfContents}
            pages={this.pages}
          />
        </Layout>
      </MDXProvider>
    );

    return {
      status: this.pages[pathname] ? 200 : 404,
      type: "text/html",
      body: this.transformedTemplate.replace("<!--body-outlet-->", html),
    };
  }
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
