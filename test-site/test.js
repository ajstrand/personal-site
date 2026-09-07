import fs from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { createServer as createViteServer } from "vite";
import { log } from "@clack/prompts";

const dir = dirname(fileURLToPath(import.meta.url));

const vite = await createViteServer({
  appType: "custom",
  server: { middlewareMode: true },
});
const fullFilePath = "./index.html";
try {
  let template = fs.readFileSync(resolve(dir, fullFilePath), "utf-8");
  const render = (await vite.ssrLoadModule("./frontend/server.jsx")).render;
  const htmlToInsert = render();
  const fullPage = template
    //.replace("<!--css-outlet-->", head)
    .replace("--test-outlet--", htmlToInsert ?? "");

  console.log(fullPage)


  fs.writeFileSync(resolve(dir, "./temp-page.html"), fullPage);
  log.success("data was rendered");
} catch (e) {
  log.error(e.toString());
}
