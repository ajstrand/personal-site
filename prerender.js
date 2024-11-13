import fse from "fs-extra";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));

const toAbsolute = (p) => resolve(dir, p);

let transformedTemplate = fse.readFileSync(
  resolve(dir, "dist/static/index.html"),
  "utf-8"
);

const list = ["math-in-mdx.mdx"];

async function prerender() {
  try {
    const { Renderer } = await import("./dist/server/entry-server.js");
    //let allFiles = fse.readdirSync(toAbsolute("src/pages")).map((file) => file);
    let test = await fse.readFile("src/pages/index.mdx");
    for (const url of test) {
      //   let shouldBeStatic = list.includes(url);
      //   if (shouldBeStatic) {
      //     let staticHtmlPath = "src/nojs/index.html";
      //     transformedTemplate = fse.readFileSync(
      //       resolve(dir, staticHtmlPath),
      //       "utf-8"
      //     );
      // }
      const renderer = new Renderer(transformedTemplate);

      const localFilePath = url
        .replace(/^\.\/pages/, "")
        .replace(/(\.jsx|\.mdx)$/, "");

      const urlPath = localFilePath.includes("index")
        ? localFilePath.replace(/index$/, "")
        : `/${localFilePath}/`;

      const { body } = renderer.render(urlPath);
      const fullFilePath = `dist/static/${localFilePath}.html`;
      fse.outputFileSync(resolve(dir, fullFilePath), body);
      console.log("🖨   Prerendered", fullFilePath);
    }

    console.log("🦖  Your static site is ready to deploy from dist/static");
  } catch (e) {
    console.error(e);
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
