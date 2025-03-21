//import { hydrate, render } from "preact";

import { hydrate, render } from "solid-js/web";
const hydrateIslands = (islands) => {
  const isles = document.querySelectorAll("[data-hydration-component]");
  if (isles.length === 0) {
    const errMessage = `there were no islands found in the DOM. 
    Check the server file to see what errors were logged`;
    console.warn(errMessage);
  }
  for (const island of isles) {
    // we dont need to search for the name of component
    // since we already did that upfront
    // we can just find the component function in the object
    // since we are hydrating islands one at a time
    const Component = islands.Component;

    const nameToFind = island.dataset.hydrationComponent;

    if (!Component) {
      const message = `Found a server-rendered Island for
      ${nameToFind} but that component was not passed to hydrateIslands`;

      console.warn(message);
      return;
    }
    let hydrationProps;
    const data = island.dataset.hydrationProps;
    if (data !== undefined) {
      hydrationProps = JSON.parse(data);
      return hydrate(<Component {...hydrationProps} />, island);
    } else if (data === undefined) {
    }
    hydrate(() => <Component />, island);
    // const Foo = () => <p>hello alex</p>;
    // hydrate(() => <Foo />, island);

    //render(<Component />, island);

    // if (Component.name === "FootnoteTest") {
    //   render(<Component />, island);
    //   return;
    // }
  }
};

export default hydrateIslands;
