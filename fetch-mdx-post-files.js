import { sourceMdx, processMdx } from "@toastdotdev/mdx";
import mdx from "@mdx-js/mdx";
import rehypePrism from "./common-js/rehype-prism-mdx.js";

export const sourceData = async ({ setDataForSlug }) => {
  let allMdx = await sourceMdx({
    setDataForSlug,
    directory: "./content",
    slugPrefix: "/posts",
  });

  await setDataForSlug("/garden", {
    data: { posts: allMdx },
  });

  await Promise.all(
    allMdx.map(async ({ file, slug, data }) => {
      let compiledMDX;

      try {
        compiledMDX = await mdx(file, {
          rehypePlugins: [rehypePrism],
        });
      } catch (e) {
        console.log(e);
        throw e;
      }
      const pageData = data;
      await setDataForSlug(`/posts/${slug}`, {
        component: {
          mode: "source",
          value: `/** @jsx mdx */
import { mdx } from '@mdx-js/preact';
${compiledMDX}`,
        },
        slug: `/posts/${slug}`,
        data: pageData,
      });
    })
  );
};
