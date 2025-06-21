import fse from "fs-extra";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { consola } from "consola";


const dir = dirname(fileURLToPath(import.meta.url));

const toAbsolute = (p) => resolve(dir, p);

const template = fse.readFileSync(
  resolve(dir, "dist/static/index.html"),
  "utf-8"
);

const list = ["math-in-mdx.mdx"];

const doWork = async (url) => {
  const render = (await import("./dist/server/entry-server.js")).render;

  // for (const url of test) {
  //   let shouldBeStatic = list.includes(url);
  //   if (shouldBeStatic) {
  //     let staticHtmlPath = "src/nojs/index.html";
  //     transformedTemplate = fse.readFileSync(
  //       resolve(dir, staticHtmlPath),
  //       "utf-8"
  //     );
  // }

  // const localFilePath = url
  //   .replace(/^\.\/pages/, "/")
  //   .replace(/(\.jsx|\.mdx)$/, "");

  const localFilePath = url
    .replace(/src\/pages/, "")
    .replace(/pages\//, "")
    .replace(/(\.jsx|\.mdx)$/, "");

  // const urlPath = localFilePath.includes("index")
  //   ? localFilePath.replace(/index$/, "")
  //   : `/${localFilePath}/`;

  const urlPath = localFilePath.includes("index") ? "/" : `/${localFilePath}/`;

  const page = render(urlPath);
  const { html } = page;
  let head = ""
  const fullPage = template
    .replace("<!--css-outlet-->", head)
    .replace("<!--body-outlet-->", html ?? "");

  const fullFilePath = `dist/static${localFilePath}.html`;
  fse.outputFileSync(resolve(dir, fullFilePath), fullPage);
  consola.info("🖨   Prerendered", fullFilePath);
};

async function prerender() {
  try {
    //let allFiles = fse.readdirSync(toAbsolute("src/pages")).map((file) => file);
    const pages = ["src/pages/index.mdx", "src/pages/404.jsx"];
    pages.forEach(async (page) => {
      await doWork(page);
    });
    consola.success("Your static site is ready to deploy from dist/static");
  } catch (e) {
    consola.error(e)
  }
}

// determine routes to pre-render from src/pages
// const routesToPrerender = fs
//   .readdirSync(toAbsolute('src/pages'))
//   .map((file) => {
//     const name = file.replace(/\.vue$/, '').toLowerCase()
//     return name === 'home' ? `/` : `/${name}`
//   })

// (async () => {
//   // pre-render each route...
//   for (const url of routesToPrerender) {
//     const [appHtml, preloadLinks] = await render(url, manifest)

//     const html = template
//       .replace(`<!--preload-links-->`, preloadLinks)
//       .replace(`<!--app-html-->`, appHtml)

//     const filePath = `dist/static${url === '/' ? '/index' : url}.html`
//     fs.writeFileSync(toAbsolute(filePath), html)
//     console.log('pre-rendered:', filePath)
//   }

//   })()

prerender();
