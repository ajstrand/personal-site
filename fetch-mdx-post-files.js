import { sourceMdx } from "@toastdotdev/mdx";

export const sourceData = async ({ setDataForSlug }) => {
  await sourceMdx({
    setDataForSlug,
    directory: "./content",
    slugPrefix: "/posts",
  });
  return;
};
