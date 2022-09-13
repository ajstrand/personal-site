import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import { babel } from "@rollup/plugin-babel";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/pages/Index.js",
  output: {
    file: "bundle.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
    }),
    commonjs(),
    resolve(),
    production && terser(), // minify, but only in production
  ],
};
