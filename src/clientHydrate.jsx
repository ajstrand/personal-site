import { hydrate } from "preact";

export function hydrateIslands(
  islands,
  Providers = ({ children }) => children
) {
  const isles = document.querySelectorAll(
    "[data-tropical-hydration-component]"
  );
  // if (isles.length === 0) {
  //   throw new Error("there were no islands found");
  // }
  isles.forEach((island) => {
    const Component = islands[island.dataset.tropicalHydrationComponent];

    console.log("here")

    if (!Component) {
      const message = `Found a server-rendered Tropical Island for 
      ${island.dataset.tropicalHydrationComponent} but that component was not passed to hydrateIslands`;

      console.warn(message);
      return;
    }

    const data = island.dataset.tropicalHydrationProps;
    const hydrationProps = JSON.parse(data);
    hydrate(
      <Providers>
        <Component {...hydrationProps} />
      </Providers>,
      island
    );
  });
}
