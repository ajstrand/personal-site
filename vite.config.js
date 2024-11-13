import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { resolve } from "node:path";
import mdx from "@mdx-js/rollup";
import { nodePolyfills } from "vite-plugin-node-polyfills";

import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import rehypeShiki from "@stefanprobst/rehype-shiki";

import * as shiki from "shiki";

const highlighter = await shiki.getHighlighter({ theme: "rose-pine-moon" });

import esbuild from "rollup-plugin-esbuild";

//import { ecsstatic } from "@acab/ecsstatic/vite";

import styleX from "vite-plugin-stylex";

export const build = {
  assetsInlineLimit: 0,
  minify: "esbuild",
  rollupOptions: {
    input: {
      main: resolve(__dirname, "index.html"),
    },
    plugins: [
      esbuild({
        target: "esnext",
        jsxFactory: "h",
        jsxFragment: "Fragment",
      }),
    ],
  },
};

export const plugins = [
  preact({
    include: ["**/*.res.mjs"],
  }),
  styleX(),
  //ecsstatic(),

  nodePolyfills({
    // Whether to polyfill `node:` protocol imports.
    protocolImports: true,
  }),
  mdx({
    rehypePlugins: [
      //   rehypeSlug,
      rehypeKatex,
      //   rehypeInferReadingTimeMeta,
      //   rehypeCodeTitles,
      [rehypeShiki, { highlighter }],
    ],
    remarkPlugins: [remarkMath],
    providerImportSource: "@mdx-js/preact",
  }),
];

export default defineConfig({
  base: "./",
  esbuild: {
    target: "esnext",
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h, Fragment } from 'preact'`,
  },
  build,
  plugins,
});
