import fse from "fs-extra";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const dir = dirname(fileURLToPath(import.meta.url));

const toAbsolute = (p) => resolve(dir, p);

let transformedTemplate = fse.readFileSync(
  resolve(dir, "dist/client/index.html"),
  "utf-8"
);

async function prerender() {
  try {
    const {renderComponent} =  await import("./dist/server/entry-server.js");
    const render = renderComponent

      const renderer = await render(transformedTemplate);
    console.log(renderer)

      // const { body } = renderer.render('/');
      // const fullFilePath = `dist/client/index.html`;
      // fse.outputFileSync(resolve(dir, fullFilePath), body);
      // console.log("🖨   Prerendered", fullFilePath);
   // }

  } catch (e) {
    console.error(e);
  }
}

prerender();
