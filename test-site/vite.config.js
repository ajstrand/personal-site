import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import mdx from "@mdx-js/rollup";
import { resolve } from "path";

export default defineConfig({
  plugins: [mdx({ jsxImportSource: "preact" }), preact()],
  build: {
    manifest: true,
    outDir: "dist",
    output: {
      assetFileNames: "[name].[ext]",
    },
    // lib: {
    //   entry: resolve(__dirname, 'frontend/entry.jsx'),
    //   formats: ['es'],
    //   fileName: 'assets/index'
    // }
  },
});
