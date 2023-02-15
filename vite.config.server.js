import { defineConfig } from "vite";
import { plugins, build } from "./vite.config.js";

export default defineConfig({
  plugins,
  build,
  resolve: {
    alias: {
      path: "rollup-plugin-node-polyfills/polyfills/path",
    },
  },
  ssr: {
    noExternal: [],
  },
});
