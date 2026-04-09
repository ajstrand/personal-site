import "preact/debug";
import { hydrate } from "preact";
import Example from "./islands/Example.client";

const hydrationRoot = document.querySelector("[data-hydration-component]");


if(hydrationRoot != null){
hydrate(
  <Example
    buttonText="this button can be clicked"
    text="the button has been clicked"
  />,
  hydrationRoot,
);
}

