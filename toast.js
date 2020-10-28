import * as MDXPostsSource from "./fetch-mdx-post-files.js";

export const sourceData = async ({ setDataForSlug }) => {
  return Promise.all([MDXPostsSource.sourceData({ setDataForSlug })]);
};

// export const prepData = async ({ cacheDir, publicDir }) => {
//   // have to make sure the directory we want to write in exists
//   // We can probably avoid this by offering some kind of "non-filesystem"-based
//   // API for adding data to paths
//   await fse.mkdir(path.resolve(publicDir, "src/pages"), { recursive: true });

//   // prep page data for index and post pages
//   const mdxPostsData = require(path.resolve(cacheDir, "mdx-posts.json"));

//   const allPostsData = mdxPostsData.map(({ title, date, slug, tags }) => ({
//     title,
//     updatedAt: date,
//     slug,
//     tags,
//     contentType: "blog-post",
//   }));

//   await fse.copy(
//     path.resolve("content/resume/alex_strand_resume_latest.pdf"),
//     `${publicDir}/alex_strand_resume.pdf`
//   );

//   await fse.copy(path.resolve("content/assets/me.jpg"), `${publicDir}/me.jpg`);

//   await fse.copy(path.resolve("src/fonts"), `${publicDir}/src/fonts`);

//   await fse.writeFile(
//     path.resolve(publicDir, "src/pages/garden.json"),
//     JSON.stringify({ posts: allPostsData })
//   );

//   // index.html

//   const curatedPostsData = allPostsData
//     .sort((b, a) => {
//       const da = new Date(a.updatedAt).getTime();
//       const db = new Date(b.updatedAt).getTime();
//       if (da < db) return -1;
//       if (da === db) return 0;
//       if (da > db) return 1;
//     })
//     .filter(({ contentType }) => contentType === "blog-post")
//     .slice(0, 5);

//   await fse.writeFile(
//     path.resolve(publicDir, "src/pages/index.json"),
//     JSON.stringify({ posts: curatedPostsData })
//   );
// };
