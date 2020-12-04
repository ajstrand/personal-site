/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import { MDXProvider } from "@mdx-js/preact";
import { useState } from "preact/hooks";

//needed because gatsby can't render components that require the window object/variable on the server
try {
  var GifPlayer = require("react-gif-player");
} catch (e) {
  console.log("there was an error ", e);
}

const GifPlayerWrapper = (props) => {
  const [gif, setGif] = useState(props);
  return <GifPlayer gif={gif} />;
};

export default GifPlayerWrapper;
