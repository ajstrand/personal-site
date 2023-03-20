import { hydrate } from "preact";

export function hydrateIslands(
  islands) {
  const isles = document.querySelectorAll(
    "[data-tropical-hydration-component]"
  );
  if (isles.length === 0) {
    const errMessage = `there were no islands found in the DOM. 
    Check the server file to see what errors were logged`
    console.warn(errMessage);
  }
  isles.forEach((island) => {
    const Component = islands[island.dataset.tropicalHydrationComponent];

    if (!Component) {
      const message = `Found a server-rendered Tropical Island for 
      ${island.dataset.tropicalHydrationComponent} but that component was not passed to hydrateIslands`;

      console.warn(message);
      return;
    }

    const data = island.dataset.tropicalHydrationProps;
    const hydrationProps = JSON.parse(data);
    /*
      using providers to wrap a component seems to produce
      an extra Preact node.
      So I'm leaving that out for now.
      */
    hydrate(<Component {...hydrationProps} />, island);
  });
}
