import * as MDXPostsSource from "./fetch-mdx-post-files.js";
import path from "path";
import fs from "fs-extra";

export const sourceData = async ({ setDataForSlug }) => {
  return Promise.all([MDXPostsSource.sourceData({ setDataForSlug })]);
};

const publicDir = "./public";
const contentDir = "./content";
const srcDir = "./src";

await fs.copy(
  path.resolve(`${contentDir}/resume/alex_strand_resume_latest.pdf`),
  `${publicDir}/alex_strand_resume.pdf`
);

await fs.copy(
  path.resolve(`${contentDir}/assets/me.jpg`),
  `${publicDir}/me.jpg`
);

await fs.copy(path.resolve(`${srcDir}/fonts/`), `${publicDir}/fonts/`);
