import { defineConfig } from "vite";
import { readFileSync } from "node:fs";
import preact from "@preact/preset-vite";
import { resolve } from "node:path";
import mdx from "@mdx-js/rollup";
import { nodePolyfills } from "vite-plugin-node-polyfills";

import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import rehypeShiki from "@shikijs/rehype";

import esbuild from "rollup-plugin-esbuild";

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
      [
        rehypeShiki,
        {
          // or `theme` for a single theme
          // themes for light and dark themes
          theme: "rose-pine",
        },
      ],
    ],
    remarkPlugins: [remarkMath],
    providerImportSource: "@mdx-js/preact",
  }),
  // use a different html file for dev/prod
  {
    name: "index-html-env",
    async transformIndexHtml() {
      const isProd = process.env.NODE_ENV === "production";
      if (!isProd) {
        return readFileSync("index_dev.html", "utf8");
      }
    },
  },
  // critical css inlining doesnt work right
  //TODO: figure this out later??
  // {
  //   name: "inline-critical",
  //   async transformIndexHtml(html) {
  //     return await InlineCSS(html, "test/");
  //   },
  // },
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
  test: {
    globals: false,
    environment: "jsdom",
    root: __dirname,
    setupFiles: ["./vitest-setup.js"],
  },
  plugins,
});
