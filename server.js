import fse from "fs-extra";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { createServer as createViteServer } from "vite";
import consola from "consola";

const dir = dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    appType: "custom",
    server: { middlewareMode: true },
  });
  app.use(vite.middlewares);
  app.use("/server-render", async (req, res) => {
    console.log(req)
     
  })
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

      const render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
      const pageString = render(pathname);
  
      const { html } = pageString;
  
      const head = ""

      const status = 200;

      const type = "text/html"

      const typeObj = {
        "Content-Type":type
      }
    
      const fullPage = template
        .replace("<!--css-outlet-->", head)
        .replace("<!--body-outlet-->", html ?? "");
      res.status(status).set(typeObj).end(fullPage);

    } catch (e) {
      vite.ssrFixStacktrace(e);
      consola.error(e)
      res.status(500).end(e.message);
    }
  });
  app.listen(3000);
  consola.info("the app is running on http://localhost:3000");
}

createServer();
