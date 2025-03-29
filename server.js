import fse from "fs-extra";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { createServer as createViteServer } from "vite";
import { generateHydrationScript } from "solid-js/web";
const dir = dirname(fileURLToPath(import.meta.url));

const app = express();
const vite = await createViteServer({
  appType: "custom",
  server: { middlewareMode: true },
});
app.use(vite.middlewares);
app.use("*", async (req, res) => {
  const { pathname } = new URL(
    `${req.protocol}://${req.get("host")}${req.originalUrl}`,
  );
  //console.log(`the pathname is ${pathname}`);
  try {
    const isProd = process.env.NODE_ENV === "production";
    //const filePath = isProd ? "index.html" : "index_dev.html";
    const filePath = "index.html";
    let template = fse.readFileSync(resolve(dir, filePath), "utf-8");
    template = await vite.transformIndexHtml(pathname, template);

    const render = (await vite.ssrLoadModule("/src/entry-server-solid.jsx")).render;
    //const { status, type, body } = renderer.render(pathname);
    const pageString = render(pathname);

    const { app, type, status } = pageString;

    console.log(app)

    const head = `${generateHydrationScript()}`;

    const html = template
      .replace("<!--css-outlet-->", head)
      .replace("<!--body-outlet-->", app ?? "");

    res.status(200).set({ "Content-Type": type}).end(html);

    //res.status(status).set({ "Content-Type": type }).end(body);
  } catch (e) {
    vite.ssrFixStacktrace(e);
    console.error(e);
    res.status(500).end(e.message);
  }
});
app.listen(3000);
console.log("the app is running on http://localhost:3000");
