// @ts-nocheck
import { test, expect } from "@playwright/test";
import { extractCss } from "goober";
import fs from "fs";
const fsp = fs.promises;

let arr = [
  {
    url: "http://localhost:3000/",
    page: "./public/index.html",
  },
  {
    url: "http://localhost:3000/garden",
    page: "./public/garden.html",
  },
  {
    url: "http://localhost:3000/projects",
    page: "./public/projects.html",
  },
  {
    url: "http://localhost:3000/resume",
    page: "./public/resume.html",
  },
];

for (const sitePage of arr) {
  test(`extract styles for ${sitePage.page}`, async ({ page }) => {
    await page.goto(sitePage.url);
    const styleTag = `<style id="_goober">${extractCss()}</style>`;

    await page.addStyleTag({ content: styleTag });

    const html = await page.content();

    await fsp.writeFile(sitePage.page, html);
  });
}
