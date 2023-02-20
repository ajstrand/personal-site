import { defineConfig } from "vite";
import { resolve } from "path";
import preact from "@preact/preset-vite";
import esbuild from "rollup-plugin-esbuild";
import mdx from "@mdx-js/rollup";

import rehypeKatex from "rehype-katex";

import rehypeSlug from "rehype-slug";
import rehypeExtractToc from "@stefanprobst/rehype-extract-toc";
import rehypeExtractTocMdx from "@stefanprobst/rehype-extract-toc/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export const plugins = [
  nodePolyfills({
    // Whether to polyfill `node:` protocol imports.
    protocolImports: true,
  }),
  preact(),
  mdx({
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      rehypeExtractToc,
      rehypeExtractTocMdx,
    ],
    remarkPlugins: [remarkGfm, remarkMath],
    providerImportSource: "@mdx-js/preact",
  }),
];

export const build = {
  assetsInlineLimit: 0,
  rollupOptions: {
    input: {
      main: resolve(__dirname, "index.html"),
      plain: resolve(__dirname, "src/nojs/index.html"),
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

const test = {
  globals: true,
  environment: "jsdom",
  setupFiles: "./setup.js",
  css: false,
};

const alias = {
  react: "preact/compat",
  "react-dom": "preact/compat",
};

export default defineConfig({
  esbuild: {
    target: "esnext",
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h, Fragment } from 'preact'`,
  },
  test,
  plugins,
  alias,
  build
});
