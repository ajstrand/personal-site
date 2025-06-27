import "preact/debug";
import { hydrate } from "preact";
import Example from "./islands/Example.client";
import Viewport from "./islands/Viewport.client";


const hydrationRoot = document.querySelectorAll("[data-hydration-component]");
let url;
let urlStub;
if (typeof window !== 'undefined') {
	url = window?.location?.href
	const arr = url.split("/")
	urlStub = arr[arr.length - 1]
}


// urlStub === "" ? hydrate(
// 	<Example
// 		buttonText="this button can be clicked"
// 		text="the button has been clicked"
// 	/>,
// 	hydrationRoot,
// ) : null

hydrate(
	<Example
		buttonText="this button can be clicked"
		text="the button has been clicked"
	/>,
	hydrationRoot[1])

	hydrate(
	<Viewport
	
	/>,
	hydrationRoot[0])
