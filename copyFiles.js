import pkg from "fs-extra";
const { copyFileSync, lstatSync } = pkg;

import { consola } from "consola";

const copyFilesForBuild = () => {
  const filename = "alex_strand_resume.pdf";
  const src = `static/resume/${filename}`;
  const dest = `dist/static/assets/${filename}`;
  consola.start("Copying files over");

  try {
    copyFileSync(src, dest);
    consola.success("Copied all files");
  } catch (error) {
    consola.error("There was an issue copying the files.");
    consola.error(error);
  }
};

copyFilesForBuild();
