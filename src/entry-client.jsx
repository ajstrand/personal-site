import "preact/debug";
import "../index.css";

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
