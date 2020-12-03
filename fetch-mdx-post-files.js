import { sourceMdx } from "@toastdotdev/mdx";

export const sourceData = async ({ setDataForSlug }) => {
  let allMdx = await sourceMdx({
    setDataForSlug,
    directory: "./content",
    slugPrefix: "/posts",
  });
  await setDataForSlug("/garden", {
    data: { posts: allMdx },
  });
};
