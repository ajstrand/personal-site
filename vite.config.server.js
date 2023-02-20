import { defineConfig } from "vite";
import { plugins, build } from "./vite.config.js";

export default defineConfig({
  plugins,
  build,
  ssr: {
    noExternal: [],
  },
});
