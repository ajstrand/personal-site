import fse from "fs-extra";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { createServer as createViteServer } from "vite";

//import { createHandler } from "graphql-http/lib/use/express";
//import { buildSchema } from "graphql";
//import { ruruHTML } from "ruru/server";

// Construct a schema, using GraphQL schema language
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// // The root provides a resolver function for each API endpoint
// const root = {
//   hello: () => {
//     return "Hello world!";
//   },
// };

const dir = dirname(fileURLToPath(import.meta.url));
const list = ["math-in-mdx.mdx", "404.jsx"];

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    appType: "custom",
    server: { middlewareMode: true },
  });
  app.use(vite.middlewares);

  // Create and use the GraphQL handler.
  //   app.all(
  //     "/graphql",
  //     createHandler({
  //       schema: schema,
  //       rootValue: root,
  //     })
  //   );

  app.use("*", async (req, res) => {
    const { pathname } = new URL(
      `${req.protocol}://${req.get("host")}${req.originalUrl}`
    );

    try {
      let template = fse.readFileSync(resolve(dir, "index.html"), "utf-8");

      //   let bareValue = pathname.replace(/\//g, "");
      //   // console.log(bareValue)
      //   let shouldBeStatic = list.some((item, index) => {
      //     let x = item.includes(bareValue);
      //     return x ? bareValue : null;
      //   });
      //   if (shouldBeStatic) {
      //     let staticHtmlPath = "src/nojs/index.html";
      //     template = fse.readFileSync(resolve(dir, staticHtmlPath), "utf-8");
      //   }

      const transformedTemplate = await vite.transformIndexHtml(
        pathname,
        template
      );

      const { Renderer } = await vite.ssrLoadModule("/src/entry-server.jsx");
      const renderer = new Renderer(transformedTemplate);

      const { status, type, body } = renderer.render(pathname);
      res.status(status).set({ "Content-Type": type }).end(body);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(3000);
}

createServer();
