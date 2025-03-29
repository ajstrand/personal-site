import { renderToString } from "solid-js/web";

import { DefaultLayout } from "./layouts/DefaultLayout";
import NotFoundPage from "./pages/404";
import { MDXProvider } from "solid-jsx";
import Index from "../pageTemplate.jsx";

// export const ServerApp = (props) => {
//   return (
//     <html lang="en">
//       <head>
//         <title>My App</title>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </head>
//       <body>
//         <div id="app">{props.children}</div>
//       </body>
//       <script src="./src/entry-client.jsx" type="module"></script>
//     </html>
//   );
// };
export function render(url) {
  if (url === "/favicon.ico" || url === "/entry-client.jsx") return "";
  const pages = gatherPages();

  // console.log(pages[url]);
  const Temp = pages[url]?.Component;

  if (Temp === undefined) {
    return "";
  }

  let html = renderToString(() => <Temp />);

  return { html };
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
// export class Renderer {
//   pages = null;
//   feeds = null;

//   constructor() {
//     this.pages = gatherPages();
//   }

//   render(pathname) {
//     return this.renderPage(pathname);
//   }

//   renderPage(pathname) {
//     if (!pathname.endsWith("/")) pathname = `${pathname}/`;

//     let meta;
//     let Component;
//     let tableOfContents;
//     Component = this.pages[pathname]?.Component;
//     meta = this.pages[pathname]?.meta;
//     const pageToBuild = this.pages[pathname];
//     if (pageToBuild) {
//       Component = this.pages[pathname].Component;
//       meta = this.pages[pathname].meta;
//     } else {
//       const warnMessage = `${pageToBuild} was not found with the pathname ${pathname}.
//       check that ${pathname} is correctly spelled/has leading or ending slashes.
//       ${pageToBuild} will be rendered as a 404 page.`;
//       console.warn(warnMessage);
//       Component = this.pages["/404/"].Component;
//       meta = this.pages["/404/"].meta;
//     }
//     const Layout = DefaultLayout;
//     let html;
//     try {
//       html = render(
//         <MDXProvider>
//           <Layout
//             meta={meta}
//             tableOfContents={tableOfContents}
//             pages={this.pages}
//           >
//             <Component
//               meta={meta}
//               tableOfContents={tableOfContents}
//               pages={this.pages}
//             />
//           </Layout>
//         </MDXProvider>
//       );
//     } catch (error) {
//       console.log(error);
//       html = render(<p>test</p>);
//     }

//     return res;
//   }
// }

// function gatherPages() {
//   const modules = import.meta.glob("./pages/**/*.{jsx,mdx}", { eager: true });
//   if (modules.length === 0) {
//     return new Error("no modules");
//   }
//   return Object.entries(modules).reduce((pages, [modulePath, page]) => {
//     const filePath = modulePath
//       .replace(/^\.\/pages/, "")
//       .replace(/(\.jsx|\.mdx)$/, "");
//     const urlPath = filePath.endsWith("/index")
//       ? filePath.replace(/index$/, "")
//       : `${filePath}/`;
//     pages[urlPath] = {
//       Component: page.default,
//       meta: page.meta,
//       tableOfContents: page.tableOfContents,
//       filePath,
//       modulePath,
//       urlPath,
//     };
//     return pages;
//   }, {});
// }
