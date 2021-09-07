import * as MDXPostsSource from "./fetch-mdx-post-files.js";
import path from "path";
import fs from "fs-extra";

export const sourceData = async ({ setDataForSlug }) => {
  return Promise.all([MDXPostsSource.sourceData({ setDataForSlug })]);
};

const publicDir = "./public";
const srcDir = "./src";

await fs.copy(path.resolve(`${srcDir}/fonts/`), `${publicDir}/fonts/`);
