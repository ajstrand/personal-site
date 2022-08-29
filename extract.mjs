import { extractCss } from "goober";
import fs from "fs";
import path from "path";
import cheerio from "cheerio";

let styles = extractCss();
// After your app has rendered, just call it:
const styleTag = `<style id="_goober">${styles}</style>`;

console.log(styleTag);

const fsp = fs.promises;

async function addDebug() {
  let dir = "public/";
  const files = await fsp.readdir(dir, { withFileTypes: true });
  //   files.map(async (file) => {
  //     let fullpath = path.join(dir + file.name);
  //     var stat = fs.statSync(fullpath);
  //     let isDir = stat.isDirectory();
  //     if (!isDir) {
  //       let f = path.extname(file.name);
  //       if (f === ".html") {
  //         let data = await fsp.readFile(fullpath, "utf-8");
  //         const $ = cheerio.load(data);
  //         let debugStatement = `import "/web_modules/preact/debug.js`;
  //         let x = $("script")[1].insertBefore(
  //           `<script type='module'>${debugStatement}</script>`
  //         );
  //         console.log(x);
  //       }
  //     }
  //   });
}
