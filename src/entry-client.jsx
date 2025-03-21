import "solid-devtools";
import hydrateIslands from "./clientHydrate.jsx";

const getComponents = async () => {
  const list = document.querySelectorAll("[data-hydration-component]");
  list.forEach(async (el, i) => {
    const compName = el.getAttribute("data-hydration-component");
    const Comp = await import(`./islands/${compName}.client.jsx`);
    console.log(Comp, " hello alex");
    const Component = Comp.default;
    const Obj = { Component };

    hydrateIslands(Obj);
  });
};

getComponents();
