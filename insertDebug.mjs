import fs from "fs";
import path from "path";
import cheerio from "cheerio";

const fsp = fs.promises;

async function addDebug() {
  let dir = "public/";
  const files = await fsp.readdir(dir, { withFileTypes: true });
  files.map(async (file) => {
    let fullpath = path.join(dir + file.name);
    var stat = fs.statSync(fullpath);
    let isDir = stat.isDirectory();
    if (!isDir) {
      let f = path.extname(file.name);
      if (f === ".html") {
        let data = await fsp.readFile(fullpath, "utf-8");
        const $ = cheerio.load(data);
        let debugStatement = `import "/web_modules/preact/debug.js`;
        let x = $("script")[1].insertBefore(
          `<script type='module'>${debugStatement}</script>`
        );
        console.log(x);
      }
    }
  });
}

addDebug();
