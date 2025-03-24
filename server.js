import fse from "fs-extra";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { createServer as createViteServer } from "vite";
import {generateHydrationScript} from "solid-js/web"
const dir = dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    appType: "custom",
    server: { middlewareMode: true },
  });
  app.use(vite.middlewares);
  app.use("*", async (req, res) => {
    const { pathname } = new URL(
      `${req.protocol}://${req.get("host")}${req.originalUrl}`
    );
    try {
      const isProd = process.env.NODE_ENV === "production";
      const filePath = "index.html";
      let template = fse.readFileSync(resolve(dir, filePath), "utf-8");
      const transformedTemplate = await vite.transformIndexHtml(
        pathname,
        template
      );
      const render = (await vite.ssrLoadModule("/src/entry-server-solid.jsx")).render;
     // const renderer = new Renderer(transformedTemplate);
      const { status, type, app } = render(pathname);

          const head = `${generateHydrationScript()}`
      
          const html = template
            .replace("<!--app-head-->", head)
            .replace("<!--app-html-->", app ?? '')

      res.status(status).set({ "Content-Type": type }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });
  app.listen(3000);
  console.log("the app is running on http://localhost:3000");
}

createServer();
