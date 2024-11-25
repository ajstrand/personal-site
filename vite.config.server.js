import { defineConfig } from "vite";
import { plugins, build } from "./vite.config.js";

export default defineConfig({
  base: "./",
  plugins,
  build,
  ssr: {
    //noExternal: ["react-helmet-async"],
  },
});
