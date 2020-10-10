import { promises as fs } from "fs";
import slugify from "@sindresorhus/slugify";
import mdx from "@mdx-js/mdx";
// import rehypePrism from "./rehype-prism-mdx.js";
import rehypeSlug from "rehype-slug";
import rehypeLink from "rehype-autolink-headings";
import json5 from "json5";
import parse from "rehype-parse";
import unified from "unified";
import visit from "unist-util-visit";
import globby from "globby";
import chalk from "chalk";

export const sourceData = async ({ createPage, ...options }) => {
  const files = await globby("./content/posts", {
    expandDirectories: { extensions: ["mdx"] },
  });

  return Promise.all(
    files.map(async (filename) => {
      let meta = {};
      const remarkPluckMeta = (_options) => (tree) => {
        visit(tree, "export", (ast) => {
          if (ast.value.startsWith("export const meta = ")) {
            const obj = ast.value
              .replace(/^export const meta = /, "")
              .replace(/;$/, "");
            meta = json5.parse(obj);
          }
        });
        return tree;
      };

      const file = await fs.readFile(filename, "utf-8");
      let compiledMDX;
      try {
        compiledMDX = await mdx(file, {
          remarkPlugins: [remarkPluckMeta],
          rehypePlugins: [
            // rehypePrism,
            rehypeSlug,
            [
              rehypeLink,
              {
                content: {
                  children: [],
                },
              },
            ],
          ],
        });
      } catch (e) {
        console.log(e.message);
        console.log(e.location);
        console.log(`the file likely affected was ${filename}`);
        console.log(e);
        throw e;
      }

      if (!meta.slug && meta.title) {
        meta.slug = slugify(meta.title);
      }
      if (!meta.slug) {
        console.warn(
          chalk.red(`No slug found for file > ${filename}
          put a slug in the meta export like:

          \`\`\`
          export const meta = {
            slug: "my-slug"
          }
          \`\`\`

          current meta object is

          \`\`\`
          ${JSON.stringify(meta, null, 2)}
          \`\`\`
          `)
        );
        throw new Error("No slug found");
      }

      // remove leading and trailing slashes
      meta.slug = meta.slug.replace(/^\//, "").replace(/\/$/, "");

      if (!meta.title) {
        console.warn(
          chalk.red(`file ${filename} must have a title in the meta export
            \`\`\`
            export const meta = {
              title: "Some Post Title"
            }
            \`\`\`

            `)
        );
      }
      await createPage({
        module: `/** @jsx mdx */
            import {mdx} from '@mdx-js/preact';
            ${compiledMDX}`,
        slug: meta.slug,
        data: { ...meta },
      });
      // console.log(meta);
      // writeDataFile
      return {
        // id,
        // content,
        ...meta,
      };
    })
  );
};
