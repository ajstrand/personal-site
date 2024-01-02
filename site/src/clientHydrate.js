import { hydrate } from "preact";

const hydrateIslands = (
  islands) => {
  const isles = document.querySelectorAll(
    "[data-hydration-component]"
  );
  if (isles.length === 0) {
    const errMessage = `there were no islands found in the DOM. 
    Check the server file to see what errors were logged`
    console.warn(errMessage);
  }
  isles.forEach((island) => {
    const Component = islands[island.dataset.hydrationComponent];

    if (!Component) {
      const message = `Found a server-rendered Island for 
      ${island.dataset.hydrationComponent} but that component was not passed to hydrateIslands`;

      console.warn(message);
      return;
    }

    const data = island.dataset.hydrationProps;
    const hydrationProps = JSON.parse(data);

    hydrate(<Component {...hydrationProps} />, island);
  });
}

export default hydrateIslands
