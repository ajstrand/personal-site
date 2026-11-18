import { defineConfig } from "vite";
import { plugins, ssrPlugins, build } from "./vite.config.js";

export default defineConfig(({ isSsrBuild }) => ({
  base: "./",
  plugins: isSsrBuild ? ssrPlugins : plugins,
  build,
  ssr: {
  },
}));
