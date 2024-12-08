import "preact/debug";
import "../index.css";
//import { render } from "preact";
//import Index from "./pages/index.mdx";

//render(<Index />, document.querySelector("#root"));

import makeStyleX from "@stylexjs/dev-runtime";

export const stylex = makeStyleX({
  classNamePrefix: "x",
  dev: true,
  test: false,
});

import hydrateIslands from "./clientHydrate.jsx";

const getComponents = async () => {
  const list = document.querySelectorAll("[data-hydration-component]");
  list.forEach(async (el, i) => {
    const compName = el.getAttribute("data-hydration-component");
    const Comp = await import(`./islands/${compName}.client.jsx`);
    const Component = Comp.default;
    const Obj = { Component };

    hydrateIslands(Obj);
  });
};

getComponents();

// import { A11yChecker } from "a11y-inspector";
// import { render } from "preact";
// import "../node_modules/a11y-inspector/dist/style.css";
// const root = document.querySelector("#root");
// render(<A11yChecker />, root);

// import Example from "./islands/Example.client.jsx";
// hydrateIslands({ Example });
//const modules = import.meta.glob("./islands/**/*.client.jsx");
// for (const path in modules) {
//   modules[path]().then(({ default: Comp }) => {
//     if (Comp !== undefined) {
//       hydrateIslands({ [Comp.name]: Comp });
//     }
//   });
// }
