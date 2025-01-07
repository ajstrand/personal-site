import { readFileSync, readdirSync } from "node:fs";
import { minify } from "csso";
import { consola } from "consola";

async function findAndMinifyCritical(dir) {
  let criticalCss = "";

  readdirSync(dir).forEach((file) => {
    const f = `${dir}/${file}`;
    const content = readFileSync(f).toString();
    criticalCss += minify(content).css;
  });

  return criticalCss;
}

function inlineCritical(html, critical) {
  return html.replace("<!--css-outlet-->", `<style>${critical}</style></head>`);
}

export async function InlineCSS(html, criticalCssDir) {
  const critCSS = await findAndMinifyCritical(criticalCssDir);
  return inlineCritical(html, critCSS);
}
