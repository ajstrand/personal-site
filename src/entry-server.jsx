import fse from 'fs-extra'
import { resolve } from "path";

import { render } from "preact-render-to-string";
import { MDXProvider } from "@mdx-js/preact";

import { DefaultLayout } from "./layouts/DefaultLayout";

export class Renderer {
  pages = null;
  feeds = null;
  transformedTemplate = null;

  constructor(transformedTemplate, vite) {
    this.pages = gatherPages();
    this.feeds = gatherFeeds();
    this.transformedTemplate = transformedTemplate;
    this.viteServer = vite;
  }

  render(pathname, vite) {
    if (this.feeds[pathname]) {
      return this.renderFeed(pathname);
    } else {
      return this.renderPage(pathname, vite);
    }
  }

  renderFeed(pathname) {
    return {
      status: 200,
      type: "application/feed+json",
      body: this.feeds[pathname](this.pages),
    };
  }

  async renderPage(pathname, vite) {

    if (!pathname.endsWith("/")) pathname = `${pathname}/`;

    const headTags = [];

    let meta;
    let Component;
    let tableOfContents;
    if (this.pages[pathname]) {
      Component = this.pages[pathname].Component;
      meta = this.pages[pathname].meta;
    } else {
      Component = this.pages['/404/'].Component;
      meta = this.pages['/404/'].meta;
    }

    const Layout = DefaultLayout;

    const html = render(
      <MDXProvider
      >
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

    if(meta.static){
      let template = fse.readFileSync(resolve("nojs", 'index.html'), 'utf-8')
      this.transformedTemplate = await transformFileForStaticPage(pathname, template, vite)
      .then(data => data).catch((e) => console.error(e));
    }
    return {
      status: this.pages[pathname] ? 200 : 404,
      type: "text/html",
      body: this.transformedTemplate
        .replace("<!--react-head-outlet-->", render(headTags))
        .replace("<!--body-outlet-->", html),
    };
  }
}

const transformFileForStaticPage = async (pathname, template, vite) => {
  return await vite.transformIndexHtml(pathname, template)
}

function gatherPages() {
  const modules = import.meta.globEager("./pages/**/*.{jsx,mdx}");

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

function gatherFeeds() {
  const modules = import.meta.globEager("./feeds/**/*.jsx");
  return Object.entries(modules).reduce((feeds, [modulePath, feed]) => {
    const urlPath = modulePath
      .replace(/^\.\/feeds/, "")
      .replace(/\.jsx$/, ".json");
    feeds[urlPath] = feed.default;
    return feeds;
  }, {});
}
