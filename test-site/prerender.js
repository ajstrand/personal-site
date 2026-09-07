import fs from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { log } from "@clack/prompts";


const dir = dirname(fileURLToPath(import.meta.url));

const toAbsolute = (p) => resolve(dir, p);

const template = fs.readFileSync(
  resolve(dir, "./index.html"),
  "utf-8"
);

const doWork = async (url) => {
  const render = (await import("./dist/server/server.js")).render;



  const page = render(url);
  const { html } = page;
  let head = ""
  const fullPage = template
    .replace("<!--app-html-->", html ?? "");

  function cleanPath(str) {
    return str.replace("./frontend/", "").replace(".mdx", "");
  }
  const newUrl = cleanPath(url)

  const fullFilePath = `dist/static/${newUrl}.html`;
  fs.writeFileSync(resolve(dir, fullFilePath), fullPage);
  log.success("file was created")
};

async function prerender() {
  try {
    //let allFiles = fse.readdirSync(toAbsolute("src/pages")).map((file) => file);
    const pages = ["./frontend/Test.mdx"];
    await Promise.all(
      pages.map(async (page) => {
        await doWork(page);

      })
    )
    log.success("Your static site is ready to deploy from dist/static");
  } catch (e) {
   log.error(e.toString())
  }
}


prerender();
